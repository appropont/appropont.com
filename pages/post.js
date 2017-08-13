import React from  'react'
import withPost, { Content } from 'nextein/post'

import withAnalytics from '../components/analytics'

const Post = withPost(({ post }) => {
  return (
    <main>
      <article>
        <h1>{post.data.title}</h1>
        <Content {...post} />
      </article>
    </main>
  )
})

export default withAnalytics(Post)