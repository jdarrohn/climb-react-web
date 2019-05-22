import React, { useEffect, useState, useContext } from 'react'
import {AuthenticatedContext} from '../auth/authenticatedContext'
import { Table } from 'reactstrap'

export const AttemptsList =  (props) => {
    const [attempts, setAttempts] = useState([])
    const authenticatedUser = useContext(AuthenticatedContext)
    const currentUser = authenticatedUser.currentUser;
    
    useEffect(() => {
        if( currentUser ) {
            setAttempts(currentUser.attempts);
        }
    }, [currentUser]);

    return (
        <Table>
            <thead>
            <tr>
                <th>Climb Name</th>
                <th>Climb Grade</th>
            </tr>
            </thead>
            <tbody>
                {attempts.map((attempt, index) => {
                    return (
                        <tr>
                            <td key={index}>{attempt.climb.name}</td>
                            <td key={index}>{attempt.climb.grade}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}