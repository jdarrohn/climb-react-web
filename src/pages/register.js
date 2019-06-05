import React from 'react'
import { 
    Button,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Row } from 'reactstrap'

import DropdownCompanySelect from '../global/dropdownCompanySelect'

export const Register = () => {
    return (
        <Container>
            <Row>
                <Col lg="8" className="mx-lg-auto py-3 py-lg-5">
                    <Form>
                        <h1>Register</h1>
                        <p className="lead">Sign in to your account to get started.</p>
                        <Row>
                            <Col lg="6">
                                <FormGroup>
                                    <Label for="exampleEmail">First Name</Label>
                                    <Input type="text"/>
                                </FormGroup>
                            </Col>
                            <Col lg="6">
                                <FormGroup>
                                    <Label for="exampleEmail">Last Name</Label>
                                    <Input type="text"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="passwordConfirm">Confirm Password</Label>
                            <Input type="password" />
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Register