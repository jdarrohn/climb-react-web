import React, { useEffect, useState, useContext } from 'react'
import {AuthenticatedContext} from '../auth/authenticatedContext'
import { Table } from 'reactstrap'
import Climb from '../app/climb'
import { Link } from 'react-router-dom'
import moment from 'moment'

export const AttemptsUser =  (props) => {

    useEffect(() => {
        console.log(props.attempts);
    },[])

    const formatDate = (date) => {
        return moment(date).format('MMMM D, YYYY, h:mm a');
    }

    return (
        <Table striped>
            <thead>
            <tr>
                <th>Climb Name</th>
                <th>Climb Grade</th>
                <th>Success</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
                { props.attempts &&
                    (
                        props.attempts.map((attempt, index) => {
                            return (
                                <tr key={index}>
                                    <td >
                                        <Link to={'/climbs/' + attempt.climb.id }>
                                            {attempt.climb.name}
                                        </Link>
                                    </td>
                                    <td>{ Climb.convertGrade(attempt.climb.grade) }</td>
                                    <td>
                                        { true == attempt.is_successful ? (
                                            <span className="text-success">Yes</span>
                                        ) : (
                                            <span className="text-danger">No</span>                                            
                                        )}
                                    </td>
                                    <td>{ formatDate( attempt.created_at ) }</td>                                    
                                </tr>
                            )
                        })
                    )
                }
            </tbody>
        </Table>
    )
}