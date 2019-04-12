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
        this.handleSelectedPartChange = this.handleSelectedPartChange.bind(this);
        this.handleMouseEnterPart = this.handleMouseEnterPart.bind(this);
        this.handleMouseLeavePart = this.handleMouseLeavePart.bind(this);
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

    handleSelectedPartChange(part: Models.IPartDef) {
        this.setState({ selectedPart: part });
    }

    handleMouseEnterPart(part: Models.IPartDef) {
        this.setState({ mouseoverPart: part });
    }

    handleMouseLeavePart(part: Models.IPartDef) {
        this.setState({ mouseoverPart: undefined });
    }

    private get mouseoverPart(): Models.IPartDef | undefined {
        return this.state.mouseoverPart || this.state.selectedPart;
    }
}