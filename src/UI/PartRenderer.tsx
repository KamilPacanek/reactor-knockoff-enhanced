import React from 'react';
import { IoMdBatteryCharging } from 'react-icons/io';

import * as Models from '../Models';

export abstract class PartRenderer<T, U> extends React.Component<T, U> {
    protected renderPart(part: Models.IPartDef) {
        switch (part.category) {
            case Models.PartCategory.FuelCell:
                let cellsCount = Math.pow(2, part.stage - 1);
                let cellPacket = [];
                for (let i = 0; i < cellsCount; i++) {
                    cellPacket.push(<IoMdBatteryCharging className={"fuel-cell-" + i} key={"fuelCellPart_" + i} />);
                }

                return <div className={("fuel-cells-" + cellsCount) + " " + this.getTypeName(part.type).toLowerCase() + "-cells"}>
                    {cellPacket.map(p => p)}
                </div>;
        }
    }

    private getTypeName(type: Models.PartType): string{
        return Models.PartType[type];
    }
}