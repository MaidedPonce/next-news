import { PostInterface } from 'app/services/blog/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface PreviewProps {
  post: PostInterface
  index: number
}

const PostPreview = ({ post, index }: PreviewProps) => {
  const content = post?.excerpt.rendered.substring(0, 100)

  return (
    <li className='flex flex-col gap-4 w-60'>
      <figure className='h-40 relative overflow-hidden w-60 bg-gray-500 rounded-md flex justify-end items-end'>
        <Image
          src={post?.jetpack_featured_media_url}
          alt='Imagen de la noticia'
          fill
          className='aspect-square'
          loading={index === 0 ? 'eager' : 'lazy'}
          sizes='(max-width: 640px) 100vw, 50vw'
        />
        <button className='m-4 text-sm/5 rounded-full bg-white px-3 py-2 z-10'>
          <Link
            href={`/${post.id}`}
            className='hover:underline hover:decoration-solid'
          >
            Ver más...
          </Link>
        </button>
      </figure>
      <div
        id='text-preview'
        className='hover:cursor-pointer'
      >
        <h1 className='font-bold text-xl hover:text-brand'>
          {post?.title.rendered}
        </h1>
        <div
          dangerouslySetInnerHTML={{
            __html: content.trimEnd() + '...',
          }}
        />
      </div>
    </li>
  )
}

export default PostPreview
