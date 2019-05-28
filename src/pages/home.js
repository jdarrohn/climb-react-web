import React, { Component } from 'react'
import { Jumbotron, Button, Container } from 'reactstrap'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <Jumbotron className="rounded-0 bg-primary">
                <Container>
                    <h1 className="display-2 text-white">
                        Ready, Set, Climb! <br/>
                    </h1>
                    <p className="lead text-white mb-5">The QR Code App for Climbing Gyms</p>
                    <div className="mb-5">
                        <img src="/download-play-store.svg" height="60" className="mr-2" />
                        <img src="/download-app-store.svg" height="60" />
                    </div>
                    <Link to={'/climbs'}>
                        <Button color="outline-light" size="lg">View Some Recent Climbs</Button>
                    </Link>
                </Container>
            </Jumbotron>
        )
    }
}

export default Home