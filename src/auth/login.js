import React, { Component } from 'react'
import { UserConsumer } from './userContext'
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
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col lg="6" className="mx-lg-auto py-3 py-lg-5">
                        <Form>
                            <h1>Login</h1>
                            <p className="lead">Sign in to your account to get started.</p>
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
                            <UserConsumer>
                                {({currentUser, updateCurrentUser}) => (
                                    <Button
                                        type="button"
                                        color="primary"
                                        size="lg"
                                        className="mt-4" 
                                        onClick={ () => { updateCurrentUser( this.state ) } }>Submit</Button>
                                )}
                            </UserConsumer>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Login;