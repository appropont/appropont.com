import React from 'react'
import withPosts, { inCategory } from 'nextein/posts'
import { Content } from 'nextein/post'

import withAnalytics from '../components/analytics'

const Projects = withPosts(({ posts }) => {
  const projects = posts.filter(inCategory('projects'))
  console.log('this.props', this.props)
  return (
    <main>
    {
      projects.map((post, index) => (        
        <article key={`post-${index}`}>
          <h1><a href={post.data.url}>{post.data.title}</a></h1>
        </article>
      ))
    }
    </main>
  )
})

export default withAnalytics(Projects)