import React from 'react'
import Cover from './Cover'
import { PostInterface } from 'app/services/blog/types'
import PostList from './Posts/PostList'

interface BlogProps {
  results: PostInterface[] | undefined
}

const Blog = ({ results }: BlogProps) => {
  return (
    <>
      <Cover />
      <section className='my-4 mx-auto max-w-7xl	'>
        <h1 className='text-brand text-4xl font-bold mb-8 mt-8'>
          Noticias recientes
        </h1>
        <div className='flex gap-4 justify-between w-full'>
          {results && <PostList posts={results} />}
          {/*  <aside>Noticia</aside> */}
        </div>
      </section>
    </>
  )
}

export default Blog
