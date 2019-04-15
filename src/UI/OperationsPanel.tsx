import React from 'react';
import { FaReact } from 'react-icons/fa';
import { IoMdNuclear } from 'react-icons/io';

import * as UIModels from './Models';

interface IOperationsPanelProps {
    hudData: UIModels.IHudData
    onPauseClick(): void;
    onManualWentHold(): void;
    onManualWentRelease(): void;
}

export class OperationsPanel extends React.Component<IOperationsPanelProps, {}> {
    render() {
        let hudData = this.props.hudData;

        return (
            <div className="OperationsPanel" onContextMenu={this.handleContextMenu}>
                <div className="heat-meter">
                    <div className={"icon " + (hudData.wenting ? "working" : "idle")}>
                        <IoMdNuclear onMouseDown={this.handleWentMouseDown} onMouseUp={this.handleWentMouseUp} onMouseLeave={this.handleWentMouseLeave}/>
                    </div>
                    <div className="info">
                        <div>{hudData.currentHeat} / {hudData.maxHeat}</div>
                        <div>+{hudData.heatGrowPerTick}/tk</div>
                    </div>
                </div>
                <div className="energy-meter">
                    <div className={"icon " + (hudData.pause ? "idle" : "working")}>
                        <FaReact onClick={this.handlePauseClick} />
                    </div>
                    <div className="info">
                        <div>{hudData.currentEnergy} / {hudData.maxEnergy}</div>
                        <div>+{hudData.energyGrowPerTick}/tk</div>
                    </div>
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
}