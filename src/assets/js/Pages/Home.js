import React, { Component } from 'react'
import { Jumbotron, Button, Container } from 'reactstrap'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <Jumbotron className="rounded-0 bg-primary">
                <Container className="text-center">
                    <h1 className="display-4 text-white text-center mb-5">
                        Ready, Set, Climb! <br/>
                        <small>The QR Code App for Climbing Gyms</small>
                    </h1>
                    <Link to={'/climbs'}>
                        <Button color="outline-light" size="lg">View Some Recent Climbs</Button>
                    </Link>
                </Container>
            </Jumbotron>
        )
    }
}

export default Home