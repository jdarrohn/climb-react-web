import React, { useState, useEffect } from 'react'

export const AuthenticatedContext = React.createContext({
    currentUser: null
});

export const AuthenticatedProvider = ({children, props}) => {

    function getStoredUser() {
        let storageUser = localStorage.getItem('user');
        storageUser = JSON.parse(storageUser);

        // Return early with the stored user if one exists
        if(storageUser && Object.keys(storageUser).length) {
            return storageUser;
        }

        // Return false
        return {};
    }

    const [currentUser, setCurrentUser] = useState(null)
    
    useEffect(() => {
        let storageUserToken = localStorage.getItem('userToken');
        if( storageUserToken && storageUserToken.length ) {
            fetch('https://climb.dtbstaging.online/api/user', {
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

        await fetch('https://climb.dtbstaging.online/oauth/token', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                grant_type: 'password',
                client_id: 2,
                client_secret: 'h4iVQ8jndJxxtyHwk3jBZqcv6JiBr9N9mlbzqdrR',
                username: newCurrentUser.email,
                password: newCurrentUser.password
            }),
        })
        .then((response) => response.json())
        .then((userToken) => {
            localStorage.setItem('userToken', userToken.access_token);
            return fetch('https://climb.dtbstaging.online/api/user', {
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

  return (
      <AuthenticatedContext.Provider value={ {currentUser, authenticateUser} }>
          { children }
      </AuthenticatedContext.Provider>
  );
}

export const AuthenticatedConsumer = AuthenticatedContext.Consumer;