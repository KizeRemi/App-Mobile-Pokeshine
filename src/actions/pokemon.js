import request from './utils';
import { Platform } from 'react-native';

const BASE_URI = 'http://www.pokeshine.remi-mavillaz.fr/index.php/api/v1'

function getPokemonCollectionRequestUrl(idUser, offset, gen) {
  //get id from user
  let requestURL = `${BASE_URI}/users/${idUser}/shinies?`
    + `generation=${gen}`
    + `&limit=151`
    + `&offset=${offset}`;

  return requestURL;
}

/**
  * Get all pokemon
  */
export function getShinyCollection(token, idUser, offset = 0, gen, dispatch) {
  dispatch({ type: 'LOAD_POKEMON_COLLECTION' });
  const requestURL = getPokemonCollectionRequestUrl(idUser, offset, gen);

  return request(requestURL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    dispatch({ type: 'LOAD_POKEMON_COLLECTION_SUCCESS', data: response.data, gen });
  });
}


/**
  * Add a new shiny
  */
export function newShiny(token, pokemon, formData, dispatch) {
  const {
    description,
    catchDate,
    tries,
    image
  } = formData;
  const youtube = formData.youtube && `www.youtube.com/watch?v=${formData.youtube}`;
  const base = Platform.OS === 'android' ? image.replace(/\n|\r/g, "") : image;

  const shiny = { pokemon, youtube, description, catchDate, tries, image: 'data:image/jpeg;base64,' + base };

  dispatch({ type: 'NEW_SHINY' });

  return request(`${BASE_URI}/shinies`, {
    method: 'POST',
    body: JSON.stringify(shiny),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    dispatch({ type: 'NEW_SHINY_SUCCESS', data: response.data });
  });
}

/**
  * Load a user shiny
  */
export function loadShiny(id, pokemon, dispatch) {
  dispatch({ type: 'LOAD_SHINY' });

  return request(`${BASE_URI}/users/${id}/pokemons/${pokemon}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    dispatch({ type: 'LOAD_SHINY_SUCCESS', data: response.data });
  });
}

/**
  * Load a pokemon
  */
export function loadPokemon(token, pokemonId, dispatch) {
  dispatch({ type: 'LOAD_POKEMON' });

  return request(`${BASE_URI}/pokemon/${pokemonId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    dispatch({ type: 'LOAD_POKEMON_SUCCESS', data: response.data });
  });
}
