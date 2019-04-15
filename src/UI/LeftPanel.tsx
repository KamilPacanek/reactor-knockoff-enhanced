import React from 'react';

import { IAppState } from '../App';
import * as Models from '../Models';
import * as UI from './';
import * as UIModels from './Models';

interface ILeftPanelProps {
    parts: Models.IPartDef[];
    selectedPart?: Models.IPartDef;
    gameData: Models.IGameData;
    appState: IAppState;
    onSelectedPartChange(part: Models.IPartDef): void;
    onMouseEnterPart(part: Models.IPartDef): void;
    onMouseLeavePart(): void;
    onPauseClick(): void;
    onManualWentHold(): void;
    onManualWentRelease(): void;
}

interface ILeftPanelState {
}

export class LeftPanel extends React.Component<ILeftPanelProps, ILeftPanelState> {
    render() {
        var hudData: UIModels.IHudData = {
            currentEnergy: this.props.gameData.currentEnergy,
            maxEnergy: this.props.gameData.maxEnergy,
            currentHeat: this.props.gameData.currentHeat,
            maxHeat: this.props.gameData.maxHeat,
            moneyOwned: this.props.gameData.moneyOwned,
            heatGrowPerTick: this.props.gameData.heatGrowPerTick,
            energyGrowPerTick: this.props.gameData.energyGrowPerTick,
            wenting: this.props.appState.wenting,
            pause: this.props.appState.pause
        };

        return (
            <div className="LeftPanel">
                <UI.OperationsPanel hudData={hudData}
                    onManualWentHold={this.handleManualWentHold}
                    onManualWentRelease={this.handleManualWentRelease}
                    onPauseClick={this.handlePauseClick} />
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
}