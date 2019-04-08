import React from "react";
import * as Models from "../Models";
import * as UI from ".";

interface IMainWindowParts {
    parts: Models.IPartDef[];
    reactorDefinition: Models.IReactorProperties;
}

interface IMainWindowState {
    selectedPart?: Models.IPartDef;
}

export class MainWindow extends React.Component<IMainWindowParts, IMainWindowState> {
    constructor(props: IMainWindowParts) {
        super(props);

        this.state = {};
        this.handleSelectedPartChange = this.handleSelectedPartChange.bind(this);
    }

    render() {
        return (
            <div className="MainWindow" >
                <UI.LeftPanel parts={this.props.parts} selectedPart={this.state.selectedPart} onSelectedPartChange={this.handleSelectedPartChange} />
                <UI.RightPanel reactorProps={this.props.reactorDefinition} selectedPart={this.state.selectedPart} />
            </div>
        );
    }

    handleSelectedPartChange(part: Models.IPartDef) {
        this.setState({ selectedPart: part });
    }
}