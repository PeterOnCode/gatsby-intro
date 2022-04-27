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

### 2.4 - Code Repo Branches (09:28 - )



### 2.5 - Adding CSS with Emotion ()
### 2.6 - Styling the Main Layout ()
### 2.7 - Creating & Styling the Header ()
### 2.8 - Gatsby & GraphQL ()
### 2.9 - Rendering Site Metadata ()

[gatsbyjs.com-quickstart]: https://www.gatsbyjs.com/docs/quick-start/ "Quick Start"
[github-course-errata]: https://github.com/FrontendMasters/gatsby-intro#course-errata
[slides]: https://jlengstorf.github.io/presentations/workshop-gatsby-mdx-blog/#/
