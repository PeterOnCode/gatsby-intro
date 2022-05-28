<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter
</h1>

## 🚀 Quick start

1. **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2. **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3. **Open the code and start customizing!**

    Your site is now running at <http://localhost:8000>!

    Edit `src/pages/index.js` to see your site update in real-time!

4. **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal)

---

## My Notes

---

### References

- [Gatsby QuickStart][gatsbyjs.com-quickstart]
- [GitHub Gatsby Intro][github-course-errata]
- [Course Slides][slides]
- [Gatsby The Starter Library][gatsbyjs.com-starter-library]

## Lesson 2 - Website Setup

### 2.1 - Blog Setup ( - 03:52)

```shell
npm i
npm run develop
```

### 2.2 - Creating a New Page (03:53 - 05:37)

```shell
touch src/pages/about.js
```

> <a id="code-02-01">_**Listing 2.1** `src/pages/about.js`_</a>

```jsx
export default () => (
  <>
    <h1>About Me</h1>
    <p>This is my personal website.</p>
  </>
);
```

### 2.3 - Gatsby Link (05:38 - 09:23)

> <a id="code-02-02">_**Listing 2.2** `src/pages/about.js`_</a>

```jsx
import React from 'react'
import { Link } from 'gatsby'

const About = () => (
  <>
    <h1>About Me</h1>
    <p>This is my personal website.</p>
    <Link to="/">&larr; back to home</Link>
  </>
)

export default About
```

> <a id="code-02-03">_**Listing 2.3** `src/pages/index.js`_</a>

```jsx
import * as React from 'react'
import { Link } from 'gatsby'

const Index = () => (
  <>
    <h1>Home</h1>
    <p>Hello Budapest!</p>
    <Link to="/about/">Learn about Me</Link>
  </>
)
export default Index

```

### 2.4 - Code Repo Branches (09:28 - 10:15)

- [Branch: github.com/FrontendMasters/gatsby-intro/tree/step0/pages-and-links][github-gatsby-intro-branch-step0-pages-and-links]

```shell
git checkout step0/pages-and-links
```
### 2.5 - Adding CSS with Emotion (10:16 - 15:14)

- [@emotion/react][npmjs-emotion-react]
- [Emotion, a library designed for writing css styles with JavaScript. ][emotion]
- [Gatsby plugin emotion][github-gatsby-plugin-emotion]


```shell
npm i @emotion/react @emotion/styled gatsby-plugin-emotion
```

- [Gatsby Config API][gatsbyjs.com-config-api]

```shell
touch gatsby-config.js
```
> <a id="code-02-04">_**Listing 2.4** `src/gatsby-config.js`_</a>

```js
module.exports = {
  siteMetadata: {
    title: `Gatsby Intro`
  },
  plugins: ['gatsby-plugin-emotion'],
}
```

```shell
touch src/components/layout.js
```

> <a id="code-02-05">_**Listing 2.5** `src/components/layout.js`_</a>

```jsx
import React from 'react'
import { Global, css } from '@emotion/core'

const Layout = ({ children }) => (
  <>
    <Global styles={css``} />
  </>
)

```

### 2.6 - Styling the Main Layout (15:15 - 25:58)

> <a id="code-02-06">_**Listing 2.6** `src/components/layout.js`_</a>

```jsx
import React from 'react'
import { Global, css } from '@emotion/react'

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 10px;
        }

        * + * {
          margin-top: 1rem;
        }

        html,
        body {
          margin: 0;
          color: #555;
          font-family: -apple-system, 'Droid Sans Mono Slashed', serif;
          font-size: 18px;
          line-height: 1.4;
        }

        /* remove margin for the main div that Gatsby noubts into */
        > div {
          margin-top: 0;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: #222;
          line-height: 1.1;

          + * {
            margin-top: 0-5rem;
          }
        }

        strong {
          color: #222;
        }

        li {
          margin-top: 0.25rem;
        }
      `}
    />

    <header></header>
    <main css={css``}>{children}</main>
  </>
)

export default Layout

```

> <a id="code-02-07">_**Listing 2.7** `src/pages/about.js`_</a>

```jsx
// .-.-.-
import Layout from '../components/layout'

const About = () => (
        <Layout>
           <h1>About Me</h1>
           <p>This is my personal website.</p>
           <Link to="/">&larr; back to home</Link>
        </Layout>
)
// .-.-.-
```

> <a id="code-02-08">_**Listing 2.8** `src/pages/index.js`_</a>

```jsx
// .-.-.-
import Layout from '../components/layout'

