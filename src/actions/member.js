import request from './utils';
import { Platform } from 'react-native';
const BASE_URI = 'http://www.pokeshine.remi-mavillaz.fr/index.php/api/v1'

/**
  * Get User
  */
export function getMe(token, dispatch) {
  return request(`${BASE_URI}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    dispatch({ type: 'LOAD_USER_DETAILS_CONNECTED_SUCCESS', data: response.data, token });
  });
}

/**
  * Update Profile
  */
export function updateProfile(token, formData, dispatch) {
  const {
    age,
    region,
    friendCode,
  } = formData;

  dispatch({ type: 'UPDATE_USER' });

  if (!age) return reject({ message: ErrorMessages.missingFirstName });
  if (!friendCode) return reject({ message: ErrorMessages.missingLastName });

  return request(`${BASE_URI}/users`, {
    method: 'PATCH',
    body: JSON.stringify(formData),
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
  * Update Profile
  */
export function updateAvatar(token, base64, dispatch) {
  const base = Platform.OS === 'android' ? base64.replace(/\n|\r/g, "") : base64;

  return request(`${BASE_URI}/users/avatar`, {
    method: 'PATCH',
    body: JSON.stringify({ avatar: 'data:image/jpeg;base64,'+base }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    dispatch({ type: 'LOAD_USER_DETAILS_CONNECTED_SUCCESS', data: response.data, token });
  });
}
