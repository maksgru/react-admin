import axios from "."

export const getUserRequest = (id) => {
  return axios.get(`/api/users/${id}`);
}