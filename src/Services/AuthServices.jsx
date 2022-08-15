import axios from 'axios';
export function signUp(email, password) {
  const postData = {
    username: email,
    password,
    returnSecureToken: true,
  };
  return axios.post(`/api/signin`, postData);
}
