import React from 'react'
import { getStaticProps } from '../users'

const PostList = () => {
  return (
    <>
        <h1>List of Posts</h1>
        {post.map(post => {
            <div key={post.id}>
            <h2>
                {post.id}{post.title}
            </h2>
            <hr/>
            </div>
        })}
    </>
  )
}

export default PostList

export async function getStaticProps () {
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    props: {
        post: data.slice(0,3)
    }
}