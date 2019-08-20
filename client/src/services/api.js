import axios from 'axios';

const baseUrl = 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
})


//  ========================== //
//              Auth           //
//  ========================== //


export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  return resp.data
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/users/verify');
    return resp.data
  }
  return false;
}


//  ========================== //
//             Users           //
//  ========================== //

export const createUser = async (data) => {
  const resp = await api.post('/users', { user: data })
  return resp.data
}

export const getAllUsers = async () => {
  const resp = await api.get('/users')
  return resp.data
}

export const updateUsers = async (id, data) => {
  const resp = await api.put(`/users/${id}`, { user: data })
  return resp.data
}

export const destroyUsers = async (id) => {
  const resp = await api.delete(`/users/${id}`)
  return resp.data
}



//  ========================== //
//             Ideas           //
//  ========================== //

//GET    /users/:user_id/ideas
export const allIdeas = async (id) => {
  const response = await api.get(`/users/${id}/ideas`)
  return response.data
}


// POST   /users/:user_id/ideas
export const newIdea = async (id, data) => {
  const response = await api.get(`/users/${id}/ideas`, { idea: data })
  return response.data
}

