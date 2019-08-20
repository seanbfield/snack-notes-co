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
export const allIdeas = async () => {
  const resp = await api.get(`/ideas`)
  return resp
}


// POST   /users/:user_id/ideas
export const newIdea = async () => {
  const resp = await api.post(`/ideas`, { idea: '' })
  return resp.data
}


// UPDATE IDEA
// PUT / users /: user_id / ideas /: id(.: format)ideas#update
export const updateIdea = async (id, data) => {
  const resp = await api.put(`/ideas/${id}`, { idea: data })
  return resp.data
}



// DELETE IDEA
//DELETE / users /: user_id / ideas /: id(.: format)ideas#destroy
export const trashIdea = async (id) => {
  const resp = await api.delete(`/ideas/${id}`)
  return resp.data;
}

