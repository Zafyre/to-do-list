import React, { useContext, useState } from 'react';
import { messages } from '../../providers/MessagesProvider';
import ContactList from './ContactList/ContactList';
import Chat from './Chat/Chat';
import styles from "./Messages.module.css";

const Messages = () => {

    const messagesContext = useContext(messages);
    const [ selectedUser, setSelectedUser ] = useState("");

    console.log(messagesContext.messages);

    return (
        <div className={ styles.wrapper }>
            <ContactList messages={ messagesContext.messages } setSelectedUser={ setSelectedUser } />
            <Chat userID={ selectedUser } messages={ messagesContext.messages[ selectedUser ]?.messages || [] } />
        </div>
    );
};

export default Messages;