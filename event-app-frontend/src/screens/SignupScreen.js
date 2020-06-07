import React, { Component, useState, useRef } from "react";
import "../styles/Signup.css";

import RegistrationForm from "../components/RegistrationForm";
import NavBar from "../components/NavBar";
import { Container } from "reactstrap";
import user from "../assets/img/icons/common/user.png";
import password from "../assets/img/icons/common/password.png";
import useradmin from "../assets/img/icons/common/useradmin.png";
import axios from "axios";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
  Input,
  InputGroup,
  NavbarBrand,
  UncontrolledCollapse,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  FormGroup,
  Form,
  FormText,
  Label,
  InputGroupText,
  InputGroupAddon,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import AdminLogin from "../components/AdminLogin";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";

const SignupScreen = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     defaultModal: false,
  //     name: "",
  //     email: "",
  //     contact: "",
  //     type: "",
  //     ticket: 1,
  //     file: null,
  //     fileUrl: "",
  //     isLoggedIn: false,
  //     isError: false,
  //     username: "",
  //     password: "",
  //   };
  //   // this.setAuthTokens = useAuth();
  //   // this.referer = this.props.location.state.referer || '/'
  // }

  const [defaultModal, setdefaultModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [type, setType] = useState("");
  const [ticket, setTicket] = useState("");
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const { setAuthTokens } = useAuth();
  // const referer = props.location.state.referer || "/";
  const dashboardLink = useRef(null);

  const postLogin = () => {
    axios
      .post("http://mrugankray.pythonanywhere.com/admin_login", {
        username: username,
        password: password,
      })
      .then((result) => {
        if (result.status === 200) {
          console.log("success");
          console.log(username);
          console.log(password);
          console.log("token",result.data)
          setIsLoggedIn(true);
          // setAuthTokens(result.data);
        } else {
          console.log("not success");
          setIsError(true);
          console.log("x", username);
          console.log("x", password);
        }
      })
      .catch((e) => {
        setIsError(true);
        console.log("error");
        console.log("err", username);
        console.log("err", password);
      });
  };

  const toggleModal = () => {
    setdefaultModal(!defaultModal);
  };

  // if (isLoggedIn) {
  //   console.log(referer)
  //   return <Redirect to={referer.pathname} />;
  // }
  return (
    <div>
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
                    onClick={() => toggleModal()}
                    style={{ fontWeight: "bold" }}
                  >
                    Admin Login
                  </span>
                  <img
                    src={useradmin}
                    style={{
                      width: 20,
                      height: 20,
                      marginLeft: 5,
                      marginTop: -5,
                    }}
                  />
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
      <RegistrationForm />
      <div>
        <Modal
          className="modal-dialog-centered"
          isOpen={defaultModal}
          toggle={() => toggleModal("defaultModal")}
        >
          <ModalHeader toggle={() => toggleModal("defaultModal")}></ModalHeader>
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
                      <Input
                        placeholder="Email"
                        type="email"
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                      />
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
                      <Input
                        placeholder="Password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
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
                    <Link
                      to={{
                        pathname: "/Dashboard",
                        state: {
                          defaultModal,
                          name,
                          email,
                          contact,
                          type,
                          ticket,
                          file,
                          fileUrl,
                        },
                      }}
                      style={{ display: "none" }}
                      ref={dashboardLink}
                    />
                    <Button
                      className="my-4"
                      color="primary"
                      type="button"
                      onClick={() => dashboardLink.current.click()}
                    >
                      Sign in
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </div>
        </Modal>
      </div>
    </div>
  );
};
export default SignupScreen;
