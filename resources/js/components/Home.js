import React, { Component } from 'react';
import Slider from './Slider';
import {Form , Button, Col, Modal, ButtonToolbar, FormControl } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
export default class Home extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          show: false,
          password:'',
          email:'',
          confirmpassword:'',
          phone:'',
          address:'',
          firstname:'',
          lastname:'',
          username:'',
          l_password:'',
          isloggedIn: false,
          resData: []
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.ChangeText = this.ChangeText.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
      }

      handleClose() {
        this.setState({ show: false });
      }

      handleShow() {
        this.setState({ show: true });
      }
      handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }

      ChangeText(event) {
        this.setState({[event.target.name]: event.target.value});
      }
       handleSubmit (event){
        event.preventDefault();
        fetch('/api/auth/signup',
          {
            headers:{
                'content-type': 'application/json',
                'X-Requested-With':'XMLHttpRequest',
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            method: "POST",
            body: JSON.stringify({
                 "firstname": this.state.firstname,
                 "lastname":this.state.lastname,
                 "email":this.state.email,
                 "password":this.state.password,
                 "password_confirmation":this.state.confirmpassword,
                 "address":this.state.address,
                 "phone":this.state.phone
            })

          })
          .then(response =>{
            console.log(response.json())
            return response.json()
          })
          .catch(err =>{ console.log(err)});

      }


  handleLogin(event){
      event.preventDefault();
      fetch('/oauth/token',
         {
            method: "POST",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:`grant_type=password&username=${this.state.username}&password=${this.state.l_password}&client_id=4&client_secret=LT7raDKvPwIUrDFJBISlhpzAXu6cSYiLBGhrUmTm&scope=*`

         }
      )
      .then(response =>
        response.json()
      )
      .then(responseJson => {
          const returnObj = responseJson;
          console.log(returnObj);
          this.state.isloggedIn= true;
          sessionStorage.setItem('resData', JSON.stringify(returnObj));
          if (this.state.isloggedIn)
          {
            return <Redirect to="/about"/>
          }


      });

        this.setState({
            username: '',
            l_password:''
        });


}


    render() {
        return (
           <div className="wrapper">
                  <div className="carousel">
                      <Slider />
                  </div>
                 <section className="promo_box">
                  <div className="container-flex">
                    <div className="row sub_content">
                        <h3>Remark</h3>
                        <p>Welcome to university health services. We provide quality
                        medical, health and wellness services to Kwara State University
                        students, staff members and rhe community at large.
                        The university health service is committed to
                        contributing to a healthy learning and working
                        environment. Start using our services.
                        </p>
                    </div>
                  </div>
                </section>
                <section className="info_service">
                <div className="container-flex">
                 <div className="row sub_content">
                    <Col>
                        <h3>Our Vision</h3>
                        <p>The University Health Center will be the overwhelming choice for
                        high quality health and wellness services. We will positively
                        influence the physical, social, emotional and intellectual well-being
                        of the University community in a way that contributes to the success
                        of our students.
                        </p>
                    </Col>
                    <Col>
                         <h3>Our Mission</h3>

                            The Kwara state university health center exists to advance the
                            well-being of students and other members of the university community by providing:
                            <ul>
                                <li>Primary and specialty health care,</li>
                                <li>Education and prevention focused services and</li>
                                <li>Research which contributes to health knowledge and skills.</li>
                                </ul>

                    </Col>

                    <Col>
                      <h3>Core Value</h3>
                        <ul>
                            <li>Our patients come first.</li>
                            <li>We work as a team.</li>
                            <li>We work for the community.</li>
                            <li>We do everything with respect, dignity, sensitivity and trust.</li>
                            <li>We will be experts at our jobs.</li>
                            <li>Education and research are important to excellent patient care</li>
                        </ul>
                    </Col>
                    </div>
                </div>
                 </section>
                 <section className="promo_box">
                 <div className="xl">
                        <div className="col-img">
                            <img src="/images/doc.jpg" alt="Eve" className="responsive"/>
                        </div>

                        <div className="login">
                                <Form onSubmit={this.handleLogin}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email"
                                         autoComplete="new-email"
                                         onChange= {this.ChangeText}
                                         name="username"
                                         value={this.state.username}
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" autoComplete="new-password"
                                         onChange= {this.ChangeText}
                                         name="l_password"
                                         value={this.state.l_password}
                                        />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" size="lg" block>
                                        Login
                                    </Button>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" label="Remember" />
                                       <a href="#" style={{float:'right', marginTop:-23}}>Forgot Password?</a>
                                    </Form.Group>
                                    <div id="error"></div>
                                    <div className="clear-fix"></div>
                                    <hr/>

                                </Form>
                          <div className="loader">
                               <div className="icon"></div>
                          </div>
                        </div>
                        <>
                        <p className="registration">Don't have an account? <a href="#" onClick={this.handleShow}>Sign up here!</a></p>

                        <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>New Patient</Modal.Title>
                        </Modal.Header>
                            <Modal.Body>
                            <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="formBasicFirstname">
                                        <Form.Label>Firstname</Form.Label>
                                        <Form.Control type="text" placeholder="Enter firstname"
                                         onChange= {this.handleChange}
                                         name="firstname"
                                         value={this.state.firstname}
                                        required/>

                                    </Form.Group>
                                    <Form.Group controlId="formBasicLastname">
                                        <Form.Label>Lastname</Form.Label>
                                        <Form.Control type="text" placeholder="Enter lastname"
                                         onChange= {this.handleChange}
                                         name="lastname"
                                         value={this.state.lastname}
                                        required/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPhone">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="text" placeholder="Enter phone number"
                                         onChange= {this.handleChange}
                                         name="phone"
                                         value={this.state.phone}
                                        required/>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Contact Address</Form.Label>
                                        <Form.Control as="textarea" rows="3"
                                         onChange= {this.handleChange}
                                         name="address"
                                         value={this.state.address}
                                         required
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email"
                                         onChange= {this.handleChange}
                                         name="email"
                                         value={this.state.email}
                                        required/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        onChange= {this.handleChange}
                                        name="password"
                                        value={this.state.password}
                                        autoComplete="new-password"
                                        required
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicconfirmPassword">
                                        <Form.Label>Confirmation</Form.Label>
                                        <Form.Control
                                        type="password"
                                        name="confirmpassword"
                                        placeholder="Confirm Password"
                                        onChange= {this.handleChange}
                                        name="confirmpassword"
                                        value={this.state.confirmpassword}
                                        autoComplete="new-password"
                                        required
                                        />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" onClick={this.handleClose} size="lg" block>
                                        Create
                                    </Button>

                                </Form>
                            </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                            Close
                            </Button>
                            <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                            </Button>
                        </Modal.Footer>
                        </Modal>
                    </>
                    </div>
                </section>
           </div>
        );
    }
}

