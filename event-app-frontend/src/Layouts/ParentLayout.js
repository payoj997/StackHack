import React, { Component } from "react";
import { Container } from "reactstrap";

export default class ParentLayout extends Component {

    constructor(props){
        super(props);
    }

  render() {
    return (
      <Container
        fluid
        style={{
          backgroundImage:
            "linear-gradient(to right, #121a95, #2eabbb, #019cad)",
        }}
      >
          {this.props.children}
      </Container>
    );
  }
}
