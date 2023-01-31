import axios from '../api/axios'

export const getCategories = async () => {
  const url = 'api/rest/categories'
  const result = await axios.get(url)

  return result.data
}

export const getProductsByCategoryId = async (id: number) => {
  const url = `api/rest/products/${id}`
  const result = await axios.get(url)

  return result.data
}

export const getCoverImageByFileName = async (fileName: string) => {
  const url = 'api/rest/cover_image'
  const data = { fileName }
  const result = await axios.post(url, data)

  return result.data
}

export const insertLikeProduct = async (user: object, productId: number) => {
  const url = 'api/rest/like'
  const data = { user, productId }
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        `Bearer ` +
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsibW9iaWxlX3VzZXIiLCJhZG1pbl91c2VyIiwidXNlciJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtdXNlci1pZCI6IjIifSwiaWF0IjoxNjczMzQ2MjgzLCJleHAiOjE2NzU5MzgyODN9.PpUyscxIHM3OguyoQj7AlVAIFM1KOiB8SEpSG0mMIxM'
    }
  }

  const result = await axios.post(url, data, headers)

  return result.data
}

export const removeLikeProduct = async (user: object, productId: number) => {
  const url = 'api/rest/unlike'
  const data = { user, productId }
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        `Bearer ` +
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsibW9iaWxlX3VzZXIiLCJhZG1pbl91c2VyIiwidXNlciJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtdXNlci1pZCI6IjIifSwiaWF0IjoxNjczMzQ2MjgzLCJleHAiOjE2NzU5MzgyODN9.PpUyscxIHM3OguyoQj7AlVAIFM1KOiB8SEpSG0mMIxM'
    }
  }

  const result = await axios.post(url, data, headers)

  return result.data
}
