import React from 'react'
import { 
    Col,
    Container,
    Row } from 'reactstrap'

export const ClimbIndex = () => {
    
    return (
        <Container>
            <Row>
                <Col lg="6" className="mx-lg-auto py-3 py-lg-5">
                    <h1>Recent Climbs</h1>
                    <p className="lead">These are the recent climbs of everyone in Ready, Set, Climb!</p>
                </Col>
            </Row>
        </Container>
    )
}

export default ClimbIndex