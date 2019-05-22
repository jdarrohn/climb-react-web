import React, { useState } from 'react'

export const UserContext = React.createContext({
    currentUser: null
});

export const UserProvider = ({children}) => {

  const [currentUser, setCurrentUser] = useState(null)

  const updateCurrentUser = async (newCurrentUser) => {

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
    })
    .catch((error) => {
        console.error(error);
    });
  };

  return (
      <UserContext.Provider value={ {currentUser, updateCurrentUser} }>
          { children }
      </UserContext.Provider>
  );
}
export const UserConsumer = UserContext.Consumer;