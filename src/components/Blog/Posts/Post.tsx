import { getAuthorById } from 'app/services/author/get-by-id'
import { AuthorProps } from 'app/services/author/types'
import { PostInterface } from 'app/services/blog/types'
import { parseISO } from 'date-fns'
import Image from 'next/image'
import { format } from 'date-fns'
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
  console.log(author)
  return author
}

const getFormattedDate = (date: string) => {
  const parse = parseISO(date)
  const formattedDate = format(parse, 'MMM d, yyyy')
  return formattedDate
}

const Post = async ({ post }: PostProps) => {
  const authorInfo = post !== undefined && (await getAuthor(post))
  console.log(post?.date, post?.modified)
  return (
    <>
      {post !== undefined ? (
        <section className='max-w-5xl p-8'>
          <h1 className='text-xl font-bold my-6'>{post.title.rendered}</h1>
          {authorInfo && (
            <div className='flex gap-5 h-auto'>
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
                  <span>{getFormattedDate(post.date)}</span>&nbsp;
                  <span>
                    Última modificación {getFormattedDate(post.modified)}
                  </span>
                </div>
              </div>
            </div>
          )}
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </section>
      ) : (
        <div>
          <h1>Post not found</h1>
        </div>
      )}
    </>
  )
}

export default Post
