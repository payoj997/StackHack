import React, { Component } from "react";
import {
  Col,
  Card,
  CardHeader,
  CardBody,
  Row,
  Button,
  Table,
} from "reactstrap";
import { Bar } from "react-chartjs-2";
import RegistrationsList from "../components/RegistrationsList";
import axios from "axios";
import dashboard1 from '../assets/img/theme/dashboard1.jpg'
import { defaults } from 'react-chartjs-2';
import {merge} from 'lodash';
import { Link } from "react-router-dom";
defaults.global.animation = false;
merge(defaults, {
  global: {
    animation: false,
    line: {
      borderColor: '#F85F73',
     },
  },
});
const data = (canvas) => {
  const ctx = canvas.getContext("2d")
  const gradient = ctx.createLinearGradient(0,0,100,0);}
export default class AdminDashboard extends Component {
  state = {
    data: [],
    chartData: [],
    labels: [],
    count: [],
  };

  getData = () => {
    axios
      .get("http://mrugankray.pythonanywhere.com/", {
        headers: {
          Authorization: "Token 18a1d2b5f63bf023b92c0eaf5753369cb26f60ba",
        },
      })
      .then((response) => {
        this.setState({
          data: response.data,
        });
        console.log("called");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  getChartData = () => {
    axios
      .get("http://mrugankray.pythonanywhere.com/count_reg_types", {
        headers: {
          Authorization: "Token 18a1d2b5f63bf023b92c0eaf5753369cb26f60ba",
        },
      })
      .then((response) => {
        let xLabels = [];
        let xValues = [];
        for (let i = 0; i < Object.keys(response.data).length; i++) {
          xLabels.push(Object.keys(response.data)[i]);
        }
        for (let i = 0; i < Object.keys(response.data).length; i++) {
          xValues.push(Object.values(response.data)[i]);
        }
        this.setState({
          chartData: response.data,
          labels: xLabels,
          count: xValues,
        });
      })
      .catch((error) => {
        console.log("error ", error);
      });
  };

  componentDidMount = () => {
    this.getData();
    this.getChartData();
  };

  render() {
    let chartExample2 = {
      options: {
        color:'#000',
        scales: {
          yAxes: [
            {
              
              ticks: {
                callback: function (value) {
                  if (!(value % 0.5)) {
                    //return '$' + value + 'k'
                    return value;
                  }
                },
              },
            },
          ],
        },
        tooltips: {
          callbacks: {
            // label: function (item, data) {
            //     var label = data.datasets[item.datasetIndex].label || "";
            //     var yLabel = item.yLabel;
            //     var content = "";
            //     if (data.datasets.length > 1) {
            //       content += label;
            //     }
            //     content += yLabel;
            //     return content;
            //   },
          },
        },
      },
      data: {
        labels: this.state.labels,
        datasets: [
          {
            label: "Registration count",
            backgroundColor: "#de4137",
            borderColor: "#de4137",
            borderWidth: 1,
            hoverBackgroundColor: "#990819",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: this.state.count,
          },
        ],
      },
    };
    return (
      <div>
        {/* <Card style={{backgroundImage:'linear-gradient(to right, #23657e,#623e9e,#a846c5)'}}> */}
        <Card >
          <CardHeader style={{backgroundColor:'#242f59',height:60,flexDirection:'row-reverse'}}>
            {/* <img src={dashboard} style={{width:40,height:40}}/> */}
            <h2 className="float-left" style={{color:'white'}}>DASHBOARD</h2>
        <Row className="d-flex flex-row-reverse">
          <Link to="/" style={{ display: "none" }}
                    ref={(el) => {
                      this.homeLink = el;
                    }} />
          <Button className="float-right" style={{height:40}} onClick={()=>this.homeLink.click()}>Logout</Button>
        </Row></CardHeader>
        <Row>
          <Col sm="6" className="my-2 float-left">
            <div className="overflow-auto"  style={{height:"650px"}}>
            {this.state.data!==[]?
              this.state.data.map((item)=>{
                return(
                  <RegistrationsList 
                      regId={item.id}
                      date={item.reg_date}
                      name={item.full_name}
                    />
                )
              })
              :null}  
            </div>
                    
          </Col>
          <Col className="my-2 float-right" >
            <Card className="shadow">
              <CardHeader  style={{backgroundColor:'#192d3e'}}>
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1 white">
                      Event
                    </h6>
                    <h2 className="mb-0" style={{color:'#fff'}}>Total registrations</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody style={{backgroundImage:'linear-gradient(to left , #fff,#e6f9ff)'}}>
                <div className="chart" style={{color:'#000'}}>
                  {console.log("labels ", this.state.labels)}
                  {console.log("count ", this.state.count)}
                  {this.state.count != [] ? (
                    <Bar
                      data={chartExample2.data}
                      height={200}
                      
                      options={{
                        maintainAspectRatio: false,
                        color:'#000'
                      }}
                    />
                  ) : null}
                </div>
              </CardBody>
            </Card>
            <img src={dashboard1} style={{width:550,height:350}}/>
          </Col>
        </Row>
        </Card>
      </div>
    );
  }
}
