import React, { Component } from "react";
import {
  Navbar,
  Container,
  NavbarBrand,
  UncontrolledCollapse,
  Row,
  Col,
  NavItem,
  Nav,
  NavLink,
} from "reactstrap";

export default class NavBar extends Component {

  state = {
    defaultModal: false,
  };
  
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  render() {
    return (
      <Navbar className="navbar-top navbar-horizontal navbar-dark" expand="md">
        <Container>
          <NavbarBrand
          // to="/" tag={Link}
          >
            {/* <img alt="..." src={require("assets/img/brand/argon-react-white.png")} /> */}
          </NavbarBrand>
          <button className="navbar-toggler" id="navbar-collapse-main">
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
            <div className="navbar-collapse-header d-md-none">
              <Row>
                <Col className="collapse-brand" xs="6"></Col>
                <Col className="collapse-close" xs="6">
                  <button className="navbar-toggler" id="navbar-collapse-main">
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  // to="/admin/user-profile"
                  // tag={Link}
                >
                  {/* <i className="ni ni-single-02" /> */}
                  <span
                    className="nav-link-inner--text"
                    onClick={() => this.toggleModal("defaultModal")}
                  >
                    Admin Login
                  </span>
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    );
  }
}
