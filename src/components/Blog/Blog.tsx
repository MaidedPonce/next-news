import React from 'react'
import Cover from './Cover'
import { PostInterface } from 'app/services/blog/types'
import PostList from './Posts/PostList'
import PopularPost from './PopularPosts'

interface BlogProps {
  results: PostInterface[] | undefined
  popular: PostInterface[] | undefined
}

const Blog = ({ results, popular }: BlogProps) => {
  return (
    <>
      <Cover />
      <section className='my-4 mx-4 flex flex-col lg:flex-row gap-9 max-w-[1536px] m-auto'>
        <div>
          <h1 className='text-brand text-2xl text-center lg:text-start font-bold mb-8 mt-8'>
            Noticias recientes
          </h1>
          <div className='flex gap-4 justify-center lg:justify-between w-full '>
            {results && <PostList posts={results} />}
            {/*  <aside>Noticia</aside> */}
          </div>
        </div>

        {results && <PopularPost popular={popular} />}
      </section>
    </>
  )
}

export default Blog
