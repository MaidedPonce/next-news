import { apiClient } from 'app/config/axios'
import { PostInterface } from './types'

interface GetPostsProps {
  page?: number
}

async function getPosts({
  page = 1,
}: GetPostsProps): Promise<PostInterface[] | undefined> {
  try {
    const response = await apiClient.get(`/wp/v2/posts?page=${page}`)
    return response.data
  } catch (error) {
    console.log(error)
  }

  return undefined
}

export { getPosts }
