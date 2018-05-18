import request from './utils';

const BASE_URI = 'http://www.pokeshine.remi-mavillaz.fr/index.php/api/v1'

/**
  * Add a current hunt
  */
export function updateCurrentHunt(token, pokemonId, dispatch) {

  return request(`${BASE_URI}/users/hunt`, {
    method: 'PATCH',
    body: JSON.stringify({ currentHunt: pokemonId }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    dispatch({ type: 'LOAD_USER_DETAILS_CONNECTED_SUCCESS', data: response.data, token });
  });
}

/**
  * Add a current hunt
  */
export function updateCurrentTries(token, nbrTries, dispatch) {
  
  return request(`${BASE_URI}/users/tries`, {
    method: 'PATCH',
    body: JSON.stringify({ currentTries: nbrTries + 1 }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    dispatch({ type: 'LOAD_USER_DETAILS_CONNECTED_SUCCESS', data: response.data, token });
  });
}