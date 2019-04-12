import React from 'react';

import * as Models from '../Models';

interface ITopInforPanel {
    showDescriptionFor?: Models.IPartDef;
}

export class TopInfoPanel extends React.Component<ITopInforPanel, {}> {
    render() {
        return (
            <div className="TopInfoPanel">
                <div className="part-title">{this.partName}</div>
                <div className="part-desc">
                    {this.partDesc}
                </div>
            </div>
        );
    };

    private get partName() {
        return this.props.showDescriptionFor ? this.props.showDescriptionFor.name : "";
    }

    private get partDesc() {
        return this.props.showDescriptionFor ? this.props.showDescriptionFor.description : "";
    }
}
