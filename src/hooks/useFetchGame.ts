import { useState, useEffect } from "react"
import axios from "axios"
import { Game } from "../types/types"


const useFetchGame = (id: string | undefined) => {
    const [game, setGame] = useState<Game | null>(null);

    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: {id},
        headers: {
          'X-RapidAPI-Key': '97a00d1a5cmsh593462f3924da92p1e20d8jsn2b99f0d424fa',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };

      useEffect(() => {
        axios.request(options).then((response) => setGame(response.data)).catch((error) => console.log(error));
      },[id])

    return game;
}

export default useFetchGame;