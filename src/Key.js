import React, { Component } from "react";

export default class Key extends Component {
  constructor(props) {
    super(props);
  }

  Press = () => {
    this.props.onPress(this.props.number);
  }

  render() {
    return (
      <button class="ele" onClick={this.Press}>{this.props.number}</button>
    )
  }
}