import { apiClient } from 'app/config/axios'
import { PostInterface } from './types'

async function getPostById(id: string): Promise<PostInterface | undefined> {
  try {
    const response = await apiClient.get(`/wp/v2/posts/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export { getPostById }
