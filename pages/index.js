import React from 'react'
import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'

import withAnalytics from '../components/analytics'

const Index = withPosts(({ posts }) => {
  return (
    <main>
    {
      posts.map((post, index) => (        
        <article key={`post-${index}`}>
          <h1><a href={post.data.url}>{post.data.title}</a></h1>
        </article>
      ))
    }
    </main>
  )
})

export default withAnalytics(Index)