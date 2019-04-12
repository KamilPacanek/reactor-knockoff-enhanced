import React from 'react';

import * as Models from '../Models';
import * as UI from './';

interface IMainWindowParts {
    parts: Models.IPartDef[];
    reactorDefinition: Models.IReactorProperties;
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
                    onSelectedPartChange={this.handleSelectedPartChange}
                    onMouseEnterPart={this.handleMouseEnterPart}
                    onMouseLeavePart={this.handleMouseLeavePart} />
                <UI.RightPanel reactorProps={this.props.reactorDefinition}
                    selectedPart={this.state.selectedPart}
                    mouseoverPart={this.mouseoverPart} />
            </div>
        );
    }

    private handleSelectedPartChange = (part: Models.IPartDef) => {
        this.setState({ selectedPart: part });
    }

    private handleMouseEnterPart = (part: Models.IPartDef) => {
        this.setState({ mouseoverPart: part });
    }

    private handleMouseLeavePart = (part: Models.IPartDef) => {
        this.setState({ mouseoverPart: undefined });
    }

    private get mouseoverPart(): Models.IPartDef | undefined {
        return this.state.mouseoverPart || this.state.selectedPart;
    }
}