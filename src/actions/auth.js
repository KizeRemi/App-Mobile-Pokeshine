import request from './utils';

const BASE_URI = 'http://www.pokeshine.remi-mavillaz.fr/index.php/api/v1'

/**
  * Sign Up to Pokeshine
  */
export function signUp(formData, dispatch) {
  const {
    email,
    password,
    password2,
    userName,
  } = formData;

  const auth = {
    username: userName,
    email,
    plainPassword: {
      first: password,
      second: password2,
    }
  };

  dispatch({ type: 'USER_SIGN_UP' });

  if(!email) return dispatch({type: 'USER_ERROR', data: 'Le champ Email doit être rempli.'});
  if(!password) return dispatch({type: 'USER_ERROR', data: 'Le champ Mots de passe doit être rempli.'});
  if(!password2) return dispatch({type: 'USER_ERROR', data: 'Le champ Répéter mots de passe doit être rempli.'});
  if(!userName) return dispatch({type: 'USER_ERROR', data: 'Le champ Pseudo doit être rempli.'});
  if(password !== password2) return dispatch({type: 'USER_ERROR', data: 'Les mots de passe ne sont pas identiques.'});

  return request(`${BASE_URI}/users`, {
    method: 'post',
    body: JSON.stringify(auth),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then((response) => {
    dispatch({ type: 'USER_SIGN_UP_SUCCESS' });
  });
}

/**
  * Login to Pokeshine
  */
export function login(formData, dispatch) {
  const {
    username,
    password,
  } = formData;
  const body = new FormData();
  body.append('username', username);
  body.append('password', password);

  dispatch({ type: 'USER_LOGIN' });

  if(!password) return dispatch({type: 'USER_ERROR', data: 'Le champ Mots de passe doit être rempli.'});
  if(!username) return dispatch({type: 'USER_ERROR', data: 'Le champ Pseudo doit être rempli.'});

  return request(`${BASE_URI}/login_check`, {
    method: 'post',
    body,
  }).then((response) => {
    dispatch({ type: 'USER_LOGIN_SUCCESS', data: response.data });
  });
}