import React from 'react'
import withPosts, { inCategory } from 'nextein/posts'
import { Content } from 'nextein/post'

import { Heading, Link, Flex, Box, Banner } from 'rebass'

import asPage from '../components/page.js'

const Index = withPosts(({ posts }) => {
  const blogPosts = posts.filter(inCategory('blog'))
  const projects = posts.filter(inCategory('projects'))
  return (
    <main>
      <Banner
        color='white'
        bg='gray8'
        className='page-header'
        backgroundImage='https://images.unsplash.com/photo-1493033487340-9a9f3c4cedfd?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop='>
        <Heading>
          Bridging The Gap Between Applications and Relevance
        </Heading>
      </Banner>
      <Flex mt={2}>
        <Box w={[1, 1/2]} p={1}>
          <Heading>
            <Link href="/projects">Projects</Link>
          </Heading>
          {
            projects.map((post, index) => (
              <article key={`post-${index}`}>
                <h3><a href={post.data.url}>{post.data.title}</a></h3>
              </article>
            ))
          }
        </Box>
        <Box w={[1, 1/2]} p={1}>
          <Heading>
            <Link href="/blog">Blog Posts</Link>
          </Heading>
          {
            blogPosts.map((post, index) => (
              <article key={`post-${index}`}>
                <h3><a href={post.data.url}>{post.data.title}</a></h3>
              </article>
            ))
          }
        </Box>
      </Flex>
      <style jsx>{`
        .page-header {
          height: 400px;
        }
      `}</style>
    </main>
  )
})

export default asPage(Index)