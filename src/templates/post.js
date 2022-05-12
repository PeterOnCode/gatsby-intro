import React from 'react'
import Layout from '../components/layout'
import ReadLink from '../components/read-link'
import { css } from '@emotion/react'

const PostTemplate = () => {
  return (
    <Layout>
      <h1>post title</h1>
      <p
        css={css`
          font-site: 0.75rem;
        `}
      >
        Posted by (author)
      </p>
      <p>Post body goes here</p>
      <ReadLink to="/">&larr; back to all posts</ReadLink>
    </Layout>
  )
}

export default PostTemplate
