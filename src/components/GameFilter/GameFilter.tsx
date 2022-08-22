import React, { ChangeEvent } from 'react';
import classes from './GameFilter.module.css';
import { PLATFORMS, CATEGORIES, SORT_BY } from './data';

interface GameFilterProps {
  onChange: (e: ChangeEvent<HTMLFormElement>) => void;
}

const GameFilter: React.FC<GameFilterProps> = ({ onChange }) => {
  return (
    <form onChange={onChange} className={classes.form}>
      <label className={classes.label} htmlFor='select-platform'>
        Platform:
        <select className={classes.select} name='platform' id='select-platform'>
          {PLATFORMS.map((platform) => (
            <option value={platform.value} key={platform.value}>
              {platform.display}
            </option>
          ))}
        </select>
      </label>

      <label className={classes.label} htmlFor='select-category'>
        Category:
        <select className={classes.select} name='category' id='select-category'>
          {CATEGORIES.map((category) => (
            <option value={category.value} key={category.value}>
              {category.display}
            </option>
          ))}
        </select>
      </label>

      <label className={classes.label} htmlFor='select-sortBy'>
        Sort By:
        <select className={classes.select} name='sortBy' id='select-sortBy'>
          {SORT_BY.map((sort) => (
            <option value={sort.value} key={sort.value}>
              {sort.display}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
};

export default GameFilter;