const Index = () => (
        <Layout>
           <h1>Home</h1>
           <p>Hello Budapest!</p>
           <Link to="/about/">Learn about Me</Link>
        </Layout>
)
// .-.-.-
```

### 2.7 - Creating & Styling the Header (25:59 - 38:15)

> <a id="code-02-09">_**Listing 2.9** `src/components/header.js`_</a>

```jsx
import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'gatsby'

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
`
const Header = () => (
        <header
                css={css`
      background: #eee;
      border-bottom: 1px solid #ddd;
      display: flex;
    `}
        >
           <NavLink to="/">FEM Workshop</NavLink>
           <nav
                   css={css`
        margin-top: 0;
      `}
           >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about/">About</NavLink>
           </nav>
           {/* site name */}
           {/* navigation */}
        </header>
)

export default Header

```

> <a id="code-02-10">_**Listing 2.10** `src/components/layout.js`_</a>

```jsx
// .-.-.-
const Layout = ({ children }) => (
        <>
           <Global
                   styles={css`
        * {
          box-sizing: border-box;
          margin: 10px;
        }

        * + * {
          margin-top: 1rem;
        }

        html,
        body {
          margin: 0;
          color: #555;
          font-family: -apple-system, 'Droid Sans Mono Slashed', serif;
          font-size: 18px;
          line-height: 1.4;
        }

        /* remove margin for the main div that Gatsby noubts into */
        > div {
          margin-top: 0;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: #222;
          line-height: 1.1;

          + * {
            margin-top: 0-5rem;
          }
        }

        strong {
          color: #222;
        }

        li {
          margin-top: 0.25rem;
        }
      `}
           />

           <Header />
           <main
                   css={css`
        margin: 2rem auto 4rem;
        max-width: 90vw;
        width: 550px;
      `}
           >
              {children}
           </main>
        </>
)
// .-.-.-
```


> <a id="code-02-11">_**Listing 2.11** `src/components/layout.js`_</a>

```jsx
// .-.-.-
<header
        css={css`
      background: #eee;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem calc((100vw - 550px) / 2);
    `}
>
// .-.-.-
```

> <a id="code-02-12">_**Listing 2.12** `src/components/header.js`_</a>

```jsx
// .-.-.-
const NavLink = styled(Link)`
// .-.-.-

  &.current-page {
    border-bottom: 2px solid #222;
  }
`
// .-.-.-
<NavLink to="/" activeClassName="current-page">Home</NavLink>
<NavLink to="/about/" activeClassName="current-page">About</NavLink>
// .-.-.-
```

> <a id="code-02-13">_**Listing 2.13** `src/components/header.js`_</a>

```jsx
// .-.-.-
const NavLink = styled(Link)`
// .-.-.-
  font-weight: ${(props) => props.fontWeight || 'normal'};
// .-.-.-
`
// .-.-.-
<NavLink to="/" fontWeight="bold">
        FEM Workshop
</NavLink>

// .-.-.-
```
### 2.8 - Gatsby & GraphQL (38:23 - 42:58)

> <a id="code-02-14">_**Listing 2.14** `src/gatsby-config.js`_</a>

```js
module.exports = {
   siteMetadata: {
      title: `Frontend Masters Gatsby Workshop Intro`,
      description: 'A site we built together doing a full-day Frontend MAsters Gatsby workshop!',
   },
   plugins: ['gatsby-plugin-emotion'],
}
```

> <a id="code-02-15">_**Listing 2.15** <http://localhost:8001/__graphql> _</a>

```graphql
query siteMetadata {
  site {
    siteMetadata {
      title
      description
    }
  }
}
```

### 2.9 - Rendering Site Metadata (42:58 - 51:10)

- [GitHub - gatsby-plugin-react-helmet][github-gatsby-plugin-react-helmet]
- [GitHub - react-helmet][github-react-helmet]

```shell
npm i gatsby-plugin-react-helmet react-helmet
```

> <a id="code-02-16">_**Listing 2.16** `src/gatsby-config.js`_</a>

```js
//.-.-.-
  plugins: ['gatsby-plugin-emotion', 'gatsby-plugin-react-helmet'],
//.-.-.-
```

> <a id="code-02-17">_**Listing 2.17** `src/components/layout.js`_</a>

```jsx
//.-.-.-
import Header from './header'
//.-.-.-
<Helmet>
  <html lang="en" />
  <title>Hello FEM!</title>
  <meta name="description" content="sites description" />
</Helmet>
//.-.-.-

```

> <a id="code-02-18">_**Listing 2.18** `src/hooks/use-sitemetadata.js`_</a>

