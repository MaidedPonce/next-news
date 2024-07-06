import { getPosts } from 'app/services/blog/get-all'
import Blog from 'components/Blog/Blog'

async function Home() {
  const results = await getPosts({})
  return (
    <main>
      <Blog results={results} />
    </main>
  )
}
export default Home
