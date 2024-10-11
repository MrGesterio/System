
import React from 'react';
import './Channel.css';
import textIcon from '../assets/chat.png';
import newsIcon from '../assets/news-feed.png';
import voiceIcon from '../assets/voice-search.png';

function Channel({ type, name, isSelected, onSelect }) {
  let icon;
  switch (type) {
    case 'text':
      icon = textIcon;
      break;
    case 'news':
      icon = newsIcon;
      break;
    case 'voice':
      icon = voiceIcon;
      break;
    default:
      icon = textIcon;
  }

  return (
    <div
      className={`channel ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      <img src={icon} alt={`${type} icon`} className="channel-icon" />
      <span className="channel-name">{name}</span>
    </div>
  );
}

export default Channel;
