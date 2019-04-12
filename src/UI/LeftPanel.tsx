import React from 'react';

import * as Models from '../Models';
import * as UI from './';

interface ILeftPanelProps {
    parts: Models.IPartDef[];
    selectedPart?: Models.IPartDef;
    onSelectedPartChange(part: Models.IPartDef): void;
    onMouseEnterPart(part: Models.IPartDef): void;
    onMouseLeavePart(part: Models.IPartDef): void;
}

interface ILeftPanelState {
}

export class LeftPanel extends React.Component<ILeftPanelProps, ILeftPanelState> {
    constructor(props: ILeftPanelProps) {
        super(props);

        this.handleSelectedPartChange = this.handleSelectedPartChange.bind(this);
        this.handleMouseEnterPart = this.handleMouseEnterPart.bind(this);
        this.handleMouseLeavePart = this.handleMouseLeavePart.bind(this);
    }

    render() {
        return (
            <div className="LeftPanel">
                <UI.OperationsPanel />
                <UI.PartsPanel parts={this.props.parts} selectedPart={this.props.selectedPart}
                    onSelectedPartChange={this.handleSelectedPartChange}
                    onMouseEnterPart={this.handleMouseEnterPart}
                    onMouseLeavePart={this.handleMouseLeavePart} />
            </div>
        );
    }

    handleSelectedPartChange(part: Models.IPartDef) {
        this.props.onSelectedPartChange(part);
    }

    handleMouseEnterPart(part: Models.IPartDef) {
        this.props.onMouseEnterPart(part);
    }

    handleMouseLeavePart(part: Models.IPartDef) {
        this.props.onMouseLeavePart(part);
    }
}