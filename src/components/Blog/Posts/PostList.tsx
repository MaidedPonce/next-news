'use client'

import { PostInterface } from 'app/services/blog/types'
import { useState } from 'react'
import PostPreview from './PostPreview'
import Pagination from '../Pagination'
import { useQuery } from '@tanstack/react-query'
import { getPosts } from 'app/services/blog/get-all'

const PostList = ({ posts }: { posts: PostInterface[] }) => {
  const [results, setResults] = useState([...posts])
  const [page, setPage] = useState(1)

  const { isFetching, data } = useQuery({
    queryKey: ['page', page],
    queryFn: () => {
      if (page > 1) {
        getPosts({ page }).then((res) => {
          setResults([...(res || [])])
        })
      }
      return Promise.resolve([])
    },
    staleTime: 1000 * 60 * 5,
  })
  console.log(isFetching)
  const nextPage = () => {
    if (data?.length === 0) return
    setPage((prev) => prev + 1)
  }
  const prevPage = () => {
    if (page > 1) setPage((prev) => prev - 1)
  }
  return (
    <section className='flex flex-col'>
      {results && (
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lx:grid-cols-4 gap-8'>
          {results.map((post: PostInterface) => (
            <PostPreview
              key={post.id}
              post={post}
            />
          ))}
        </ul>
      )}
      <Pagination
        nextPage={nextPage}
        prevPage={prevPage}
        page={page}
      />
    </section>
  )
}

export default PostList
