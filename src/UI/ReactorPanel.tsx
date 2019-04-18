import cloneDeep from 'lodash/cloneDeep';
import React from 'react';

import { IAppState } from '../App';
import * as Models from '../Models';
import * as UI from './';

interface IReactorPanelProps {
    reactorProps: Models.IReactorProperties;
    selectedPart?: Models.IPartDef;
    onMouseEnterPart(part: Models.IPartDef): void;
    onMouseLeavePart(): void;
}

interface IReactorPanelState {
    grid: (Models.IPartDef | null)[][];
}

export class ReactorPanel extends React.Component<IReactorPanelProps, IReactorPanelState> {
    constructor(props: IReactorPanelProps) {
        super(props);

        this.state = { grid: new Array(props.reactorProps.rows) };

        for (let y = 0; y < props.reactorProps.rows; y++) {
            this.state.grid[y] = new Array(props.reactorProps.cols);
        }
    }

    render() {
        const props = this.props.reactorProps;
        let gridLayout = new Array(props.rows);

        for (let y = 0; y < props.rows; y++) {
            gridLayout[y] = new Array(props.cols);
            for (let x = 0; x < props.cols; x++) {
                gridLayout[y][x] =
                    <UI.ReactorCell x={x} y={y} key={"ReactorCell_" + x + "_" + y}
                        selectedPart={this.props.selectedPart} placedPart={this.state.grid[y][x]}
                        onMouseEnter={this.handleMouseEnterPart}
                        onMouseLeave={this.handleMouseLeavePart}
                        onLMBClick={this.handleMouseClick}
                        onRMBClick={this.handleContextMenu} />;
            }
        }

        return (<div className="ReactorPanel">{gridLayout.map((reactorRow, rowIndex) =>
            <div className="reactor-row" key={"ReactorRow_" + rowIndex}>
                {reactorRow.map((reactorCell: any) => reactorCell)}
            </div>
        )}</div>)
    };

    public tickElapsed(appState: IAppState) {
        let stateCopy = cloneDeep(this.state);
        appState.numbers.heatGrowPerTick = 1; //TODO
        appState.numbers.energyGrowPerTick = 1; //TOD

        this.reduceDurability(stateCopy);
        this.setState(stateCopy);
    }

    private reduceDurability(stateCopy: IReactorPanelState) {
        const props = this.props.reactorProps;
        for (let y = 0; y < props.rows; y++){
            for (let x = 0; x < props.cols; x++) {
                if(stateCopy.grid[y][x]){
                    stateCopy.grid[y][x]!.currentDurability--;
                }
            }
        }
    }

    private handleMouseEnterPart = (part: Models.IPartDef) => {
        this.props.onMouseEnterPart(part);
    }

    private handleMouseLeavePart = () => {
        this.props.onMouseLeavePart();
    }

    //potential performance issue:
    //deep cloning whole grid
    private handleMouseClick = (row: number, col: number) => {
        if (!this.state.grid[row][col] && this.props.selectedPart) {
            let stateCopy = cloneDeep(this.state);
            stateCopy.grid[row][col] = cloneDeep(this.props.selectedPart!);
            this.setState(stateCopy);
        }
    }

    //potential performance issue:
    //deep cloning whole grid
    private handleContextMenu = (row: number, col: number) => {
        if (this.state.grid[row][col]) {
            let stateCopy = cloneDeep(this.state);
            stateCopy.grid[row][col] = null;
            this.setState(stateCopy);
        }
    }
}