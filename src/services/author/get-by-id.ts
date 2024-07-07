import { apiClient } from 'app/config/axios'
import { AuthorProps } from './types'

async function getAuthorById(id: string): Promise<AuthorProps | undefined> {
  try {
    const response = await apiClient.get(`/wp/v2/users/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export { getAuthorById }
