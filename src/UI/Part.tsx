import React from 'react';

import * as Models from '../Models';

interface IPartProps {
    part: Models.IPartDef;
    selectedPart?: Models.IPartDef;
    onSelectedPartChange(part: Models.IPartDef | null): void;
    onMouseEnter(part: Models.IPartDef): void;
    onMouseLeave(part: Models.IPartDef): void;
}

interface IPartState {
}

export class Part extends React.Component<IPartProps, IPartState> {
    render() {
        const p = this.props.part;
        const isSelected = this.props.selectedPart ? this.props.selectedPart.id === p.id : false;

        return (
            <div className={"Part " + (isSelected ? "selected" : "")} title={p.name}
                onClick={() => this.handleSelectedPartChange(p, isSelected)}
                onMouseEnter={() => this.handleMouseEnter(p)}
                onMouseLeave={() => this.handleMouseLeaving(p)}>
                {p.symbol}
            </div>
        );
    }

    handleSelectedPartChange(part: Models.IPartDef | null, isAlreadySelected: boolean) {
        this.props.onSelectedPartChange(isAlreadySelected ? null : part);
    }

    handleMouseEnter(part: Models.IPartDef) {
        this.props.onMouseEnter(part);
    }

    handleMouseLeaving(part: Models.IPartDef) {
        this.props.onMouseLeave(part);
    }
}