import React, { Component } from 'react'

export const UserContext = React.createContext({
    currentUser: null,
    updateCurrentUser: () => {}
});

export class UserProvider extends Component {
    
    state = {
        currentUser: null,
        updateCurrentUser: newCurrentUser => {

            fetch('https://climb.dtbstaging.online/oauth/token', {
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
                this.setState({currentUser: user});
                localStorage.setItem('user', JSON.stringify(user));
            })
            .catch((error) => {
                console.error(error);
            });

        }
    };
    
    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export const UserConsumer = UserContext.Consumer;