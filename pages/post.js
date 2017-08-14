import React from  'react'
import withPost, { Content } from 'nextein/post'

import { Banner, Heading } from 'rebass'

import asPage from '../components/page.js';

const Post = withPost(({ post, url }) => {
  return (
    <main>
      <Banner
        color="white"
        bg='gray8'
        backgroundImage={post.data.bannerImage}>
        <Heading>{post.data.title}</Heading>
      </Banner>
      <article>
        <h1>{post.data.title}</h1>
        <Content {...post} />
      </article>
    </main>
  )
})

export default asPage(Post)