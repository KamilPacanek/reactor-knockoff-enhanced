import React from 'react';

import * as Models from '../Models';
import { PartRenderer } from './PartRenderer';

interface IReactorCellProps {
    selectedPart?: Models.IPartDef;
    placedPart: Models.IPartDef | null;
    x: number;
    y: number;
    onMouseEnter(part: Models.IPartDef): void;
    onMouseLeave(): void;
    onLMBClick(row: number, col: number): void;
    onRMBClick(row: number, col: number): void;
}

interface IReactorCellState {
}

export class ReactorCell extends PartRenderer<IReactorCellProps, IReactorCellState> {
    render() {
        let x = this.props.x, y = this.props.y;
        return (<div className="ReactorCell" key={"ReactorCell_" + x + "_" + y}
            onClick={this.handleClick}
            onContextMenu={this.handleContextMenu}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeaving}>
            {this.props.placedPart ? this.renderPart(this.props.placedPart) : null}
        </div>);
    }

    private handleMouseEnter = () => {
        if (this.props.placedPart) {
            this.props.onMouseEnter(this.props.placedPart);
        }
    }

    private handleMouseLeaving = () => {
        if (this.props.placedPart) {
            this.props.onMouseLeave();
        }
    }

    private handleClick = () => {
        this.props.onLMBClick(this.props.y, this.props.x)
    }

    private handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        this.props.onRMBClick(this.props.y, this.props.x)
    }
}