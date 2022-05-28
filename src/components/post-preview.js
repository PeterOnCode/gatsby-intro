import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/react'
import ReadLink from './read-link'
import Image from 'gatsby-image'

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
      <Link
        to={post.slug}
        css={css`
          margin: 1rem 1rem 0 0;
          width: 100%;
        `}
      >
        <Image
          css={css`
            * {
              margin-top: 0;
            }
          `}
          alt={post.title}
        />
      </Link>
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
    </article>
  )
}

export default PostPreview
