import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import Calculator from "./Calculator";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pricing: 0,
      showCalculator: false
    };
  }

  showCalculator = value => {
    this.setState({
      showCalculator: value
    });
  };

  onOutputHandler = value => {
    this.setState({
      pricing: value
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="pricing"
          id="id"
          value={this.state.pricing}
          onBlur={() => this.showCalculator(true)}
          onFocus={() => this.showCalculator(true)}
        />
        <Calculator show={this.state.showCalculator} onOutput={this.onOutputHandler}/>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
