import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/react'
import ReadLink from './read-link'

const PostPreview = ({ post }) => {
  return (
    <article
      css={css`
        border-bottom: 1px solid #ddd;
        margin-top: 0.75rem;
        padding-bottom: 1rem;

        :first-of-type {
          margin-top: 1rem;
        }
      `}
    >
      <h3>
        <Link to={post.title}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
    </article>
  )
}

export default PostPreview
