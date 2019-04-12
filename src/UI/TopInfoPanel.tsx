import React from 'react';

import * as Models from '../Models';

interface ITopInforPanel {
    showInfoOf?: Models.IPartDef;
}

export class TopInfoPanel extends React.Component<ITopInforPanel, {}> {
    render() {
        return (
            <div className="TopInfoPanel">
                {this.props.showInfoOf && this._renderPartInfo()}
            </div>
        );
    };

    private _renderPartInfo() {
        return (
            <div>
                <div className="part-title">{this.props.showInfoOf!.name}</div>
                <div className="part-desc">
                    {this.props.showInfoOf!.description}
                </div>
            </div>
        );
    }
}
