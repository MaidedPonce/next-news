import React from 'react'
import { PostInterface } from 'app/services/blog/types'
import Link from 'next/link'

interface PopularPostProps {
  popular: PostInterface[] | undefined
}

const PopularPost = ({ popular }: PopularPostProps) => {
  return (
    <aside className='flex-1 max-w-[512px] m-auto lg:m-0 lg:max-w-fit'>
      <h1 className='text-brand text-2xl font-bold mb-8 mt-8'>
        Noticias relevantes
      </h1>
      <div className='flex gap-4 justify-between w-full'>
        {popular && (
          <ul className='flex flex-col gap-6 text-brand-secondary'>
            {popular.map((post: PostInterface, index: number) => (
              <div
                className='flex gap-2 items-center'
                key={post.title.rendered}
                id='badge'
              >
                <div className='rounded-full p-4 h-4 w-4 flex items-center justify-center bg-transparent border-brand-secondary border-solid border text-brand-secondary'>
                  {index}
                </div>
                <h1 className='font-bold hover:cursor-pointer'>
                  <Link
                    href={`/${post.id}`}
                    className='hover:text-brand'
                  >
                    {' '}
                    {post.title.rendered}
                  </Link>
                </h1>
              </div>
            ))}
          </ul>
        )}
        {/*  <aside>Noticia</aside> */}
      </div>
    </aside>
  )
}

export default PopularPost
