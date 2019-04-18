import React from 'react';

import { IAppState } from '../App';
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
    private reactorPanel: React.RefObject<UI.ReactorPanel>;

    constructor(props: IRightPanelProps) {
        super(props);
        this.reactorPanel = React.createRef();
    }

    render() {
        return (
            <div className="RightPanel">
                <UI.TopInfoPanel showInfoOf={this.props.mouseoverPart} />
                <UI.ReactorPanel ref={this.reactorPanel} reactorProps={this.props.reactorProps} selectedPart={this.props.selectedPart}
                    onMouseEnterPart={this.handleMouseEnterPart}
                    onMouseLeavePart={this.handleMouseLeavePart}
                />
            </div>
        );
    }

    public tickElapsed(appState: IAppState) {
        this.reactorPanel.current!.tickElapsed(appState);
    }

    private handleMouseEnterPart = (part: Models.IPartDef) => {
        this.props.onMouseEnterPart(part);
    }

    private handleMouseLeavePart = () => {
        this.props.onMouseLeavePart();
    }
}
