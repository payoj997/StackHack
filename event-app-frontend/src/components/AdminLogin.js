import React, { Component } from "react";
import {
  Modal,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button,
  ModalHeader,
} from "reactstrap";
import user from "../assets/img/icons/common/user.png";
import password from "../assets/img/icons/common/password.png";
import useradmin from "../assets/img/icons/common/useradmin.png";

export default class AdminLogin extends Component {
  state = {
    defaultModal: this.props.modalOpen,
  };

  toggleModal = () => {
    this.setState({
      defaultModal: !this.state.defaultModal,
    });
  };

  render() {
    return (
      <div>
        <Modal
          className="modal-dialog-centered"
          isOpen={this.state.defaultModal}
          toggle={() => this.toggleModal("defaultModal")}
        >
          <ModalHeader
            toggle={() => this.toggleModal("defaultModal")}
          ></ModalHeader>
          <div className="modal-body p-0">
            <Card
              className="border-0 z-depth-5"
              style={{ height: "100%", backgroundColor: "#e6f9ff" }}
            >
              <img
                src={useradmin}
                style={{
                  height: 100,
                  width: 100,
                  marginLeft: 200,
                  marginTop: 30,
                }}
              />
              <h3 className="display-5 text-black" style={{ marginLeft: 200 }}>
                LOGIN
              </h3>
              <small style={{ marginLeft: 200 }}>Sign in as Admin</small>

              <CardBody className="px-5 py-5">
                <div>
                  <small>Or sign in with credentials</small>
                </div>
                <Form role="form">
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText style={{ height: 40, marginTop: 10 }}>
                          <img
                            src={user}
                            className="img"
                            style={{
                              width: 25,
                              height: 25,
                              marginBottom: 10,
                            }}
                          />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Email" type="email" />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText style={{ height: 40, marginTop: 10 }}>
                          <img
                            src={password}
                            className="img"
                            style={{
                              width: 25,
                              height: 25,
                              marginBottom: 10,
                            }}
                          />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Password" type="password" />
                    </InputGroup>
                  </FormGroup>
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id=" customCheckLogin"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor=" customCheckLogin"
                    >
                      <span className="text-muted">Remember me</span>
                    </label>
                  </div>
                  <div className="text-center">
                    <Button className="my-4" color="primary" type="button">
                      Sign in
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </div>
        </Modal>
      </div>
    );
  }
}
