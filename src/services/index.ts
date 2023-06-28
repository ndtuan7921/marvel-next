import { publish_key, hashed_key } from "../../env.config";

export const getComics = async () => {
  try {
    const URL = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publish_key}&hash=${hashed_key}`;
    const res = await fetch(URL);
    let data = await res.json();
    return data.data.results;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const getComicsById = async (id: string) => {
  try {
    const URL = `http://gateway.marvel.com/v1/public/comics/${id}?ts=1&apikey=${publish_key}&hash=${hashed_key}`;
    const res = await fetch(URL);
    let data = await res.json();
    return data.data.results[0];
  } catch (error) {
    console.log("Error:", error);
  }
};

export const getComicsByCharacterId = async (id: string) => {
  try {
    const URL = `http://gateway.marvel.com/v1/public/characters/${id}/comics?ts=1&apikey=${publish_key}&hash=${hashed_key}`;
    const res = await fetch(URL);
    let data = await res.json();
    return data.data.results;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const getCharacters = async () => {
  try {
    const URL = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publish_key}&hash=${hashed_key}`;
    const res = await fetch(URL);
    let data = await res.json();
    return data.data.results;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const getCharactersById = async (id: string) => {
  try {
    const URL = `http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${publish_key}&hash=${hashed_key}`;
    const res = await fetch(URL);
    let data = await res.json();
    return data.data.results[0];
  } catch (error) {
    console.log("Error:", error);
  }
};

export const querySearch = async (query: {
  type: string;
  searchTerm: string;
}) => {
  const { type, searchTerm } = query;
  try {
    const URL = `http://gateway.marvel.com/v1/public/${type}?${
      type === "comics" ? "title" : "name"
    }StartsWith=${searchTerm}&ts=1&apikey=${publish_key}&hash=${hashed_key}`;
    const res = await fetch(URL);
    let data = await res.json();
    return data.data.results;
  } catch (error) {
    console.log("Error:", error);
  }
};
