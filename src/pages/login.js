import React, { useState } from 'react'
import { AuthenticatedConsumer } from '../auth/authenticatedContext'
import { 
    Button,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Row } from 'reactstrap'

export const Login = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    return (
        <Container>
            <Row>
                <Col lg="8" className="mx-lg-auto py-3 py-lg-5">
                    <Form>
                        <h1>Login</h1>
                        <p className="lead">Sign in to your account to get started.</p>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email"
                                name="email"
                                value={email}
                                onChange={(input) => setEmail( input.target.value )} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Password</Label>
                            <Input type="password"
                                name="password"
                                value={password}
                                onChange={(input) => setPassword( input.target.value )} />
                        </FormGroup>
                        <AuthenticatedConsumer>
                            {({currentUser, authenticateUser}) => (
                                <Button
                                    type="button"
                                    color="primary"
                                    size="lg"
                                    className="mt-4" 
                                    onClick={ () => { authenticateUser( { email: email, password: password }, props.history ) } }>Submit</Button>
                            )}
                        </AuthenticatedConsumer>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;