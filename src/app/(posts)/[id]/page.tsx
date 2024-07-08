import Post from 'app/components/Blog/Posts/Post'
import { getPostById } from 'app/services/blog/get-by-id'
import { PostInterface } from 'app/services/blog/types'
import { Metadata } from 'next'

interface PostProps {
  params: {
    id: string
  }
}

const getPostByIdFn = async (id: string) => {
  const post: PostInterface | undefined = await getPostById(id)
  return post
}

export async function generateMetadata({
  params: { id },
}: PostProps): Promise<Metadata> {
  const post = await getPostByIdFn(id)
  return {
    title: post?.title?.rendered,
    description: post?.excerpt?.toString() ?? '',
  }
}

const PostPage = async ({ params: { id } }: PostProps) => {
  const post = await getPostByIdFn(id)
  return <Post post={post} />
}

export default PostPage
