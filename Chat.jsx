
import React, { useState } from 'react';
import './Chat.css';
import uploadIcon from '../assets/plus.png'; 
import voiceIcon from '../assets/voice-search.png'; 
import sendIcon from '../assets/chat.png'; 

import user1Avatar from '../assets/skull.png'; 
import user2Avatar from '../assets/skull (1).png'; 

function Chat() {

  const currentUser = {
    id: 1,
    name: 'Admin',
    avatar: '../assets/skull (1).png', 
  };

  const otherUsers = [
    {
      id: 2,
      name: 'User One',
      avatar: user1Avatar,
    },
    {
      id: 3,
      name: 'User Two',
      avatar: user2Avatar,
    },
  ];

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { id: messages.length + 1, type: 'sent', content: input }]);
      setInput('');

      const randomUser = otherUsers[Math.floor(Math.random() * otherUsers.length)];
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          {
            id: prevMessages.length + 1,
            type: 'received',
            content: 'Ладно.',
            sender: randomUser,
          },
        ]);
      }, 1000);
    }
  };

  const handleUpload = () => {
    alert('Загрузка изображения');
  };

  const handleVoice = () => {
    alert('Запись голосового сообщения (функциональность не реализована)');
  };

  return (
    <div className="chat">
      <div className="messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.type}`}>
            {msg.type === 'received' && msg.sender && (
              <img src={msg.sender.avatar} alt={`${msg.sender.name} Avatar`} className="message-avatar" />
            )}
            {msg.type === 'received' && msg.sender && (
              <span className="message-sender">{msg.sender.name}</span>
            )}
            <div className="message-content">
              {msg.content}
            </div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Введите сообщение..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <div className="chat-actions">
          <img src={uploadIcon} alt="Upload" onClick={handleUpload} title="Загрузить изображение" />
          <img src={voiceIcon} alt="Voice" onClick={handleVoice} title="Записать голосовое" />
          <img src={sendIcon} alt="Send" onClick={handleSend} title="Отправить" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
