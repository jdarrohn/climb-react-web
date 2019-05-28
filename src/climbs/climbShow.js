import React, { useContext, useEffect, useState } from 'react'
import { AuthenticatedContext } from '../auth/authenticatedContext'
import Climb from '../app/climb'
import { AttemptsClimb } from '../attempts/attemptsClimb'
import { SuccessPercentageBar } from '../global/successPercentageBar'
import { Spinner } from '../global/spinner'
import Config from '../app/config'
import {
    Container,
    Row,
    Col } from 'reactstrap'
import _ from 'underscore'

export const ClimbShow = (props) => {

    const climbID = props.match.params.id
    const userToken = localStorage.getItem('userToken');
    const [successPercentage, setSuccessPercentage ] = useState(100);
    const [climb, setClimb ] = useState({});

    const getClimb = () => {
        if( userToken ) {
            let climbUrl = Config.api.url + '/api/climbs/' + climbID;
            fetch(climbUrl, {
                method: 'GET',
                headers: {
                  'Authorization': 'Bearer ' + userToken
                }
              })
              .then((response) => response.json())
              .then((currentClimb) => {
                setClimb(currentClimb);
                console.log(currentClimb.attempts);
              })
              .catch((error) => {
                console.error(error);
              });
        }
    }

    const getSuccessRatio = () => {
        if( climb && climb.attempts && climb.attempts.length ) {
            const attempts = climb.attempts;
            const successfulAttempts = _.where(attempts, {is_successful: "1"});
            const successRatio = (successfulAttempts.length / attempts.length).toFixed(2);
            return successRatio;
        }
    }

    const getSuccessPercentage = () => {
        let successPercentage = getSuccessRatio() * 100;
        return successPercentage;
    }

    useEffect(() => {
        getClimb();
    }, [climbID]);

    return (
        <Container>
            <Row>
                <Col lg="8" className="mx-lg-auto py-3 py-lg-5">
                    <p className="display-2 font-weight-bold">{ Climb.convertGrade(climb.grade) }</p>
                    <h1>{ climb.name }</h1>
                    <p className="lead">{ climb.description }</p>
                </Col>
            </Row>
            <Row>
                <Col lg="8" className="mx-lg-auto">
                { climb.attempts ? (
                        <>
                            <SuccessPercentageBar successPercentage={getSuccessPercentage()} />
                            <h2>Recent Attempts</h2>
                            <AttemptsClimb attempts={climb.attempts} />
                        </>
                    ) : (
                        <Spinner />
                    )
                }
                </Col>
            </Row>
        </Container>
    )
}

export default ClimbShow