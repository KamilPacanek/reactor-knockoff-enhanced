import React from 'react';

import { IAppState } from '../App';
import * as Models from '../Models';
import * as UI from './';

interface IMainWindowParts {
    parts: Models.IPartDef[];
    reactorDefinition: Models.IReactorProperties;
    appState: IAppState;
    onPauseClick(): void;
    onSellEnergyClick(): void;
    onManualWentHold(): void;
    onManualWentRelease(): void;
}

interface IMainWindowState {
    selectedPart?: Models.IPartDef;
    mouseoverPart?: Models.IPartDef;
}

export class MainWindow extends React.Component<IMainWindowParts, IMainWindowState> {
    constructor(props: IMainWindowParts) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="MainWindow" >
                <UI.LeftPanel parts={this.props.parts} selectedPart={this.state.selectedPart}
                    appState={this.props.appState}
                    onSelectedPartChange={this.handleSelectedPartChange}
                    onMouseEnterPart={this.handleMouseEnterPart}
                    onMouseLeavePart={this.handleMouseLeavePart}
                    onManualWentHold={this.handleManualWentHold}
                    onManualWentRelease={this.handleManualWentRelease}
                    onPauseClick={this.handlePauseClick}
                    onSellEnergyClick={this.handleSellEnergyClick} />
                <UI.RightPanel reactorProps={this.props.reactorDefinition}
                    selectedPart={this.state.selectedPart}
                    mouseoverPart={this.mouseoverPart}
                    onMouseEnterPart={this.handleMouseEnterPart}
                    onMouseLeavePart={this.handleMouseLeavePart} />
            </div>
        );
    }

    private handleSelectedPartChange = (part: Models.IPartDef) => {
        this.setState({ selectedPart: part });
    }

    private handleMouseEnterPart = (part: Models.IPartDef) => {
        this.setState({ mouseoverPart: part });
    }

    private handleMouseLeavePart = () => {
        this.setState({ mouseoverPart: undefined });
    }

    private get mouseoverPart(): Models.IPartDef | undefined {
        return this.state.mouseoverPart || this.state.selectedPart;
    }

    private handleManualWentHold = () => {
        this.props.onManualWentHold();
    }

    private handleManualWentRelease = () => {
        this.props.onManualWentRelease();
    }

    private handlePauseClick = () => {
        this.props.onPauseClick();
    }
    private handleSellEnergyClick = () => {
        this.props.onSellEnergyClick();
    }
}