import React, { Component } from "react";
import Key from "./Key";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCalculator: false,
      output: ""
    };
  }

  onPressHandler = value => {
    switch (value) {
      case "C":
        value = "";
        break;
      case ".":
        if (this.state.output.indexOf('.') === -1) {
          value = this.state.output + ".";
        } else {
          value = this.state.output;
        }
        break;
      default:
        value = this.state.output + value;
        break;
    }

    this.setState(
      {
        output: value
      },
      () => {
        console.log(this.state.output);
        this.props.onOutput(this.state.output);
      }
    );
  };

  render() {
    return (
      <div style={{ display: this.props.show ? "block" : "none" }}>
        <div class="calculator">
          <div>
            <Key number="7" onPress={this.onPressHandler} />
            <Key number="8" onPress={this.onPressHandler} />
            <Key number="9" onPress={this.onPressHandler} />
          </div>

          <div>
            <Key number="4" onPress={this.onPressHandler} />
            <Key number="5" onPress={this.onPressHandler} />
            <Key number="6" onPress={this.onPressHandler} />
          </div>
          <div>
            <Key number="1" onPress={this.onPressHandler} />
            <Key number="2" onPress={this.onPressHandler} />
            <Key number="3" onPress={this.onPressHandler} />
          </div>
          <div>
            <Key number="0" onPress={this.onPressHandler} />
            <Key number="." onPress={this.onPressHandler} />
            <Key number="C" onPress={this.onPressHandler} />
          </div>
        </div>
      </div>
    );
  }
}
