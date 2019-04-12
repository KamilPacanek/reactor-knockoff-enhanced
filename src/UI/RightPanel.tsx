import React from 'react';

import * as Models from '../Models';
import * as UI from './';

interface IRightPanelProps {
    reactorProps: any;
    selectedPart?: Models.IPartDef;
    mouseoverPart?: Models.IPartDef;
    onMouseEnterPart(part: Models.IPartDef): void;
    onMouseLeavePart(): void;
}

interface IRightPanelState {
}

export class RightPanel extends React.Component<IRightPanelProps, IRightPanelState> {
    render() {
        return (
            <div className="RightPanel">
                <UI.TopInfoPanel showInfoOf={this.props.mouseoverPart} />
                <UI.ReactorPanel reactorProps={this.props.reactorProps} selectedPart={this.props.selectedPart}
                    onMouseEnterPart={this.handleMouseEnterPart}
                    onMouseLeavePart={this.handleMouseLeavePart}
                />
            </div>
        );
    }

    private handleMouseEnterPart = (part: Models.IPartDef) => {
        this.props.onMouseEnterPart(part);
    }

    private handleMouseLeavePart = () => {
        this.props.onMouseLeavePart();
    }
}
