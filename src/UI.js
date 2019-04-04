import React from "react";
import cloneDeep from "lodash/cloneDeep";

import './UI.scss';

export default class MainWindow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPart: null
        };

        this.handleSelectedPartChange = this.handleSelectedPartChange.bind(this);
    }

    render() {
        return (
            <div className="MainWindow">
                <LeftPanel parts={Parts} selectedPart={this.state.selectedPart} onSelectedPartChange={this.handleSelectedPartChange} />
                <RightPanel reactorProps={ReactorProps} selectedPart={this.state.selectedPart} />
            </div>
        );
    }

    handleSelectedPartChange(part) {
        this.setState({ selectedPart: part });
    }
}

class LeftPanel extends React.Component {
    constructor(props) {
        super(props);

        this.handleSelectedPartChange = this.handleSelectedPartChange.bind(this);
    }

    render() {
        return (
            <div className="LeftPanel">
                <OperationsPanel />
                <PartsPanel parts={this.props.parts} selectedPart={this.props.selectedPart} onSelectedPartChange={this.handleSelectedPartChange} />
            </div>
        );
    }

    handleSelectedPartChange(part) {
        this.props.onSelectedPartChange(part);
    }
}

class RightPanel extends React.Component {
    render() {
        return (
            <div className="RightPanel">
                <TopInfoPanel />
                <ReactorPanel reactorProps={this.props.reactorProps} selectedPart={this.props.selectedPart} />
            </div>
        );
    }
}

class OperationsPanel extends React.Component {
    render() {
        return (<div className="OperationsPanel"></div>);
    };
}

class PartsPanel extends React.Component {
    constructor(props) {
        super(props);

        this.handleSelectedPartChange = this.handleSelectedPartChange.bind(this);
    }

    render() {
        const parts = this.props.parts;
        const cols = 4;
        const rows = parts.length / cols;

        let grid = new Array(rows);

        for (let y = 0; y < rows; y++) {
            grid[y] = new Array(cols);
            for (let x = 0; x < cols; x++) {
                let p = parts[y * cols + x];
                grid[y][x] = <PartUI part={p} key={p.id} selectedPart={this.props.selectedPart} onSelectedPartChange={this.handleSelectedPartChange} />;
            }
        }

        return (<div className="PartsPanel">{grid.map((partsRow, rowIndex) =>
            <div className="parts-row" key={"ReactorRow_" + rowIndex}>
                {partsRow.map((part) => part)}
            </div>
        )}</div>)
    };

    handleSelectedPartChange(part) {
        this.props.onSelectedPartChange(part);
    }
}

class PartUI extends React.Component {
    render() {
        const p = this.props.part;
        const isSelected = this.props.selectedPart ? this.props.selectedPart.id === p.id : false;

        return (
            <div className={"PartUI " + (isSelected ? "selected" : "")} title={p.name} onClick={() => this.handleSelectedPartChange(p, isSelected)}>{p.symbol}</div>
        );
    }

    handleSelectedPartChange(part, isAlreadySelected) {
        this.props.onSelectedPartChange(isAlreadySelected ? null : part);
    }
}

class TopInfoPanel extends React.Component {
    render() {
        return (<div className="TopInfoPanel"></div>);
    };
}

class ReactorPanel extends React.Component {
    render() {
        const props = this.props.reactorProps;
        let grid = new Array(props.Rows);

        for (let y = 0; y < props.Rows; y++) {
            grid[y] = new Array(props.Cols);
            for (let x = 0; x < props.Cols; x++) {
                grid[y][x] =
                    <ReactorCell x={x} y={y} key={"ReactorCell_" + x + "_" + y} selectedPart={this.props.selectedPart} />;
            }
        }

        return (<div className="ReactorPanel">{grid.map((reactorRow, rowIndex) =>
            <div className="reactor-row" key={"ReactorRow_" + rowIndex}>
                {reactorRow.map((reactorCell) => reactorCell)}
            </div>
        )}</div>)
    };
}

class ReactorCell extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            placedPart: null
        };
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        let x = this.props.x, y = this.props.y;
        return (<div className="ReactorCell" key={"ReactorCell_" + x + "_" + y} onClick={this.handleClick}>{this.partVisual}</div>);
    }

    handleClick() {
        console.debug(`Cell (${this.props.y},${this.props.x}) clicked.`);
        if (!this.state.placedPart && this.props.selectedPart) {
            this.setState({ placedPart: cloneDeep(this.props.selectedPart) });
        }
    }

    get partVisual() {
        const p = this.state.placedPart;
        return p ? p.symbol : "";
    }
}

const ReactorProps = {
    Cols: 10,
    Rows: 10
};

const Parts = [
    { category: "PowerCell", id: "0001", name: "Cell 1", symbol: "[X1]" },
    { category: "PowerCell", id: "0002", name: "Cell 2", symbol: "[X2]" },
    { category: "PowerCell", id: "0003", name: "Cell 3", symbol: "[X3]" },
    { category: "PowerCell", id: "0004", name: "Cell 4", symbol: "[X4]" },
    { category: "PowerCell", id: "0005", name: "Cell 5", symbol: "[Y1]" },
    { category: "PowerCell", id: "0006", name: "Cell 6", symbol: "[Y2]" },
    { category: "PowerCell", id: "0007", name: "Cell 7", symbol: "[Y3]" },
    { category: "PowerCell", id: "0008", name: "Cell 8", symbol: "[Y4]" }
];