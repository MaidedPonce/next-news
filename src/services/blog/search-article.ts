import { apiClient } from 'app/config/axios'
import { SearchResult } from './types'

interface SearchArticleProps {
  content?: string
}

async function searchArticle({
  content = '',
}: SearchArticleProps): Promise<SearchResult[] | undefined> {
  try {
    const response = await apiClient.get(`/wp/v2/search?search=${content}`)
    return response.data
  } catch (error) {
    console.log(error)
  }

  return undefined
}

export { searchArticle }
