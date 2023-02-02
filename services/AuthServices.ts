import axios from '../api/axios'
import { AxiosError } from 'axios'

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

  try {
    const result = await axios.post(url, data)
    return result.data
  } catch (error: any) {
    if (error.response) {
      console.log('aasassda', error.response.data)
      return error.response.data.internal.response.body.message.status
    }
    // else {
    //   console.log('dflkmkjgndmn', error.statusCode)
    // }
  }
}
