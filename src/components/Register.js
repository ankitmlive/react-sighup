import React, { Component } from 'react';  
import { Button, Card, CardTitle, CardText, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
  
class Reg extends Component {  
  
  constructor() {  
    super();  
  
    this.state = {  
      Registration: '',  
      Firstname: '',  
      Lastname: '',  
      Organization: '',  
      Phone: ''  
    }  
  
    this.Firstname = this.Firstname.bind(this);  
    this.Lastname = this.Lastname.bind(this);  
    this.Registration = this.Registration.bind(this);  
    this.Organization = this.Organization.bind(this);  
    this.Phone = this.Phone.bind(this);  
    this.register = this.register.bind(this);  
  }  
  
  Organization(event) {  
    this.setState({ Organization: event.target.value })  
  }  
  
  Firstname(event) {  
    this.setState({ Firstname: event.target.value })  
  }  

  Registration(event) {  
    this.setState({ Registration: event.target.value })  
  }  

  Lastname(event) {  
    this.setState({ Lastname: event.target.value })  
  }  
  Phone(event) {  
    this.setState({ Phone: event.target.value })  
  }  
  
  register(event) {  
    fetch('http://localhost:8000/Api/register/', {  
      method: 'post',  
      headers: {  
        'Accept': 'application/json',  
        'Content-Type': 'application/json'  
      },  
      body: JSON.stringify({  
        Firstname: this.state.Firstname,  
        Lastname: this.state.Lastname,  
        Organization: this.state.Organization,  
        Phone: this.state.Phone,  
        Registration: this.state.Registration  
      })  
    }).then((Response) => Response.json())  
      .then((Result) => {  
        if (Result.Status == 'Success')  
                this.props.history.push("/Dashboard");  
        else  
          alert('Sorrrrrry !!!! Un-authenticated User !!!!!')  
      })  
  }  
  
  render() {  
  
    return (  
      <div className="app flex-row align-items-center"> 
      <Container>
      <Row className="justify-content-center">
        <Col xs="6">
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
                      <Input type="text" bsSize="sm" className="app-input"  onChange={this.registration} placeholder="Registration No." />  
                    </InputGroup>  
                    <InputGroup className="mb-3">  
                      <Input type="text" bsSize="sm" className="app-input" onChange={this.firstname} placeholder="First Name" />  
                    </InputGroup>  
                    <InputGroup className="mb-3">  
                      <Input type="password" bsSize="sm" className="app-input"  onChange={this.lastname} placeholder="Last name" />  
                    </InputGroup>  
                    <InputGroup className="mb-4">  
                      <Input type="text" bsSize="sm" className="app-input"  onChange={this.organigation} placeholder="Organization" />  
                    </InputGroup>  
                    <InputGroup className="mb-4">  
                      <Input type="text" bsSize="sm" className="app-input" onChange={this.phone} placeholder="Phone" />  
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