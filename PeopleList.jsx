// src/components/PeopleList.jsx
import React from 'react';
import './PeopleList.css';
import user1 from '../assets/skull.png'; // Иконка пользователя 1
import user2 from '../assets/skull (1).png'; // Иконка пользователя 2
// Добавьте больше иконок пользователей по необходимости

function PeopleList({ isOpen, onClose }) {
  if (!isOpen) return null;

  const people = [
    { id: 1, name: 'Пользователь 1', avatar: user1 },
    { id: 2, name: 'Пользователь 2', avatar: user2 },
    // Добавьте больше участников по необходимости
  ];

  return (
    <div className="people-list">
      <div className="people-header">
        <h3>Участники</h3>
        <button onClick={onClose}>×</button>
      </div>
      <ul>
        {people.map(person => (
          <li key={person.id}>
            <img src={person.avatar} alt="User" className="user-icon" />
            <span>{person.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleList;