```js
import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata

```
> <a id="code-02-19">_**Listing 2.19** `src/components/layout.js`_</a>

```jsx
// .-.-.-
import useSitemetadata from '../hooks/use-sitemetadata'
// .-.-.-
const Layout = ({ children }) => {
   const { title, description } = useSitemetadata()
   return (
           <>
// .-.-.-
              <Helmet>
                 <html lang="en" />
                 <title>{title}</title>
                 <meta name="description" content={description} />
              </Helmet>                 
// .-.-.-              
          </>
   ) 
}
// .-.-.-
```
## Lesson 3 - MDX and Lesson 4 - MDX Blog
### 3.1 - Rendering Components in MDX (00:00 - 11:22)

- [gatsby-source-filesystem][github-gatsby-source-filesystem]
- [gatsby-plugin-mdx][github-gatsby-plugin-mdx]
- @mdx-js/mdx 
- @mdx-js/react

```shell
npm install gatsby-source-filesystem gatsby-plugin-mdx @mdx-js/mdx@v1 @mdx-js/react@v1
```

> <a id="code-03-01">_**Listing 3.01** `src/gatsby-config.js`_</a>

```js
module.exports = {
   //.-.-.-
   plugins: [
      'gatsby-plugin-emotion',
      'gatsby-plugin-react-helmet',
      {
         resolve: `gatsby-plugin-mdx`,
         options: {
            defaultLayouts: {
               default: require.resolve('./src/components/layout.js'),
            },
         },
      }
   ],
   //.-.-.-
}
```

> <a id="code-03-02">_**Listing 3.02** `src/pages/contact.mdx`_</a>

```mdx
# Contact Me

You can get in touch with me by opening the nearest window and yelling out of i real loud.
```

- <localhost:8000/contact>

> <a id="code-03-03">_**Listing 3.03** `src/compnents/wave.js`_</a>

```jsx
import React, { useState } from 'react'
import { css } from '@emotion/react'

const Wave = () => {
  const [waves, setWaves] = useState(0)
  const label = ` 👋 ${waves} ${waves === 1 ? 'wave' : 'waves'}`

  return (
    <button
      css={css`
        background: rebeccapurple;
        border: none;
        color: white;
        font-size: 1.25rem;
      `}
      onClick={() => setWaves(waves + 1)}
    >
      {label}
    </button>
  )
}

export default Wave
```

> <a id="code-03-04">_**Listing 3.04** `src/pages/contact.mdx`_</a>

```mdx
import Wave from '../components/wave'

# Contact Me

You can get in touch with me by opening the nearest window and yelling out of it real loud.

## Or you can wave to me

Just click this button to simulate a friendly wave.

<Wave />

Please note that I may not wave back. This is because I am very far way and probably didn't see you click this button.

<div style={{background: 'red'}}>

  ## This is important!
  
</div>
```

### 3.2 - Building a Blog with MDX (11:25 - 15:39)

```shell
mkdir posts/00-hello-world
touch posts/00-hello-world/hello-world.mdx
```

> <a id="code-03-05">_**Listing 3.05** `posts/00-hello-world/hello-world.mdx`_</a>

```mdx
---
title: Hello World!
slug: hello-world
author: Peter Csontos
---

This is my first blog post. I wrote it with MDX!
```

> <a id="code-03-06">_**Listing 3.06** `posts/01-another-post/another-post.mdx`_</a>

```mdx
---
title: Another Post
slug: another-post
author: Peter Csontos
---

This is my first blog post. I wrote it with MDX!
```

```shell
npm i gatsby-source-filesystem
```

> <a id="code-03-07">_**Listing 3.07** `gatsby-config.js`_</a>

```js
module.exports = {
//.-.-.-
  plugins: [
    // .-.-.-
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts',
      },
    },
  ],
}
```

### 3.3 - Rendering a Post Listing (15:40 - 23:48)

```shell
touch hooks/use-posts.js
```

> <a id="code-03-08">_**Listing 3.08** `hooks/use-posts.js`_</a>

```js
import { graphql, useStaticQuery } from 'gatsby'

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            author
          }
          excerpt
        }
      }
    }
  `)

  return data.allMdx.nodes.map((post) => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    excerpt: post.excerpt,
  }))
}

export default usePosts

```

> <a id="code-03-09">_**Listing 3.09** `pages/index.js`_</a>

```js
// .-.-.-
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
```

### 3.4 - Modifying Post Listing Display (23:50 - 29:39)

```shell
touch components/post-preview.js
```

> <a id="code-03-10">_**Listing 3.10** `components/post-preview.js`_</a>

```js
import React from 'react'
import { Link } from 'gatsby'

