import cloneDeep from 'lodash/cloneDeep';
import React from 'react';

import * as Models from '../Models';
import { PartRenderer } from './PartRenderer';

interface IReactorCellProps {
    selectedPart?: Models.IPartDef;
    x: number;
    y: number;
    onMouseEnter(part: Models.IPartDef): void;
    onMouseLeave(): void;
}

interface IReactorCellState {
    placedPart: Models.IPartDef | null;
}

export class ReactorCell extends PartRenderer<IReactorCellProps, IReactorCellState> {
    constructor(props: IReactorCellProps) {
        super(props)
        this.state = { placedPart: null };
    }

    render() {
        let x = this.props.x, y = this.props.y;
        return (<div className="ReactorCell" key={"ReactorCell_" + x + "_" + y}
            onClick={this.handleClick}
            onContextMenu={this.handleContextMenu}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeaving}>
            {this.state.placedPart ? this.renderPart(this.state.placedPart) : null}
        </div>);
    }

    private handleMouseEnter = () => {
        if (this.state.placedPart) {
            this.props.onMouseEnter(this.state.placedPart);
        }
    }

    private handleMouseLeaving = () => {
        if (this.state.placedPart) {
            this.props.onMouseLeave();
        }
    }

    private handleClick = () => {
        console.debug(`Cell (${this.props.y},${this.props.x}) clicked.`);
        if (!this.state.placedPart && this.props.selectedPart) {
            this.setState({ placedPart: cloneDeep(this.props.selectedPart) });
        }
    }

    private handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();

        if (this.state.placedPart) {
            this.setState({ placedPart: null });
        }
    }
}