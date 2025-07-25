import React, { Component } from "react";

class Student1 extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h1>Your monthly salary is {this.props.salary}</h1>
      </div>
    );
  }
}

export default Student1;
