import axios from '../api/axios'

export const login = async (email: string, password: string) => {
  const data = { email, password }
  const url = 'api/rest/login'
  const result = await axios.post(url, data)

  return result.data
}

export const register = async (
  email: string,
  password: string,
  name: string
) => {
  const url = 'api/rest/register'
  const data = { email, password, name }
  const result = await axios.post(url, data)
  return result.data
}