const PostPreview = ({ post }) => {
   return (
           <article>
              <h3>
                 <Link to={post.title}>{post.title}</Link>
              </h3>
              <p>{post.excerpt}</p>
              <Link to={post.slug}>read this post &rarr;</Link>
           </article>
   )
}

export default PostPreview
```

> <a id="code-03-11">_**Listing 3.11** `components/post-preview.js`_</a>

```js
// .-.-.-
import PostPreview from '../components/post-preview'

const Index = () => {
  // .-.-.-
  return (
    <Layout>
      // .-.-.-
      <h2>Read my blog</h2>
      {posts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}
// .-.-.-
```
> <a id="code-03-12">_**Listing 3.12** `components/post-preview.js`_</a>

```js
// .-.-.-
import {css} from '@emotion/react'

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
      // .-.-.-
  )
}
// .-.-.-
```

```shell
touch components/read-link.js
```

> <a id="code-03-13">_**Listing 3.13** `components/read-link.js`_</a>

```js
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const ReadLink = styled(Link)`
  display: inline-block;
  font-size: 0.875rem;
`

export default ReadLink
```

> <a id="code-03-14">_**Listing 3.14** `components/post-preview.js`_</a>

```js
// .-.-.-
import ReadLink from './read-link'

const PostPreview = ({ post }) => {
   return (
           // .-.-.-
              <p>{post.excerpt}</p>
              <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
           // .-.-.-
   )
}
// .-.-.-
```

### 3.5 - Generating Post Pages (29:44 - 39:09)

- <https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/>

```shell
touch gatsby-node.js
```

> <a id="code-03-15">_**Listing 3.15** `gatsby-node.js`_</a>

```js
exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('failed to sreate posts', result.errors)
  }

  const posts = result.data.allMdx.nodes

  posts.forEach((post) => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: `/${post.frontmatter.slug}`,
      },
    })
  })
}

```

```shell
mkdir templates
touch templates/post.js
```

> <a id="code-03-16">_**Listing 3.16** `templates/post.js`_</a>

```js
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

```

### 3.6 - Getting Post Data by Slug (39:11 - 47:48)

> <a id="code-03-17">_**Listing 3.17** `templates/post.js`_</a>

```js
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

```

> <a id="code-03-18">_**Listing 3.18** `gatsby-node.js`_</a>

```js
exports.createPages = async ({ actions, graphql, reporter }) => {
  // .-.-.-

  posts.forEach((post) => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })
}
```

## 3.7 - Getting Post Q&A (47:54 - 50:42)

...


## Lesson 5 - Working with Images

### 5.1. - Adding a Hero Image Box (00:00 - 12:08)

```shell
touch components/hero.js
```

> <a id="code-05-01">_**Listing 5.01** `components/hero.js`_</a>

```jsx
import React from 'react'
import { Link } from 'gatsby'

const Hero = () => {
  return (
    <div>
      <h1>Frontend Masters + Gatsby &hearts;</h1>
      <p>
        Hello Minnesota <Link to="/about/">Learn about me &rarr;</Link>
      </p>
    </div>
  )
}

export default Hero
```

> <a id="code-05-02">_**Listing 5.02** `pages/index.js`_</a>

```jsx
// .-.-.-
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
// .-.-.-
```

```shell
mkdir /static/images
```

> <a id="code-05-03">_**Listing 5.02** `components/hero.js`_</a>

```jsx
// .-.-.-
import styled from '@emotion/styled'

const ImageBackground = styled('div')`
  background-image: url('/images/budapest-unsplash.jpg');
  background-position: top 50% center;
  background-size: cover;
  height: 50vh;
`

const TextBox = styled('div')`
  background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`

const Hero = () => {
   return (
           <ImageBackground>
              <TextBox>
                 <h1>Frontend Masters + Gatsby &hearts;</h1>
                 <p>
                    Hello Minnesota <Link to="/about/">Learn about me &rarr;</Link>
                 </p>
              </TextBox>
           </ImageBackground>
   )
}
// .-.-.-
```

### 5.2. - Optimizing Images with Sharp (12:13 - 19:06)

- [gatsby-transformer-sharp](https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp/)
- [gatsby-plugin-sharp](https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp)
- [gatsby-background-image](https://www.gatsbyjs.com/plugins/gatsby-background-image/)

```shell
npm install gatsby-transformer-sharp gatsby-plugin-sharp gatsby-background-image
```

> <a id="code-05-04">_**Listing 5.04** `gatsby-config.js`_</a>

```jsx
module.exports = {
  // .-.-.-
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // .-.--.
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      },
    },
  ],
}

