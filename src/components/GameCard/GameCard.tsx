import React from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../../types/types';
import classes from './GameCard.module.css';
import windowsIcon from '../../assets/icons/windows.svg';
import browserIcon from '../../assets/icons/browser.svg';

interface GameCardProps {
  content: Game;
}

const GameCard: React.FC<GameCardProps> = ({ content }) => {
  const { id, title, thumbnail, short_description, genre, platform } = content;

  const icons = platform.split(',').map((p) => {
    let icon = null;
    switch (p.trim()) {
      case 'Web Browser':
        icon = (
          <img
            className={classes.icon}
            key={`${id}-browser`}
            alt='browser-icon'
            src={browserIcon}
          />
        );
        break;
      case 'PC (Windows)':
        icon = (
          <img
            className={classes.icon}
            key={`${id}-windows`}
            alt='windows-icon'
            src={windowsIcon}
          />
        );
        break;
      default:
        break;
    }
    return icon;
  });

  return (
    <Link className={classes.link} to={`/game/${id}`}>
      <img className={classes.img} src={thumbnail} alt={title} />
      <div className={classes.cardDetails}>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.description}>{short_description}</p>
        <div className={classes.iconContainer}>
          <div>{icons}</div>
          <p className={classes.genre}>{genre}</p>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
