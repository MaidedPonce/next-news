'use client'

import { PostInterface } from 'app/services/blog/types'
import { useEffect, useState } from 'react'
import PostPreview from './PostPreview'
import Pagination from '../Pagination'
import { useQuery } from '@tanstack/react-query'
import { getPosts } from 'app/services/blog/get-all'

const PostList = ({ posts }: { posts: PostInterface[] }) => {
  const [results, setResults] = useState([...posts])
  const [page, setPage] = useState(1)

  const { isFetching, data } = useQuery({
    queryKey: ['page', page],
    queryFn: async () => {
      const res = await getPosts({ page })
      return res
    },
    enabled: page > 1,
    staleTime: 1000 * 60 * 5,
  })
  const nextPage = () => {
    //if (data?.length === 0) return
    setPage((prev) => prev + 1)
  }
  const prevPage = () => {
    if (page > 1) setPage((prev) => prev - 1)
  }
  useEffect(() => {
    if (data) {
      setResults(data)
    } else if (!isFetching) {
      setResults(posts)
    }
  }, [data])

  return (
    <section className='flex flex-col'>
      {results && (
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lx:grid-cols-4 gap-8'>
          {results.map((post: PostInterface, index) => (
            <PostPreview
              key={post.id}
              index={index}
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
