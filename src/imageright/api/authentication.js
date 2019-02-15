/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export function authenticate(baseURL, UserName, Password) {
  const config = { baseURL };
  return axios
    .post('api/authenticate', { UserName, Password }, config)
    .then((res) => ({ AccessToken: res.data }));
}
