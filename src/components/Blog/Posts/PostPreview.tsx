import { PostInterface } from 'app/services/blog/types'
import Image from 'next/image'
import React from 'react'

interface PreviewProps {
  post: PostInterface
}

const PostPreview = ({ post }: PreviewProps) => {
  const content = post?.excerpt.rendered.substring(0, 100)
  return (
    <li className='flex flex-col gap-4 w-60'>
      <figure className='h-40 relative overflow-hidden w-60 bg-gray-500 rounded-md flex justify-end items-end'>
        <Image
          src={post?.jetpack_featured_media_url}
          alt='Imagen de la noticia'
          fill
        />
        <button className='m-4 text-sm rounded-full bg-white p-[0.30rem] z-10'>
          Ver más...
        </button>
      </figure>
      <div>
        <h1 className='font-bold text-xl'>{post?.title.rendered}</h1>
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
