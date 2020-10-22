import React, { Component } from 'react';  
import axios from 'axios';
import qs from 'qs'
import { Button, Card, CardTitle, CardText, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
  
class Reg extends Component {  
  
  constructor() {  
    super();  
  
    this.state = {  
      registration: '',  
      firstname: '',  
      lastname: '',  
      organization: '',  
      phone: ''  
    }  
  
    this.firstname = this.firstname.bind(this);  
    this.lastname = this.lastname.bind(this);  
    this.registration = this.registration.bind(this);  
    this.organization = this.organization.bind(this);  
    this.phone = this.phone.bind(this);  
    this.register = this.register.bind(this);  
  }  
  
  organization(event) {  
    this.setState({ organization: event.target.value })  
  }  
  
  firstname(event) {  
    this.setState({ firstname: event.target.value })  
  }  

  registration(event) {  
    this.setState({ registration: event.target.value })  
  }  

  lastname(event) {  
    this.setState({ lastname: event.target.value })  
  }  
  phone(event) {  
    this.setState({ phone: event.target.value })  
  }  
  
  register(event) { 
    const user = {
      'firstname': this.state.firstname,  
      'lastname': this.state.lastname,  
      'organization': this.state.organization,  
      'phone': this.state.phone,  
      'registration': this.state.registration,
      'password': '12346789' // only for testing
    };
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(user),
      url: 'http://localhost:8000/api/v1/accounts/register/'
    };
    axios(options).then(res => {
      console.log(res);
      console.log(res.data);
      alert("Successfully registered new user");
    }).catch(error => {
      console.log(error);
      alert("Please fill all the fields");
    });
  }  
  
  render() {  
    return (  
      <div className="app flex-row align-items-center"> 
      <Container>
      <Row className="justify-content-center">
        <Col xs="6" className="hide_class">
            <Card className="main-card">
                <h2 className="main-text">Welcome</h2>
                <h4><span className="span-text">Expect</span> More</h4>
                <h4><span className="span-text">Expect</span> Performance</h4>
                <h4><span className="span-text">Expect</span> Results</h4>
                <p className="span-text">On-Demand courses and bite-sized videos to fit your schedule.</p>
                <Row className="justify-content-center">
                    <Button className="app-input" color="warning">Schedule in Demo</Button>{' '}
                    <Button className="app-input" color="danger">Learn More</Button>{' '}
                </Row>
            </Card>
        </Col>
        <Col xs="4">
        <div className="main-input-div">
        <Form>  
            <Row className="justify-content-center"> 
                <h5 className="main-text-r">Create Account</h5>  
            </Row>
                    <InputGroup className="mb-3">  
                      <Input type="text" bsSize="sm" className="app-input" value={this.state.registration} onChange={this.registration} placeholder="Registration No." />  
                    </InputGroup>  
                    <InputGroup className="mb-3">  
                      <Input type="text" bsSize="sm" className="app-input" value={this.state.firstname} onChange={this.firstname} placeholder="First Name" />  
                    </InputGroup>  
                    <InputGroup className="mb-3">  
                      <Input type="text" bsSize="sm" className="app-input" value={this.state.lastname}  onChange={this.lastname} placeholder="Last name" />  
                    </InputGroup>  
                    <InputGroup className="mb-4">  
                      <Input type="text" bsSize="sm" className="app-input" value={this.state.organization}  onChange={this.organization} placeholder="Organization" />  
                    </InputGroup>  
                    <InputGroup className="mb-4">  
                      <Input type="text" bsSize="sm" className="app-input" value={this.state.phone} onChange={this.phone} placeholder="Phone" />  
                    </InputGroup>  
                    <Button  onClick={this.register} className="app-input" color="warning" block>Next</Button> 
                    <Row className="justify-content-center">
                        <p className="small-text">Already have an account?<span>Sign In</span></p>
                    </Row>
        </Form>  
        </div>
        </Col>
      </Row>
      </Container>
      </div>  
    );  
  }  
}  
  
export default Reg; 