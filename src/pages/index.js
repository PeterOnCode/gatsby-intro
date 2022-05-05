import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const Index = () => (
  <Layout>
    <h1>Home</h1>
    <p>Hello Budapest!</p>
    <Link to="/about/">Learn about Me</Link>
  </Layout>
)
export default Index
