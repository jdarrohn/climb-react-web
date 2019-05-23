import React, { useEffect, useState, useContext } from 'react'
import {AuthenticatedContext} from '../auth/authenticatedContext'
import { Table } from 'reactstrap'
import Climb from '../app/climb'

export const AttemptsList =  (props) => {
    return (
        <Table striped>
            <thead>
            <tr>
                <th>Climb Name</th>
                <th>Climb Grade</th>
                <th>Success</th>
            </tr>
            </thead>
            <tbody>
                { props.attempts &&
                    (
                        props.attempts.map((attempt, index) => {
                            return (
                                <tr key={index}>
                                    <td >{attempt.climb.name}</td>
                                    <td>{ Climb.convertGrade(attempt.climb.grade) }</td>
                                    <td>
                                        { true == attempt.is_successful ? (
                                            <span className="text-success">Yes</span>
                                        ) : (
                                            <span className="text-danger">No</span>                                            
                                        )}
                                    </td>
                                </tr>
                            )
                        })
                    )
                }
            </tbody>
        </Table>
    )
}