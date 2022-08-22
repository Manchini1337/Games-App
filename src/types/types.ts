export type Screenshot = {
    id: number,
    image: string,
}

export type Game = {
    id: number,
    title: string,
    thumbnail: string,
    short_description: string,
    game_url: string,
    genre: string,
    platform: string,
    publisher: string,
    developer: string,
    release_date: string,
    freetogame_profile_url: string,
    description?: string,
    screenshots?: Screenshot[]
}

export type Filter = {
    platform: string,
    category?: string,
    sortBy: string
}