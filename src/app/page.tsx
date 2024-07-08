import { getPosts } from 'app/services/blog/get-all'
import { getPopularPost } from 'app/services/blog/popular-posts'
import Blog from 'components/Blog/Blog'

async function Home() {
  const results = await getPosts({})
  const popular = await getPopularPost()
  return (
    <main>
      <Blog
        results={results}
        popular={popular}
      />
    </main>
  )
}
export default Home
