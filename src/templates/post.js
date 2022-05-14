import React from 'react'
import Layout from '../components/layout'
import ReadLink from '../components/read-link'
import { css } from '@emotion/react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export const query = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`

const PostTemplate = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <p
        css={css`
          font-site: 0.75rem;
        `}
      >
        Posted by {post.frontmatter.author}
      </p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <p>Post body goes here</p>
      <ReadLink to="/">&larr; back to all posts</ReadLink>
    </Layout>
  )
}

export default PostTemplate
