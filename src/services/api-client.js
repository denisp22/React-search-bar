import axios from 'axios'

const http = axios.create({
  baseURL: "https://tweet-hack-api.herokuapp.com",
  withCredentials: true
})

export const search = (text) => {
  console.log(`Search ${text}...`)
}

export const createUser = ({ name, email, password, avatar, username }) => {
  const formData = new FormData()

  formData.append('username', username)
  formData.append('name', name)
  formData.append('avatar', avatar)
  formData.append('password', password)
  formData.append('email', email)

  return http.post('/users', formData)
}
