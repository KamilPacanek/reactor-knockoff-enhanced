import React from "react";
import * as Models from "../Models";
import * as UI from "./";

interface IPartsPanelProps {
    parts: Models.IPartDef[];
    selectedPart?: Models.IPartDef;
    onSelectedPartChange(part: Models.IPartDef): void;
}

interface IPartsPanelState {
}

export class PartsPanel extends React.Component<IPartsPanelProps, IPartsPanelState> {
    constructor(props: IPartsPanelProps) {
        super(props);

        this.handleSelectedPartChange = this.handleSelectedPartChange.bind(this);
    }

    render() {
        const parts = this.props.parts;
        const cols = 3;
        const rows = parts.length / cols;

        let grid = new Array(rows);

        for (let y = 0; y < rows; y++) {
            grid[y] = new Array(cols);
            for (let x = 0; x < cols; x++) {
                let p = parts[y * cols + x];
                grid[y][x] = <UI.Part part={p} key={p.id} selectedPart={this.props.selectedPart} onSelectedPartChange={this.handleSelectedPartChange} />;
            }
        }

        return (<div className="PartsPanel">{grid.map((partsRow, rowIndex) =>
            <div className="parts-row" key={"ReactorRow_" + rowIndex}>
                {partsRow.map((part: Models.IPartDef) => part)}
            </div>
        )}</div>)
    };

    handleSelectedPartChange(part: Models.IPartDef) {
        this.props.onSelectedPartChange(part);
    }
}