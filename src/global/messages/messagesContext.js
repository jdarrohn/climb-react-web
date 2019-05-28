import React, { useState } from 'react'

export const MessagesContext = React.createContext({
    message: null,
    type: 'default'
});

export const MessagesProvider = ({children, props}) => {

    const [message, setMessage] = useState(null);
    const [type, setType] = useState('default');

    const updateMessage = (message, type) => {
        setMessage(message);
        setType(type);
    }

  return (
      <MessagesContext.Provider value={ { message, type, updateMessage } }>
          { children }
      </MessagesContext.Provider>
  );
}

export const MessagesConsumer = MessagesContext.Consumer;