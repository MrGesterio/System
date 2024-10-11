
import React from 'react';
import './ServerMenu.css';

function ServerMenu({ serverName }) {
  return (
    <div className="server-menu">
      <h3>{serverName}</h3>
      <ul>
        <li>Настройки сервера</li>
        <li>Участники</li>
        <li>Переименовать</li>
        <li>Выход</li>
      </ul>
    </div>
  );
}

export default ServerMenu;
