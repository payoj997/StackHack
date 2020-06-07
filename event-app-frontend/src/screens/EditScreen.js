import React, { Component } from "react";
import {
  Card,
  CardBody,
  InputGroup,
  Label,
  Input,
  FormText,
  FormGroup,
  Form,
  Alert,
} from "reactstrap";
import { Link } from "react-router-dom";
import user from "../assets/img/icons/common/user.png";
import mail from "../assets/img/icons/common/mail.png";
import phone from "../assets/img/icons/common/phone.png";
import bg from "../assets/img/theme/bg.png";
import axios from "axios";

export default class EditScreen extends Component {
  state = {
    defaultModal: false,
    name: "",
    email: "",
    contact: "",
    type: "",
    ticket: 1,
    file: null,
    fileUrl: "",
    id: "",
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

  getData = () => {
    const str = this.props.location.state;    
    
    axios
      .get("http://mrugankray.pythonanywhere.com/" + str, {
        headers: {
          "Authorization": "Token 18a1d2b5f63bf023b92c0eaf5753369cb26f60ba",
          "content-type": "application/json"
        },
      })
      .then((response) => {
        this.setState({
          name: response.data.full_name,
          email: response.data.email,
          contact: response.data.mobile,
          type: response.data.reg_type,
          ticket: response.data.num_of_tickets,
          fileUrl: response.data.id_card,
          id: response.data.id,
        });
      })
      .catch((error) => {
        console.log("error ", error);
      });
  };

  changeData=(e)=>{
      e.preventDefault()
      let str = this.props.location.state
      str = str+"/"
      let formData = new FormData();
    //   formData.append("id", this.state.id)
    formData.append("full_name", this.state.name);
    formData.append("mobile", this.state.contact);
    formData.append("email", this.state.email);
    formData.append("id_card", this.state.file);
    formData.append("reg_type", this.state.type);
    formData.append("num_of_tickets", this.state.ticket);
    console.log("form data - ",formData)
      axios.put("http://mrugankray.pythonanywhere.com/"+str,formData,{
        headers: {
          "content-type": "multipart/form-data",
          "Authorization": "Token 18a1d2b5f63bf023b92c0eaf5753369cb26f60ba",
        },
      })
      .then((response)=>{
          console.log(response.data)
      })
      .catch((error)=>{
          console.log(error)
      })
  }

  componentDidMount = () => {
    this.getData();
  };

  render() {
    return (
      <div className="px-2 py-3">
        <Card
          className="border-0 z-depth-5"
          style={{ height: "100%", backgroundColor: "#e6f9ff" }}
        >
          {this.state.name!=="" ? (
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
                {this.state.id}
              </h3>
              <img className="col-3" src={this.state.fileUrl} />
              <Form role="form" onSubmit={(e)=>this.changeData(e)}>
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
                      pattern="[+][0-9]{12}"
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
                      onChange={(e) => this.handleFile(e)}
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
                        value={this.state.type}
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
                  <button
                    type="submit"
                    className="submit"
                    
                  >
                    Save
                  </button>
                </FormGroup>
              </Form>
            </CardBody>
          ) : null}
        </Card>
      </div>
    );
  }
}
