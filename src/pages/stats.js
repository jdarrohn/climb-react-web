import React, { useContext, useEffect, useState } from 'react'
import {AuthenticatedContext} from '../auth/authenticatedContext'
import { AttemptsUser } from '../attempts/attemptsUser'
import { Spinner } from '../global/spinner'
import { SuccessPercentageBar } from '../global/successPercentageBar'
import {
    Container,
    Row,
    Col } from 'reactstrap'
import _ from 'underscore'

export const PageStats = () => {
    const authenticatedUser = useContext(AuthenticatedContext)
    const [currentUser, setCurrentUser ] = useState({});
    const [successPercentage, setSuccessPercentage ] = useState(100);

    useEffect(() => {
        setCurrentUser(authenticatedUser.currentUser);
    }, [authenticatedUser]);

    const getSuccessRatio = () => {
        if( currentUser && currentUser.attempts && currentUser.attempts.length ) {
            const attempts = currentUser.attempts;
            const successfulAttempts = _.where(attempts, {is_successful: "1"});
            const successRatio = (successfulAttempts.length / attempts.length).toFixed(2);
            return successRatio;
        }
    }

    const getSuccessPercentage = () => {
        let successPercentage = getSuccessRatio() * 100;
        return successPercentage;
    }

    return (
        <Container>
            <Row>
                <Col lg="8" className="mx-lg-auto py-3 py-lg-5">
                    <h1>Stats</h1>
                    <p className="lead">These are the stats of the current user.</p>
                </Col>
            </Row>
            <Row>
                <Col lg="8" className="mx-lg-auto">
                    {
                        currentUser && currentUser.attempts ? (
                            <>
                                <h2>Your Attempts</h2>
                                <SuccessPercentageBar successPercentage={getSuccessPercentage()}/>
                                <AttemptsUser attempts={currentUser.attempts} />
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

export default PageStats