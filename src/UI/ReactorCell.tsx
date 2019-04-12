import cloneDeep from 'lodash/cloneDeep';
import React from 'react';

import * as Models from '../Models';

interface IReactorCellProps {
    selectedPart?: Models.IPartDef;
    x: number;
    y: number;
}

interface IReactorCellState {
    placedPart: Models.IPartDef | null;
}

export class ReactorCell extends React.Component<IReactorCellProps, IReactorCellState> {
    constructor(props: IReactorCellProps) {
        super(props)

        this.state = { placedPart: null };
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        let x = this.props.x, y = this.props.y;
        return (<div className="ReactorCell" key={"ReactorCell_" + x + "_" + y} onClick={this.handleClick} onContextMenu={(e: React.MouseEvent) => this.handleContextMenu(e)}>{this.partVisual}</div>);
    }

    handleClick() {
        console.debug(`Cell (${this.props.y},${this.props.x}) clicked.`);
        if (!this.state.placedPart && this.props.selectedPart) {
            this.setState({ placedPart: cloneDeep(this.props.selectedPart) });
        }
    }

    handleContextMenu(e: React.MouseEvent) {
        e.preventDefault();

        if (this.state.placedPart) {
            this.setState({ placedPart: null });
        }
    }

    get partVisual() {
        const p = this.state.placedPart;
        return p ? p.symbol : "";
    }
}