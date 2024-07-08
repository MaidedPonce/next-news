import { apiClient } from 'app/config/axios'
import { PostInterface } from './types'

async function getPopularPost(): Promise<PostInterface[] | undefined> {
  try {
    const response = await apiClient.get(`/wp/v2/posts?page=${10}`)
    return response.data
  } catch (error) {
    console.log(error)
  }

  return []
}

export { getPopularPost }
