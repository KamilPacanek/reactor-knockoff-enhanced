import './App.scss';
import './UI.scss';

import React from 'react';

import * as Models from './Models';
import * as UI from './UI';

export interface IAppState {
  pause: boolean;
  wenting: boolean;
  moneyOwned: number;
  currentEnergy: number;
}

export default class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);

    this.state = { pause: true, wenting: false, moneyOwned: GameData.moneyOwned, currentEnergy: GameData.currentEnergy };
  }

  render() {
    return (
      <div className="App">
        <UI.MainWindow parts={Parts} reactorDefinition={ReactorDefinition}
          gameData={GameData} appState={this.state}
          onManualWentHold={this.handleManualWentHold}
          onManualWentRelease={this.handleManualWentRelease}
          onPauseClick={this.handlePauseClick}
          onSellEnergyClick={this.handleSellEnergyClick} />
      </div>
    );
  }

  private handlePauseClick = () => {
    this.setState({ pause: !this.state.pause });
  }

  private handleManualWentHold = () => {
    this.setState({ wenting: true });
  }

  private handleManualWentRelease = () => {
    this.setState({ wenting: false });
  }

  private handleSellEnergyClick = () => {
    this.setState({ moneyOwned: this.state.moneyOwned + this.state.currentEnergy, currentEnergy: 0 });
  }
}

const GameData: Models.IGameData = {
  currentHeat: 0,
  maxHeat: 100,
  currentEnergy: 0,
  maxEnergy: 1000,
  moneyOwned: 0,
  heatGrowPerTick: 0,
  energyGrowPerTick: 0
};

const ReactorDefinition: Models.IReactorProperties = {
  rows: 10,
  cols: 10
};

const Parts: Models.IPartDef[] = [
  //Uranium Cells are specific and needs to be treated separately because their cost
  //is not conforming to the unified cost calculation function
  {
    category: Models.PartCategory.FuelCell,
    type: Models.PartType.Uranium,
    id: "cu1",
    uiColor: "#40e141",
    name: "Single Uranium Cell",
    description: "Basic fuel cell. Generates 1 power and 1 heat.",
    symbol: "[U1]",
    baseCost: 10,
    baseDurability: 15,
    basePower: 1,
    baseHeat: 1,
    stage: 1
  },
  {
    category: Models.PartCategory.FuelCell,
    type: Models.PartType.Uranium,
    id: "cu2",
    uiColor: "#15ae16",
    name: "Double Uranium Cell",
    description: "Basic fuel cell. Generates 4 power and 8 heat.",
    symbol: "[U2]",
    baseCost: 25,
    baseDurability: 15,
    basePower: 4,
    baseHeat: 8,
    stage: 2
  },
  {
    category: Models.PartCategory.FuelCell,
    type: Models.PartType.Uranium,
    id: "cu3",
    uiColor: "#038f04",
    name: "Quad Uranium Cell",
    description: "Basic fuel cell. Generates 12 power and 36 heat.",
    symbol: "[U4]",
    baseCost: 60,
    baseDurability: 15,
    basePower: 12,
    baseHeat: 36,
    stage: 3
  }
];