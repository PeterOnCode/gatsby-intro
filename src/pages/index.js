import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import usePosts from '../hooks/use-posts'

const Index = () => {
  const posts = usePosts()
  return (
    <Layout>
      <h1>Home</h1>
      <p>Hello Budapest!</p>
      <Link to="/about/">Learn about Me &rarr;></Link>

      <h2>Read my blog</h2>
      {posts.map((post) => (
        <pre>{JSON.stringify(post, null, 2)}</pre>
      ))}
    </Layout>
  )
}
export default Index
