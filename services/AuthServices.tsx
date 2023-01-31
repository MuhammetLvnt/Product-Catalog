import axios from '../api/axios'

export const login = async (email: string, password: string) => {
  const data = { email, password }
  const url = 'api/rest/login'
  const result = await axios.post(url, data)

  return result.data
}