```

```shell
mkdir images
```

```graphql
query {
  allFile(filter: {sourceInstanceName: {eq: "images"}}) {
    nodes {
      relativePath
      childrenImageSharp {
        original {
          height
          src
          width
        }
        fluid(traceSVG: {}) {
          src
          srcSet
        }
      }
    }
  }
}
```

### 5.3. - Using Optimized Sharp Images (19:06 - 25:12)

> <a id="code-05-05">_**Listing 5.05** `components/hero.js`_</a>

```jsx
// .-.-.-
import BackgroundImage from 'gatsby-background-image'

const ImageBackground = styled(BackgroundImage)`
  background-position: top 50% center;
  background-size: cover;
  height: 50vh;
`

// .-.-.-

const Hero = () => {
   const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "budapest-unsplash.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
   return (
           <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
              <TextBox>
                 <h1>Frontend Masters + Gatsby &hearts;</h1>
                 <p>
                    Hello Minnesota <Link to="/about/">Learn about me &rarr;</Link>
                 </p>
              </TextBox>
           </ImageBackground>
   )
}

// .-.-.-
```

### 5.4. - Adding Images to MDX Posts (25:15 - 30:55)

> <a id="code-05-06">_**Listing 5.06** `posts/00-hello-world/hello-world.mdx`_</a>


```text
---
title: Hello World!
slug: hello-world
author: Peter Csontos
image: ./images/clay-banks--unsplash.jpg
---

This is my first blog post. I wrote it with MDX!
```

> <a id="code-05-07">_**Listing 5.07** `posts/01-another-post/another-post.mdx`_</a>

```text
---
title: Another Post
slug: another-post
author: Peter Csontos
image: ./images/vladislav-klapin--unsplash.jpg
---

This is my next blog post. I'm on a roll!
```


```graphql
{
  allMdx {
    nodes {
      frontmatter {
        image {
          name
          childImageSharp {
            fluid {
              srcSet
            }
          }
        }
      }
    }
  }
}

```

```shell
npm i gatsby-image
```

> <a id="code-05-08">_**Listing 5.08** `src/components/post-preview.js`_</a>

```js
//.-.-.-
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
      // .-.-.-
    </article>
  )
}
// .-.-.-

```

### 5.5. - Styling Post Images (30:59 - 36:24)

> <a id="code-05-09">_**Listing 5.09** `src/hooks/use-posts.js`_</a>

```js
// .-.-.-

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            author
            image {
              sharp: childImageSharp {
                fluid(
                  maxWidth: 100
                  maxHeight: 100
                  duotone: { highlight: "#ddbbff", shadow: "#663399" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `)

  return data.allMdx.nodes.map((post) => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    image: post.frontmatter.image,
    excerpt: post.excerpt,
  }))
}
//.-.-.-
```

> <a id="code-05-10">_**Listing 5.10** `src/components/post-preview.js`_</a>

```js
// .-.-.-

const PostPreview = ({ post }) => {
  return (
    <article
      css={css`
        border-bottom: 1px solid #ddd;
        display: flex;
        margin-top: 0;
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
          width: 100px;
        `}
      >
        <Image
          fluid={post.image.sharp.fluid}
          css={css`
            * {
              margin-top: 0;
            }
          `}
          alt={post.title}
        />
      </Link>
      <div>
        <h3>
          <Link to={post.slug}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
      </div>
    </article>
  )
}

// .-.-.-

```

[gatsbyjs.com-quickstart]: https://www.gatsbyjs.com/docs/quick-start/ "Quick Start"
[github-course-errata]: https://github.com/FrontendMasters/gatsby-intro#course-errata
[slides]: https://jlengstorf.github.io/presentations/workshop-gatsby-mdx-blog/#/
[gatsbyjs.com-starter-library]: https://www.gatsbyjs.com/docs/how-to/local-development/starters/
[gatsbyjs.com-config-api]:https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
[github-gatsby-intro-branch-step0-pages-and-links]: https://github.com/FrontendMasters/gatsby-intro/tree/step0/pages-and-links
[github-gatsby-plugin-emotion]: https://www.npmjs.com/package/gatsby-plugin-emotion
[npmjs-emotion-react]: https://www.npmjs.com/package/@emotion/react
[emotion]: https://emotion.sh/docs/introduction
[github-gatsby-plugin-react-helmet]: https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-react-helmet#readme
[github-react-helmet]: https://github.com/nfl/react-helmet#readme
[github-gatsby-plugin-mdx]: https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-mdx#readme
[github-gatsby-source-filesystem]: https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-filesystem#readme