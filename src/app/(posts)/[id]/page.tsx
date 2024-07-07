import Post from 'app/components/Blog/Posts/Post'
import { getPostById } from 'app/services/blog/get-by-id'
import { PostInterface } from 'app/services/blog/types'

interface PostProps {
  params: {
    id: string
  }
}

const PostPage = async ({ params: { id } }: PostProps) => {
  const post: PostInterface | undefined = await getPostById(id)
  return <Post post={post} />
}

export default PostPage
