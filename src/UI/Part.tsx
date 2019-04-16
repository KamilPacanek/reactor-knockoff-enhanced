import React from 'react';

import * as Models from '../Models';
import { PartRenderer } from './PartRenderer';

interface IPartProps {
    part: Models.IPartDef;
    selectedPart?: Models.IPartDef;
    onSelectedPartChange(part: Models.IPartDef | null): void;
    onMouseEnter(part: Models.IPartDef): void;
    onMouseLeave(): void;
}

interface IPartState {
}

export class Part extends PartRenderer<IPartProps, IPartState> {
    render() {
        const p = this.props.part;
        const isSelected = this.props.selectedPart ? this.props.selectedPart.id === p.id : false;

        return (
            <div className={"Part " + (isSelected ? "selected" : "")} title={p.name}
                onClick={() => this.handleSelectedPartChange(p, isSelected)}
                onMouseEnter={() => this.handleMouseEnter(p)}
                onMouseLeave={this.handleMouseLeaving}>
                {this.renderPart(p)}
            </div>
        );
    }

    private handleSelectedPartChange(part: Models.IPartDef | null, isAlreadySelected: boolean) {
        this.props.onSelectedPartChange(isAlreadySelected ? null : part);
    }

    private handleMouseEnter(part: Models.IPartDef) {
        this.props.onMouseEnter(part);
    }

    private handleMouseLeaving = () => {
        this.props.onMouseLeave();
    }
}