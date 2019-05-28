import React, { useState, useEffect } from 'react'
import ClimbsList from '../climbs/climbsList'
import Spinner from '../global/spinner'
import Config from '../app/config'
import { 
    Col,
    Container,
    Row } from 'reactstrap'

export const ClimbIndex = () => {

    const [climbs, setClimbs] = useState([]);
    const [pagination, setPagination] = useState([]);

    useEffect(() => {
        getClimbs();
    }, []);

    const getClimbs = async () => {
        const storageUserToken  = localStorage.getItem('userToken');

        if( storageUserToken ) {
            await fetch(Config.api.url + '/api/climbs', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + storageUserToken
                },
            })
            .then((response) => {
                return response.json();
            })
            .then((pagination) => {
                setPagination(pagination);
                setClimbs(pagination.data);

                console.log(pagination);
            })
            .catch((error) => {
                console.error(error);
            });
        }
    }
    
    return (
        <Container>
            <Row>
                <Col lg="8" className="mx-lg-auto py-3 py-lg-5">
                    <h1>Recent Climbs</h1>
                    <p className="lead">These are the recent climbs of everyone in Ready, Set, Climb!</p>
                    { climbs ? (
                            <ClimbsList climbs={climbs}></ClimbsList>
                        ) : (
                            <Spinner />
                        )
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default ClimbIndex