import React, { Component } from 'react'
import { 
    Button,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Row } from 'reactstrap'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleFormSubmission = this.handleFormSubmission.bind(this);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col lg="6" className="mx-lg-auto py-3 py-lg-5">
                        <Form>
                            <h1>Login</h1>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={(input) => this.setState({email: input.target.value})} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Password</Label>
                                <Input type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={(input) => this.setState({password: input.target.value})}/>
                            </FormGroup>
                            <Button color="primary" size="lg" className="mt-4" onClick={this.handleFormSubmission}>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }

    handleFormSubmission() {
        fetch('https://climb.dtbstaging.online/oauth/token', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                grant_type: 'password',
                client_id: 2,
                client_secret: 'UV4qwApeI2zaxpEZTu02jYU43h4uOpwZC6oGbE36',
                username: this.state.email,
                password: this.state.password
            }),
          })
        .then((response) => response.json())
        .then((userToken) => {
            localStorage.setItem('userToken', userToken.access_token);
            return fetch('https://climb.dtbstaging.online/api/user', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + userToken.access_token
                },
            })
        })
        .then((response) => {
            return response.json();
        })
        .then((user) => {
            user = JSON.stringify(user);
            return localStorage.setItem('user', user);
        })
        .then((user) => {
            alert('it worked');
        })
        .catch((error) => {
            console.error(error);
        });
    }

}

export default Login