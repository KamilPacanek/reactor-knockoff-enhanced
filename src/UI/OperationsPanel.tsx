import React from 'react';
import { FaReact } from 'react-icons/fa';
import { IoIosSwap, IoMdNuclear } from 'react-icons/io';

import * as UIModels from './Models';

interface IOperationsPanelProps {
    hudData: UIModels.IHudData
    onPauseClick(): void;
    onSellEnergyClick(): void;
    onManualWentHold(): void;
    onManualWentRelease(): void;
}

export class OperationsPanel extends React.Component<IOperationsPanelProps, {}> {
    render() {
        let hudData = this.props.hudData;

        return (
            <div className="OperationsPanel" onContextMenu={this.handleContextMenu}>
                <div className="heat-meter">
                    <div className={"icon manual-wenting " + (hudData.wenting ? "working" : "idle")}>
                        <IoMdNuclear onMouseDown={this.handleWentMouseDown} onMouseUp={this.handleWentMouseUp} onMouseLeave={this.handleWentMouseLeave} />
                    </div>
                    <div className="info">
                        <div>{hudData.currentHeat} / {hudData.maxHeat}</div>
                        <div>+{hudData.heatGrowPerTick}/tk</div>
                    </div>
                </div>
                <div className="energy-meter">
                    <div className={"icon power-generation " + (hudData.pause ? "idle" : "working")}>
                        <FaReact onClick={this.handlePauseClick} />
                    </div>
                    <div className="info">
                        <div>{hudData.currentEnergy} / {hudData.maxEnergy}</div>
                        <div>+{hudData.energyGrowPerTick}/tk</div>
                    </div>
                </div>
                <div className="sell-energy button" onClick={this.handleSellEnergyClick}>
                    <div className="button-icon"><IoIosSwap /></div>
                    <div className="button-label">Export energy</div>
                </div>
                <div className="money-display">${hudData.moneyOwned}</div>
            </div>
        );
    };

    private handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
    }

    private handlePauseClick = () => {
        this.props.onPauseClick();
    }

    private handleWentMouseDown = () => {
        this.props.onManualWentHold();
    }

    private handleWentMouseUp = () => {
        this.props.onManualWentRelease();
    }

    private handleWentMouseLeave = () => {
        this.props.onManualWentRelease();
    }

    private handleSellEnergyClick = () => {
        this.props.onSellEnergyClick();
    }
}