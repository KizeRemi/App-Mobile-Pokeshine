import request from './utils';

const BASE_URI = 'http://www.pokeshine.remi-mavillaz.fr/index.php/api/v1'

function getPokemonCollectionRequestUrl(offset) {
  let requestURL = `${BASE_URI}/pokemons?`
    + `&limit=40`
    + `&offset=${offset}`;

  return requestURL;
}

/**
  * Get all pokemon
  */
export function getPokemonCollection(token, offset = 0, dispatch) {
  dispatch({ type: 'LOAD_POKEMON_COLLECTION' });

  const requestURL = getPokemonCollectionRequestUrl(offset);
  
  return request(requestURL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    dispatch({ type: 'LOAD_POKEMON_COLLECTION_SUCCESS', data: response.data });
  });
}