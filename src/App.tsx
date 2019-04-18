import './App.scss';
import './UI.scss';

import cloneDeep from 'lodash/cloneDeep';
import React from 'react';

import * as Models from './Models';
import * as UI from './UI';

export interface IAppState {
  pause: boolean;
  wenting: boolean;
  selling: boolean;
  numbers: Models.IGameData;
}

export default class App extends React.Component<{}, IAppState> {
  private timerId: NodeJS.Timeout | undefined;
  private mainWindow: React.RefObject<UI.MainWindow>;

  constructor(props: any) {
    super(props);
    this.mainWindow = React.createRef();
    this.state = { pause: true, wenting: false, selling: false, numbers: GameData };
  }

  render() {
    return (
      <div className="App">
        <UI.MainWindow parts={Parts} reactorDefinition={this.state.numbers.reactor}
          appState={this.state}
          onManualWentHold={this.handleManualWentHold}
          onManualWentRelease={this.handleManualWentRelease}
          onPauseClick={this.handlePauseClick}
          onSellEnergyClick={this.handleSellEnergyClick}
          ref={this.mainWindow} />
      </div>
    );
  }

  componentWillUnmount() {
    this.chronometerStop();
  }

  private tick = () => {
    let stateCopy = cloneDeep(this.state);
    this.mainWindow.current!.tickElapsed(stateCopy);
    this.calculateHeat(stateCopy);
    this.calculateEnergy(stateCopy);
    this.sellEnergy(stateCopy);

    this.setState(stateCopy);
  }

  private calculateEnergy(state: IAppState) {
    state.numbers.currentEnergy += state.numbers.energyGrowPerTick;
  }

  private calculateHeat(state: IAppState) {
    state.numbers.currentHeat += state.numbers.heatGrowPerTick;
  }

  private sellEnergy(state: IAppState) {
    if (state.selling) {
      state.numbers.moneyOwned += state.numbers.currentEnergy;
      state.numbers.currentEnergy = 0;
    }
    state.selling = false;
  }

  private handlePauseClick = () => {
    if (this.state.pause) {
      this.chronometerStart();
    }
    else {
      this.chronometerStop()
    }

    this.setState({ pause: !this.state.pause });
  }

  private handleManualWentHold = () => {
    this.setState({ wenting: true });
  }

  private handleManualWentRelease = () => {
    this.setState({ wenting: false });
  }

  private handleSellEnergyClick = () => {
    this.setState({ selling: true });
  }

  private chronometerStart() {
    this.chronometerStop();
    this.timerId = setInterval(this.tick, 1000 / this.state.numbers.ticksPerSecond);
  }

  private chronometerStop() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }

    this.setState((s) => { s.numbers.heatGrowPerTick = 0; s.numbers.energyGrowPerTick = 0; });
  }
}

const GameData: Models.IGameData = {
  currentHeat: 0,
  maxHeat: 1000,
  currentEnergy: 0,
  maxEnergy: 100,
  moneyOwned: 0,
  heatGrowPerTick: 0,
  energyGrowPerTick: 0,
  ticksPerSecond: 1,
  reactor: { cols: 10, rows: 10 }
};

const Parts: Models.IPartDef[] = [
  //Uranium Cells are specific and needs to be treated separately because their cost
  //is not conforming to the unified cost calculation function
  {
    category: Models.PartCategory.FuelCell,
    type: Models.PartType.Uranium,
    id: "cu1",
    name: "Single Uranium Cell",
    description: "Basic fuel cell. Generates 1 power and 1 heat.",
    symbol: "[U1]",
    baseCost: 10,
    baseDurability: 15,
    currentDurability: 15,
    basePower: 1,
    baseHeat: 1,
    stage: 1
  },
  {
    category: Models.PartCategory.FuelCell,
    type: Models.PartType.Uranium,
    id: "cu2",
    name: "Double Uranium Cell",
    description: "Basic fuel cell. Generates 4 power and 8 heat.",
    symbol: "[U2]",
    baseCost: 25,
    baseDurability: 15,
    currentDurability: 15,
    basePower: 4,
    baseHeat: 8,
    stage: 2
  },
  {
    category: Models.PartCategory.FuelCell,
    type: Models.PartType.Uranium,
    id: "cu3",
    name: "Quad Uranium Cell",
    description: "Basic fuel cell. Generates 12 power and 36 heat.",
    symbol: "[U4]",
    baseCost: 60,
    baseDurability: 15,
    currentDurability: 15,
    basePower: 12,
    baseHeat: 36,
    stage: 3
  }
];