import { getAuthorById } from 'app/services/author/get-by-id'
import { AuthorProps } from 'app/services/author/types'
import { PostInterface } from 'app/services/blog/types'
import { getFormattedDate } from 'app/utils/formated-date'
import Image from 'next/image'
import React from 'react'

interface PostProps {
  post: PostInterface | undefined
}

const getAuthor = async (
  article: PostInterface
): Promise<AuthorProps | undefined> => {
  const segments = article._links.author[0].href.split('/')
  const id = segments && segments[segments.length - 1]
  const author = await getAuthorById(id)
  return author
}

const divideContent = (content: string) => {
  const paragraphs = content.split('</p>')
  const midIndex = Math.floor(paragraphs.length / 2)
  const firstHalf = paragraphs.slice(0, midIndex).join('</p>')
  const secondHalf = paragraphs.slice(midIndex).join('</p>')
  return { firstHalf, secondHalf }
}

const Post = async ({ post }: PostProps) => {
  const authorInfo = post !== undefined && (await getAuthor(post))

  return (
    <>
      <div className='bg-custom-gradient h-40 w-full' />
      {post !== undefined ? (
        <section className='max-w-5xl p-8 m-auto'>
          <h1 className='text-3xl md:text-5xl text-pretty font-bold text-center my-6'>
            {post.title.rendered}
          </h1>
          {authorInfo && (
            <>
              <div className='flex gap-5 h-auto font-medium w-full justify-center'>
                <Image
                  src={authorInfo.avatar_urls['24']}
                  alt={authorInfo.name}
                  width={48}
                  height={48}
                  className='rounded-full h-fit'
                />
                <div className='flex flex-col justify-between items-start'>
                  <span>{authorInfo?.name}</span>
                  <div className='flex flex-row'>
                    <span>
                      Última modificación {getFormattedDate(post.modified)}
                    </span>
                  </div>
                </div>
              </div>
              <div className='border-b border-solid border-gray-300 my-8 w-full h-1' />
            </>
          )}
          <article
            id='post-content'
            className='my-10 text-pretty text-base leading-8'
            dangerouslySetInnerHTML={{
              __html: divideContent(post.content.rendered).firstHalf,
            }}
          />
          <figure className='relative w-full h-36 md:h-96'>
            <Image
              src={post.jetpack_featured_media_url}
              alt={post.title.rendered}
              fill
              className='object-contain'
              sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1024px'
            />
          </figure>
          <article
            id='post-content'
            className='my-10 text-pretty text-base leading-8'
            dangerouslySetInnerHTML={{
              __html: divideContent(post.content.rendered).secondHalf,
            }}
          />
        </section>
      ) : (
        <section className='min-h-screen'>
          <h1>Post not found</h1>
        </section>
      )}
    </>
  )
}

export default Post
