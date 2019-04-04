import React from "react";
import MainWindow from "./UI";

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MainWindow />
      </div>
    );
  }

  // handlePartSelect(part) {
  //   console.debug("Part selected", part);
  //   this.setState({ selectedPart: part });
  //   this.refs.rc.handlePartSelected(part);
  // }

  // handleReactorCellClick(reactorCell) {
  //   reactorCell.setState({ part: this.state.selectedPart });
  // }
}

export default App;
