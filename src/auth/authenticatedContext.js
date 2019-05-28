import React, { useState, useEffect } from 'react'
import { MessagesConsumer } from '../global/messages/messagesContext'
import Config from '../app/config'

export const AuthenticatedContext = React.createContext({
    currentUser: null
});

export const AuthenticatedProvider = ({children, props}) => {

    const [currentUser, setCurrentUser] = useState(null)
    
    useEffect(() => {
        let storageUserToken = localStorage.getItem('userToken');
        if( storageUserToken && storageUserToken.length ) {
            fetch( Config.api.url + '/api/user', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + storageUserToken
                },
            })
            .then((response) => {
                return response.json();
            })
            .then((user) => {
                setCurrentUser(user)
                localStorage.setItem('user', JSON.stringify(user));
            })
            .catch((error) => {
                console.error(error);
            });
        }
    }, []);

    const authenticateUser = async (newCurrentUser, history) => {

        await fetch(Config.api.url + '/oauth/token', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                grant_type: 'password',
                client_id: 2,
                client_secret: Config.api.clientSecret,
                username: newCurrentUser.email,
                password: newCurrentUser.password
            }),
        })
        .then((response) => response.json())
        .then((userToken) => {
            localStorage.setItem('userToken', userToken.access_token);
            return fetch(Config.api.url + '/api/user', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + userToken.access_token
                },
            })
        })
        .then((response) => {
            return response.json();
        })
        .then((user) => {
            setCurrentUser(user)
            localStorage.setItem('user', JSON.stringify(user));
            history.push('/stats');
        })
        .catch((error) => {
            console.error(error);
        });
    };

    const removeAuthenticatedUser = (history) => {
        setCurrentUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('userToken');

        return (
            <MessagesConsumer>
                {({updateMessage}) => (
                    updateMessage('You have been logged out.', 'success')
                )}
            </MessagesConsumer>
        );
    }

  return (
      <AuthenticatedContext.Provider value={ {currentUser, authenticateUser, removeAuthenticatedUser} }>
          { children }
      </AuthenticatedContext.Provider>
  );
}

export const AuthenticatedConsumer = AuthenticatedContext.Consumer;