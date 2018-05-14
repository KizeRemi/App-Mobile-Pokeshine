import request from './utils';

const BASE_URI = 'http://www.pokeshine.remi-mavillaz.fr/index.php/api/v1'

/**
  * Load top users for shinies hunting
  */
export function loadUsersTop(dispatch) {
  dispatch({ type: 'LOAD_USERS_TOP' });

  return request(`${BASE_URI}/users/top`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    dispatch({ type: 'LOAD_USERS_TOP_SUCCESS', data: response.data });
  });
}