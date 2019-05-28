import React, { useEffect, useState, useContext } from 'react'
import {AuthenticatedContext} from '../auth/authenticatedContext'
import { Table } from 'reactstrap'
import Climb from '../app/climb'
import { Spinner } from '../global/spinner'
import { Link } from 'react-router-dom'
import moment from 'moment'

export const ClimbsList =  (props) => {

    const formatDate = (date) => {
        return moment(date).format('MMMM D, YYYY, h:mm a');
    }

    return (
        <Table striped>
            <thead>
            <tr>
                <th>Name</th>
                <th>Grade</th>
            </tr>
            </thead>
            <tbody>
                { props.climbs &&
                    (
                        props.climbs.map((climb, index) => {
                            return (
                                <tr key={index}>
                                    <td>{ climb.name }</td>                                    
                                    <td>{ Climb.convertGrade(climb.grade) }</td>
                                </tr>
                            )
                        })
                    )
                }
            </tbody>
        </Table>
    )
}

export default ClimbsList