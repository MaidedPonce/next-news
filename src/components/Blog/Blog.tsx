import React from 'react'
import { PostInterface } from 'app/services/blog/types'
import PostList from './Posts/PostList'
import PopularPost from './PopularPosts'
import { Suspense, lazy } from 'react'

const Cover = lazy(() => import('./Cover'))

interface BlogProps {
  results: PostInterface[] | undefined
  popular: PostInterface[] | undefined
}

const Blog = ({ results, popular }: BlogProps) => {
  return (
    <>
      <Suspense
        fallback={
          <div className='md:min-h-[50vh] bg-white relative justify-center flex-col flex items-start gap-6 p-8 lg:min-h-[70vh] bg-main bg-cover bg-center min-h-44 h-auto sm:min-h-56 w-auto m-4 rounded-md'></div>
        }
      >
        <Cover />
      </Suspense>
      <section className='w-auto bg-white rounded-md shadow-md m-auto z-0 relative mx-4 mb-4'>
        <div className='my-4 max-w-[1536px] px-8 justify-center min-[1400px]:justify-between min-[1400px]:m-auto mx-4 relative flex flex-col lg:flex-row gap-9'>
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
        </div>
      </section>
    </>
  )
}

export default Blog
