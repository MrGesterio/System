
import React, { useState } from 'react';
import './App.css';
import keeper from '../assets/keeper.png'; 
import plus from '../assets/plus.png'; 
import voiceIcon from '../assets/voice-search.png'; 
import peopleIcon from '../assets/people.png'; 
import sendIcon from '../assets/logout.png'; 
import server1 from '../assets/skull.png';
import server2 from '../assets/skull (1).png';
import server3 from '../assets/skull (2).png';
import server4 from '../assets/skull (3).png';

import Channel from '../components/Channel';
import ServerMenu from '../components/ServerMenu';
import Chat from '../components/Chat';
import PeopleList from '../components/PeopleList';

function App() {
  const servers = [
    { id: 1, name: 'Server One', icon: server1 },
    { id: 2, name: 'Server Two', icon: server2 },
    { id: 3, name: 'Server Three', icon: server3 },
    { id: 4, name: 'Server Four', icon: server4 },
  ];


  const [selectedServer, setSelectedServer] = useState(null);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [showServerMenu, setShowServerMenu] = useState(false);
  const [showPeopleList, setShowPeopleList] = useState(false);

  const handleLogout = () => {
    console.log('Выход из приложения');
  };

  const handleServerSelect = (id) => {
    setSelectedServer(id);
    setSelectedChannel(null);
    setShowServerMenu(false); 
  };

  const handleKeeperClick = () => {
    setSelectedServer(null);
    setSelectedChannel(null);
    setShowServerMenu(false);
  };

  const toggleServerMenu = () => {
    setShowServerMenu(!showServerMenu);
  };

  const togglePeopleList = () => {
    setShowPeopleList(!showPeopleList);
  };


  const currentServer = servers.find(server => server.id === selectedServer);


  const channelCategories = [
    {
      category: 'Приветствие',
      channels: [
        { id: 1, type: 'text', name: 'Welcome' },
      ],
    },
    {
      category: 'Голосовые каналы',
      channels: [
        { id: 2, type: 'voice', name: 'Voice' },
      ],
    },
    {
      category: 'Новостные каналы',
      channels: [
        { id: 3, type: 'news', name: 'News' },
      ],
    },
  ];

  const handleChannelSelect = (channelId) => {
    setSelectedChannel(channelId);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <div
          className="sidebar-icon keeper-icon"
          title="Главная"
          onClick={handleKeeperClick}
        >
          <img src={keeper} alt="Keeper Icon" />
        </div>
        <div className="separator"></div>
        <div className="servers">
          {servers.map((server) => (
            <div
              key={server.id}
              className={`sidebar-icon server-icon ${selectedServer === server.id ? 'selected' : ''}`}
              title={server.name}
              onClick={() => handleServerSelect(server.id)}
            >
              <img src={server.icon} alt={`${server.name} Icon`} />
            </div>
          ))}
        </div>
        <div className="sidebar-icon add-server" title="Добавить сервер">
          <img src={plus} alt="Add Server" />
        </div>
        <div className="profile">
          <div className="profile-avatar">A</div>
          <span className="profile-name">Admin</span>
        </div>
        <div className="sidebar-icon logout-icon" title="Выйти" onClick={handleLogout}>
          <img src={sendIcon} alt="Logout Icon" />
        </div>
      </div>
      <div className="content">
        {selectedServer && selectedChannel ? (
          <div className="server-view">
            <div className="server-header">
              <div className="server-title">
                <h2 onClick={toggleServerMenu}>{currentServer.name}</h2>
                <button className="add-channel-button" title="Создать канал">+</button>
                {showServerMenu && <ServerMenu serverName={currentServer.name} />}
              </div>
              <div className="people-icon" onClick={togglePeopleList} title="Участники">
                <img src={peopleIcon} alt="People" />
              </div>
              <PeopleList isOpen={showPeopleList} onClose={() => setShowPeopleList(false)} />
            </div>
            <div className="channels">
              {channelCategories.map((category) => (
                <div key={category.category} className="channel-category">
                  <div className="category-header">{category.category}</div>
                  <div className="category-separator"></div>
                  {category.channels.map(channel => (
                    <Channel
                      key={channel.id}
                      type={channel.type}
                      name={channel.name}
                      isSelected={selectedChannel === channel.id}
                      onSelect={() => handleChannelSelect(channel.id)}
                    />
                  ))}
                </div>
              ))}
            </div>
            <Chat />
          </div>
        ) : selectedServer ? (
          <div className="server-view">
            <div className="server-header">
              <div className="server-title">
                <h2 onClick={toggleServerMenu}>{currentServer.name}</h2>
                <button className="add-channel-button" title="Создать канал">+</button>
                {showServerMenu && <ServerMenu serverName={currentServer.name} />}
              </div>
              <div className="people-icon" onClick={togglePeopleList} title="Участники">
                <img src={peopleIcon} alt="People" />
              </div>
              <PeopleList isOpen={showPeopleList} onClose={() => setShowPeopleList(false)} />
            </div>
            <div className="channels">
              {channelCategories.map((category) => (
                <div key={category.category} className="channel-category">
                  <div className="category-header">{category.category}</div>
                  <div className="category-separator"></div>
                  {category.channels.map(channel => (
                    <Channel
                      key={channel.id}
                      type={channel.type}
                      name={channel.name}
                      isSelected={selectedChannel === channel.id}
                      onSelect={() => handleChannelSelect(channel.id)}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="welcome">
            
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
