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

### 2.7 - Creating & Styling the Header (25:59 - )



### 2.8 - Gatsby & GraphQL ()
### 2.9 - Rendering Site Metadata ()

[gatsbyjs.com-quickstart]: https://www.gatsbyjs.com/docs/quick-start/ "Quick Start"
[github-course-errata]: https://github.com/FrontendMasters/gatsby-intro#course-errata
[slides]: https://jlengstorf.github.io/presentations/workshop-gatsby-mdx-blog/#/
[gatsbyjs.com-starter-library]: https://www.gatsbyjs.com/docs/how-to/local-development/starters/ ""
[gatsbyjs.com-config-api]:https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
[github-gatsby-intro-branch-step0-pages-and-links]: https://github.com/FrontendMasters/gatsby-intro/tree/step0/pages-and-links
[github-gatsby-plugin-emotion]: https://www.npmjs.com/package/gatsby-plugin-emotion
[npmjs-emotion-react]: https://www.npmjs.com/package/@emotion/react
[emotion]: https://emotion.sh/docs/introduction
