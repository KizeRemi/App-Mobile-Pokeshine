import request from './utils';

const BASE_URI = 'http://www.pokeshine.remi-mavillaz.fr/index.php/api/v1'

function getPokemonCollectionRequestUrl(offset, gen) {
  let requestURL = `${BASE_URI}/users/2/shinies?`
    + `generation=${gen}`
    + `&limit=151`
    + `&offset=${offset}`;

  return requestURL;
}

/**
  * Get all pokemon
  */
export function getShinyCollection(token, offset = 0, gen, dispatch) {
  dispatch({ type: 'LOAD_POKEMON_COLLECTION' });
  const requestURL = getPokemonCollectionRequestUrl(offset, gen);

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