import React from 'react';

import { IAppState } from '../App';
import * as Models from '../Models';
import * as UI from './';
import * as UIModels from './Models';

interface ILeftPanelProps {
    parts: Models.IPartDef[];
    selectedPart?: Models.IPartDef;
    appState: IAppState;
    onSelectedPartChange(part: Models.IPartDef): void;
    onMouseEnterPart(part: Models.IPartDef): void;
    onMouseLeavePart(): void;
    onPauseClick(): void;
    onSellEnergyClick(): void;
    onManualWentHold(): void;
    onManualWentRelease(): void;
}

interface ILeftPanelState {
}

export class LeftPanel extends React.Component<ILeftPanelProps, ILeftPanelState> {
    render() {
        var hudData: UIModels.IHudData = {
            currentEnergy: this.props.appState.numbers.currentEnergy,
            maxEnergy: this.props.appState.numbers.maxEnergy,
            currentHeat: this.props.appState.numbers.currentHeat,
            maxHeat: this.props.appState.numbers.maxHeat,
            moneyOwned: this.props.appState.numbers.moneyOwned,
            heatGrowPerTick: this.props.appState.numbers.heatGrowPerTick,
            energyGrowPerTick: this.props.appState.numbers.energyGrowPerTick,
            wenting: this.props.appState.wenting,
            pause: this.props.appState.pause
        };

        return (
            <div className="LeftPanel">
                <UI.OperationsPanel hudData={hudData}
                    onManualWentHold={this.handleManualWentHold}
                    onManualWentRelease={this.handleManualWentRelease}
                    onPauseClick={this.handlePauseClick}
                    onSellEnergyClick={this.handleSellEnergyClick} />
                <UI.PartsPanel parts={this.props.parts} selectedPart={this.props.selectedPart}
                    onSelectedPartChange={this.handleSelectedPartChange}
                    onMouseEnterPart={this.handleMouseEnterPart}
                    onMouseLeavePart={this.handleMouseLeavePart} />
            </div>
        );
    }

    private handleSelectedPartChange = (part: Models.IPartDef) => {
        this.props.onSelectedPartChange(part);
    }

    private handleMouseEnterPart = (part: Models.IPartDef) => {
        this.props.onMouseEnterPart(part);
    }

    private handleMouseLeavePart = () => {
        this.props.onMouseLeavePart();
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

    private handleSellEnergyClick = () =>{
        this.props.onSellEnergyClick();
    }
}