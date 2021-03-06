import request from './utils';
import { getMe } from './member';
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

  if(!email) return dispatch({type: 'USER_SIGNUP_ERROR', data: 'Le champ Email doit être rempli.'});
  if(!password) return dispatch({type: 'USER_SIGNUP_ERROR', data: 'Le champ Mots de passe doit être rempli.'});
  if(!password2) return dispatch({type: 'USER_SIGNUP_ERROR', data: 'Le champ Répéter mots de passe doit être rempli.'});
  if(!userName) return dispatch({type: 'USER_SIGNUP_ERROR', data: 'Le champ Pseudo doit être rempli.'});
  if(password !== password2) return dispatch({type: 'USER_SIGNUP_ERROR', data: 'Les mots de passe ne sont pas identiques.'});

  return request(`${BASE_URI}/users`, {
    method: 'post',
    body: JSON.stringify(auth),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then((response) => {
    dispatch({ type: 'USER_SIGN_UP_SUCCESS' });
  }).catch((resp) => dispatch({type: 'USER_SIGNUP_ERROR', data: 'Une erreur est intervenue.'}));
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

  request(`${BASE_URI}/login_check`, {
    method: 'post',
    body,
  }).then((response) => {
    getMe(response.data.token, dispatch);
    setTimeout(function() { dispatch({ type: 'USER_RESET_TOKEN' }) }, 3570000);
  }).catch((err) => dispatch({type: 'USER_ERROR', data: 'Mauvais identifiants.'}));
}