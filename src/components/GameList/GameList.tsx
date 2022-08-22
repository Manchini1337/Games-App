import React, { useState, useCallback, ChangeEvent } from 'react';
import { Filter } from '../../types/types';
import GameCard from '../GameCard/GameCard';
import GameFilter from '../GameFilter/GameFilter';
import classes from './GameList.module.css';
import useFetchGames from '../../hooks/useFetchGames';

const GameList: React.FC = () => {
  const [filter, setFilter] = useState<Filter>({
    platform: 'browser',
    sortBy: 'relevance',
  });

  const { games, error } = useFetchGames(filter);

  const handleFilterChange = useCallback((e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFilter((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }, []);

  if (error) return <p>Unable to fetch games</p>;

  if (!games?.length) return <p>No games available</p>;

  return (
    <>
      <GameFilter onChange={handleFilterChange} />
      <ul className={classes.list}>
        {games.map((game) => (
          <li className={classes.listItem} key={game.id}>
            <GameCard content={game} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameList;
