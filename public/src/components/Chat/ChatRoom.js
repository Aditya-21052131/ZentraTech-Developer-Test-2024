import React, { useState, useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const client = new W3CWebSocket('ws://localhost:8000/ws/chat/room_name/');

function ChatRoom() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        client.onmessage = (message) => {
            setMessages((prevMessages) => [...prevMessages, JSON.parse(message.data)]);
        };
    }, []);

    const sendMessage = () => {
        client.send(JSON.stringify({
            message: message
        }));
        setMessage('');
    };

    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <p key={index}>{msg.message}</p>
                ))}
            </div>
            <input 
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                onKeyDown={(e) => e.key === 'Enter' ? sendMessage() : null} 
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default ChatRoom;
