import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export const getJams = () => api.get('/jams');
export const addNewJam = payload => api.post('/jams', payload);
export const getJamWithID = id => api.get(`/jams/${id}`);
export const updateJam = (id, payload) => api.put(`/jams/${id}`, payload)
export const deleteJam = id => api.delete(`/jams/${id}`)

const apis = {
  getJams,
  addNewJam,
  getJamWithID,
  updateJam,
  deleteJam
}

export default apis;