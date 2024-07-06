import React from 'react'

export async function generateStaticParams() {
  const posts = await fetch('')
}

const Post = async ({ params }) => {
  console.log(params)
  return <div>Post</div>
}

export default Post
