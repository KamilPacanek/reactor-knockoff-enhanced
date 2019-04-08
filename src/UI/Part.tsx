import React from "react";
import * as Models from "../Models";

interface IPartProps {
    part: Models.IPartDef;
    selectedPart?: Models.IPartDef;
    onSelectedPartChange(part: Models.IPartDef | null): void;
}

interface IPartState {
}

export class Part extends React.Component<IPartProps, IPartState> {
    render() {
        const p = this.props.part;
        const isSelected = this.props.selectedPart ? this.props.selectedPart.id === p.id : false;

        return (
            <div className={"Part " + (isSelected ? "selected" : "")} title={p.name} onClick={() => this.handleSelectedPartChange(p, isSelected)}>{p.symbol}</div>
        );
    }

    handleSelectedPartChange(part: Models.IPartDef | null, isAlreadySelected: boolean) {
        this.props.onSelectedPartChange(isAlreadySelected ? null : part);
    }
}