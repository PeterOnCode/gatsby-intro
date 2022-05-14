import * as React from 'react'
import Layout from '../components/layout'
import usePosts from '../hooks/use-posts'
import PostPreview from '../components/post-preview'
import Hero from '../components/hero'

const Index = () => {
  const posts = usePosts()
  return (
    <>
      <Hero />
      <Layout>
        <h2>Read my blog</h2>
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  )
}
export default Index
