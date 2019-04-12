import React from 'react';

import * as Models from '../Models';
import * as UI from './';

interface IReactorPanelProps {
    reactorProps: Models.IReactorProperties;
    selectedPart?: Models.IPartDef;
    onMouseEnterPart(part: Models.IPartDef): void;
    onMouseLeavePart(): void;
}

interface IReactorPanelState {
}

export class ReactorPanel extends React.Component<IReactorPanelProps, IReactorPanelState> {
    render() {
        const props = this.props.reactorProps;
        let grid = new Array(props.Rows);

        for (let y = 0; y < props.Rows; y++) {
            grid[y] = new Array(props.Cols);
            for (let x = 0; x < props.Cols; x++) {
                grid[y][x] =
                    <UI.ReactorCell x={x} y={y} key={"ReactorCell_" + x + "_" + y} selectedPart={this.props.selectedPart}
                        onMouseEnter={this.handleMouseEnterPart}
                        onMouseLeave={this.handleMouseLeavePart} />;
            }
        }

        return (<div className="ReactorPanel">{grid.map((reactorRow, rowIndex) =>
            <div className="reactor-row" key={"ReactorRow_" + rowIndex}>
                {reactorRow.map((reactorCell: UI.ReactorCell) => reactorCell)}
            </div>
        )}</div>)
    };

    private handleMouseEnterPart = (part: Models.IPartDef) => {
        this.props.onMouseEnterPart(part);
    }

    private handleMouseLeavePart = () => {
        this.props.onMouseLeavePart();
    }
}