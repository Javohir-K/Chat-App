import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.jsx';
import './App.css';
import LoginForm from './components/LoginForm.jsx';

const App =() => {

    if(!localStorage.getItem('username')) return <LoginForm/>;

    return (
        <ChatEngine 
            height="100vh"
            projectID="0b3835fc-56c0-4a3b-8f0b-8c503c7f6574"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}

        />
    );
};



export default App;