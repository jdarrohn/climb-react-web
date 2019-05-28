import React, { useState, useEffect } from 'react'
import { AuthenticatedConsumer } from '../auth/authenticatedContext'

export const Login = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = props.history

    return (
        <AuthenticatedConsumer>
            {({removeAuthenticatedUser}) => (
                removeAuthenticatedUser(history)
            )}
        </AuthenticatedConsumer>
    );
}

export default Login;