import React, { Component } from "react";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
  Card,
  CardBody,
  UncontrolledDropdown,
} from "reactstrap";
import { Link } from "react-router-dom";

export default class RegistrationsList extends Component {

  render() {
    return (
      <div className="mb-1" >
        <Card style={{backgroundImage:'linear-gradient(to right, #242f59,#623e9e,#a846c5)'}} >
          <CardBody>
            <Row>
              <Col className="float-left">
                <h5 style={{color:'#fff'}}>{this.props.regId}</h5>
              </Col>
              <Col>
                <h6 style={{color:'#fff'}}>{this.props.name}</h6>
              </Col>
              <Col>
                <h6 style={{color:'#fff'}}>{this.props.date.split("T")[0]}</h6>
              </Col>
              <Col>
                <UncontrolledDropdown>
                  <DropdownToggle style={{color:'#fff'}}
                    className="btn-icon-only text-light"
                    href="#pablo"
                    role="button"
                    size="sm"
                    color="white"
                    onClick={(e) => e.preventDefault()}
                  >
                    <svg
                      className="bi bi-three-dots-vertical"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      fill="#000"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                      />
                    </svg>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-arrow" right>
                  <Link
                    to={{ pathname: "/Edit", state: this.props.regId }}
                    style={{ display: "none" }}
                    ref={(el) => {
                      this.editLink = el;
                    }}
                  />
                    <DropdownItem
                      onClick={(e) => this.editLink.click()}
                    >
                      Details
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Delete
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}
