import React from "react";
import * as Models from "../Models";
import * as UI from "./";

interface IRightPanelProps {
    reactorProps: any;
    selectedPart?: Models.IPartDef;
}

interface IRightPanelState {
}

export class RightPanel extends React.Component<IRightPanelProps, IRightPanelState> {
    render() {
        return (
            <div className="RightPanel">
                <UI.TopInfoPanel />
                <UI.ReactorPanel reactorProps={this.props.reactorProps} selectedPart={this.props.selectedPart} />
            </div>
        );
    }
}
