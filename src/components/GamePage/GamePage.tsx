import React from 'react';
import useFetchGame from '../../hooks/useFetchGame';
import { useParams } from 'react-router-dom';
import classes from './GamePage.module.css';
import Gallery from './Gallery';

const GamePage: React.FC = () => {
  const { gid } = useParams();
  const game = useFetchGame(gid);

  if (!game) return <p>Unable to fetch game data.</p>;

  console.log(game);

  const {
    description,
    developer,
    game_url,
    genre,
    platform,
    publisher,
    release_date,
    thumbnail,
    title,
    screenshots,
  } = game;

  const paragraphs = description?.split('.');
  paragraphs?.pop();

  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        <div className={classes.thumbnail}>
          <img className={classes.img} alt={title} src={thumbnail} />

          <button
            className={classes.button}
            onClick={() => window.location.replace(game_url)}
          >
            Play Now
          </button>
        </div>
        <div>
          <div className={classes.title}>
            <h2>About {title}</h2>
            {paragraphs?.map((p, i) => (
              <p key={i} className={classes.description}>
                {p + '.'}
              </p>
            ))}
          </div>
          <div className={classes.information}>
            <h2>Additional information</h2>
            <div className={classes.informationContainer}>
              <div>
                <label>Title</label>
                <p>{title}</p>
              </div>
              <div>
                <label>Developer</label>
                <p>{developer}</p>
              </div>
              <div>
                <label>Publisher</label>
                <p>{publisher}</p>
              </div>
              <div>
                <label>Release Date</label>
                <p>{release_date}</p>
              </div>
              <div>
                <label>Genre</label>
                <p>{genre}</p>
              </div>
              <div>
                <label>Platform</label>
                <p>{platform}</p>
              </div>
            </div>
            <Gallery screenshots={screenshots} title={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
