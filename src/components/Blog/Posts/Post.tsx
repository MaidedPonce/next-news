import React from 'react'

const Post = ({ post }) => {
  const {
    date,
    modified,
    title: { rendered },
    content: { rendered },
  } = post
  return <div>Post</div>
}

export default Post
