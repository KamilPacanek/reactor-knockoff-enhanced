import './App.scss';
import './UI.scss';

import React from 'react';

import * as Models from './Models';
import * as UI from './UI';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UI.MainWindow parts={Parts} reactorDefinition={ReactorDefinition} />
      </div>
    );
  }
}

const ReactorDefinition: Models.IReactorProperties = {
  Rows: 10,
  Cols: 10
};

const Parts: Models.IPartDef[] = [
  //Uranium Cells are specific and needs to be treated separately because their cost
  //is not conforming to the unified cost calculation function
  {
    category: 'FuelCell',
    id: "cu1",
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
    category: 'FuelCell',
    id: "cu2",
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
    category: 'FuelCell',
    id: "cu3",
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