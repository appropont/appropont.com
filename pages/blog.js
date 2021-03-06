import React from 'react'
import withPosts, { inCategory } from 'nextein/posts'
import { Content } from 'nextein/post'

import asPage from '../components/page.js';

const Blog = withPosts(({ posts }) => {
  const blog = posts.filter(inCategory('blog'))

  return (
    <main>
    {
      blog.map((post, index) => (        
        <article key={`post-${index}`}>
          <h1>1<a href={post.data.url}>{post.data.title}</a></h1>
        </article>
      ))
    }
    </main>
  )
})

export default asPage(Blog)