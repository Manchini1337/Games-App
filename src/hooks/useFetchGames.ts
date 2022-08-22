import { useState, useEffect } from "react"
import axios from "axios"
import { Filter, Game } from "../types/types"

interface useFetchGamesResponse {
    games: Game[];
    error?: string;
}

const useFetchGames = (params: Filter): useFetchGamesResponse => {
    const [games, setGames] = useState<Game[]>([]);
    const [err, setErr] = useState<string>('');

    const {platform, category, sortBy} = params

    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        headers: {
          'X-RapidAPI-Key': '97a00d1a5cmsh593462f3924da92p1e20d8jsn2b99f0d424fa',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        },
        params: {
          platform, category, 'sort-by': sortBy
        },
      };

    useEffect(() => {
        axios
          .request(options)
          .then((response) => {
            setGames(response.data);
            
          })
          .catch((error) => setErr(error.message));
      }, [platform, category, sortBy]);

      return {
        games, error: err
      }
}

export default useFetchGames;