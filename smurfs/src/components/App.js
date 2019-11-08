import React, { Component } from "react";
import "./App.css";

//Components
import SmurfList from "./SmurfList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>SMURFS! 2.0 W/ Redux</h1>
        </header>
        <SmurfList />
      </div>
    );
  }
}

export default App;
