import React, { useContext, useEffect, useState } from 'react'
import {AuthenticatedContext} from '../auth/authenticatedContext'
import { AttemptsList } from '../climbs/attemptsList'
import {
    Container,
    Row,
    Col } from 'reactstrap'

export const PageStats = () => {

    return (
        <Container>
            <Row>
                <Col lg="6" className="mx-lg-auto py-3 py-lg-5">
                    <h1>Stats</h1>
                    <p className="lead">These are the stats of the current user.</p>
                </Col>
            </Row>
            <Row>
                <Col lg="8" className="mx-lg-auto">
                    <AttemptsList />
                </Col>
            </Row>
        </Container>
    )
}

export default PageStats