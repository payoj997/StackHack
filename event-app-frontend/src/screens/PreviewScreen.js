import React, { Component } from "react";
import {
  Button,
  InputGroup,
  Card,
  Row,
  Col,
  CardBody,
  Modal,
  ModalBody,
} from "reactstrap";
import axios from "axios";

export default class PreviewScreen extends Component {
  state = {
    regId: "",
    defaultModal: false,
    mobile: "",
    idCard: null,
    regType: "",
    numOfTickets: "",
    fullName: "",
    email: "",
    image:""
  };

  toggleModal = () => {
    this.setState({
      defaultModal: !this.state.defaultModal,
    });
  };

  postData = (data) => {
    console.log(data);

    let formData = new FormData();
    formData.append("full_name", data.fullName);
    formData.append("mobile", data.mobile);
    formData.append("email", data.email);
    formData.append("id_card", data.idCard);
    formData.append("reg_type", data.regType);
    formData.append("num_of_tickets", data.numOfTickets);

    axios
      .post("http://mrugankray.pythonanywhere.com/reg_2", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("response: ", response);
        this.setState({
          regId: response.data.id,
        });
        this.toggleModal();
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  getData = () => {
    axios
      .get("http://mrugankray.pythonanywhere.com/", {
        headers: {
          Authorization: "Token 18a1d2b5f63bf023b92c0eaf5753369cb26f60ba",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  componentDidMount = () => {
    const obj = this.props.location.state;
    console.log(obj)
    this.setState({
      mobile: obj.contact,
      idCard: obj.file,
      regType: obj.type,
      numOfTickets: obj.ticket,
      fullName: obj.name,
      email: obj.email,
      image: obj.fileUrl
    });
  };

  render() {
    return (
      <div
        className="px-1 py-3"
        
      >
        <Row className="justify-content-center mx-1 my-2">
          <Col lg="5" md="6"></Col>
          <Card
            className="border-0 z-depth-5"
            style={{ backgroundColor: "#e6f9ff" }}
          >
            <CardBody
              className="px-lg-5 py-lg-5"
              style={{ flexDirection: "row" }}
            >
              <h1
                className="display-2 text-black"
                style={{ fontWeight: "bold", color: "black" }}
              >
                Registration Details
              </h1>
              <div className="lg-7 md-8">
                <img src={this.state.image} style={{ height: "20rem" }} />
              </div>

              <h3 className="display-5 text-black">Name : {this.state.fullName}</h3>
              <h3 className="display-5 text-black" style={{color:'#242f59'}}>
                Mobile : {this.state.mobile}
              </h3>
              <h3 className="display-5 text-black">
                Email : {this.state.email}
              </h3>
              <h3 className="display-5 text-black">
                Registration type : {this.state.regType}
              </h3>
              <h3 className="display-5 text-black">
                No. of tickets : {this.state.numOfTickets}
              </h3>

              <Button
                className="m-4"
                outline
                color="primary"
                onClick={() => {
                  this.postData(this.state);
                  // this.getData()
                }}
              >
                Submit
              </Button>
            </CardBody>
          </Card>
        </Row>
        <Modal style={{borderRadius:20}}
          className="modal-dialog-centered ,shadow"
          isOpen={this.state.defaultModal}
          toggle={() => this.toggleModal("defaultModal")}
        >
          <ModalBody  className="shadow" p="0" style={{backgroundColor:'#e6f9ff'}}>
            <h1 style={{color:'#008000'}}>Successfully registered</h1>
            <h3 style={{color:'242f59',marginLeft:60}}>Registration id : {this.state.regId}</h3>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
