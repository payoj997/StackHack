import React, { Component } from "react";
import {
  Col,
  Card,
  CardBody,
  Container,
  Row,
  CardHeader,
  CardImg,
  CardImgOverlay,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Label,
  FormText,
  CardFooter,
  Button,
} from "reactstrap";
import bg2 from "../assets/img/theme/bg2.jpg";
import user from "../assets/img/icons/common/user.png";
import mail from "../assets/img/icons/common/mail.png";
import phone from "../assets/img/icons/common/phone.png";
import bg from "../assets/img/theme/bg.png";
import { Link } from "react-router-dom";

export default class componentName extends Component {
  state = {
    defaultModal: false,
    name: "",
    email: "",
    contact: "",
    type: "",
    ticket: 1,
    file: null,
    fileUrl: "",
  };

  toggleModal = () => {
    this.setState({
      defaultModal: !this.state.defaultModal,
    });
  };

  handleInput = (text) => (e) => {
    this.setState({
      [text]: e.target.value,
    });
  };

  handleFile = (e) => {
    this.setState({
      file: e.target.files[0],
      fileUrl: URL.createObjectURL(e.target.files[0]),
    });
    console.log(this.state.fileUrl);
  };

  render() {
    return (
      <Row className="justify-content-center mx-1 my-2">
        <Col lg="6" md="8">
          <Card
            className="border-0 z-depth-5"
            style={{ height: "100%", backgroundColor: "#e6f9ff" }}
          >
            <CardBody
              className="px-lg-5 py-lg-5"
              style={{ flexDirection: "row" }}
            >
              <h3
                style={{
                  fontWeight: "bold",
                  fontSize: 48,
                  color: "#000",
                  marginTop: 30,
                }}
              >
                Welcome!{" "}
              </h3>
              <img className="col-6" src={bg} />
              <Form role="form">
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <img
                      src={user}
                      className="img"
                      style={{ width: 25, height: 25 }}
                    />
                    <Input
                      placeholder="Name"
                      required
                      id="txtuser"
                      type="text"
                      onChange={this.handleInput("name")}
                      value={this.state.name}
                    />
                  </InputGroup>

                  <InputGroup className="input-group-alternative mb-3">
                    <img
                      src={mail}
                      className="img"
                      style={{ width: 25, height: 25 }}
                    />
                    <Input
                      placeholder="Email"
                      required
                      type="email"
                      onChange={this.handleInput("email")}
                      value={this.state.email}
                    />
                  </InputGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <img
                      src={phone}
                      className="img"
                      style={{ width: 25, height: 25 }}
                    />
                    <Input
                      placeholder="Mobile"
                      required
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      onChange={this.handleInput("contact")}
                      value={this.state.contact}
                    />
                  </InputGroup>
                  <InputGroup className="input-group-alternative mb-3 ml-2">
                    <Label
                      style={{
                        color: "#2d2d2d",
                        fontSize: 18,
                        fontWeight: "bold",
                        marginLeft: 25,
                      }}
                    >
                      Upload ID Card
                    </Label>

                    <Input
                      type="file"
                      name="file"
                      id="exampleFile"
                      style={{ marginLeft: 25 }}
                      onChange={(e)=>this.handleFile(e)}
                    />
                    <FormText color="muted" style={{ marginLeft: 25 }}>
                      Formats supported png and jpeg.
                    </FormText>
                  </InputGroup>
                  <InputGroup className="input-group-alternative mb-3 ml-2">
                    <Label
                      style={{
                        color: "#2d2d2d",
                        fontSize: 18,
                        fontWeight: "bold",
                        marginLeft: 25,
                      }}
                    >
                      Registration type
                    </Label>
                    <InputGroup
                      className="input-group-alternative mb-3"
                      style={{ marginLeft: 15 }}
                    >
                      <Input
                        type="select"
                        name="selectMulti"
                        id="exampleSelectMulti"
                        onChange={this.handleInput("type")}
                      >
                        <option>Self</option>
                        <option>Group</option>
                        <option>Corporate</option>
                        <option>Others</option>
                      </Input>
                    </InputGroup>
                  </InputGroup>
                  <InputGroup className="input-group-alternative mb-3 ml-2">
                    <Label
                      style={{
                        color: "#2d2d2d",
                        fontSize: 18,
                        fontWeight: "bold",
                        marginLeft: 25,
                      }}
                    >
                      Enter the number of tickets
                    </Label>

                    <InputGroup
                      className="input-group-alternative mb-3"
                      style={{
                        color: "#2d2d2d",
                        fontSize: 18,
                        fontWeight: "bold",
                        marginLeft: 15,
                      }}
                    >
                      <Input
                        placeholder="No. of Tickets"
                        type="number"
                        onChange={this.handleInput("ticket")}
                        value={this.state.ticket}
                      />
                    </InputGroup>
                  </InputGroup>
                  <Link
                    to={{ pathname: "/Preview", state: this.state }}
                    style={{ display: "none" }}
                    ref={(el) => {
                      this.previewLink = el;
                    }}
                  />
                  <button style={{marginLeft:250}} type="submit" className="submit" onClick={()=>this.previewLink.click()} >
                    Register
                  </button>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
