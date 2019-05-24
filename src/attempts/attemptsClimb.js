import React, { useEffect, useState, useContext } from 'react'
import {AuthenticatedContext} from '../auth/authenticatedContext'
import { Table } from 'reactstrap'
import Climb from '../app/climb'
import { Link } from 'react-router-dom'
import moment from 'moment'

export const AttemptsClimb =  (props) => {

    const formatDate = (date) => {
        return moment(date).format('MMMM D, YYYY, h:mm a');
    }

    return (
        <Table striped>
            <thead>
            <tr>
                <th>Climber</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
                { props.attempts &&
                    (
                        props.attempts.map((attempt, index) => {
                            return (
                                <tr key={index}>
                                    <td>{ attempt.user.name }</td>                                    
                                    <td>{ formatDate(attempt.created_at) }</td>
                                </tr>
                            )
                        })
                    )
                }
            </tbody>
        </Table>
    )
}