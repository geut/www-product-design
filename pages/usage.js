import React, { Fragment } from 'react'
import withPost, { Content } from 'nextein/post'

import { Heading1, Paragraph, Blockquote } from 'elems'
import renderers from 'elems/renderers'

import Navigation from '../components/navigation'
import Meta from '../components/meta'
import {
  name,
  url,
  authors,
  description,
  npm_name,
  github_url
} from '../site.json'
import Footer from '../components/footer'

export default withPost(({ post }) => {
  const headTitle = `${name} | Examples | ${post.data.title}`
  const fullUrl = `${url}${post.data.url}`

  const author = authors[post.data.author]
  const source = authors[post.data.source]

  return (
    <Fragment>
      <Meta title={post.data.title} />
      <div className='container'>
        <header className='noMargin'>
          <Navigation github_url={github_url} npm_name={npm_name} />
        </header>
        <div className='main rows'>
          <article>
            <header>
              <div className='category'>
                Usage{' '}
              </div>
              <Heading1>{post.data.title}</Heading1>
            </header>

            <section className='innerContent'>
              <Content {...post} renderers={renderers} />
            </section>
            <Footer />
          </article>
        </div>
        <style jsx>{`
          article {
            flex: 1;
            width: 1px; /* width to get the Article to not expand */
            padding: 0 calc(var(--spacing) * 4);
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: stretch;
          }
          article header {
            display: flex;
            flex-direction: column;
            flex-grow: 0;
            flex-shrink: 1;
            flex-basis: auto;
            justify-content: space-between;
            align-items: baseline;
            margin: calc(var(--spacing) * 10) 0;
          }
          
          article header .category {
            display: flex;
            font-family: var(--font-family-heading);
            font-size: 2em;
            text-transform: uppercase;
            color: var(--grey600);
            margin-bottom: calc(var(--spacing) * -4);
          }
          
          header :global(h1) {
            font-family: var(--font-family-geut);
            color: var(--geut-blue);
          }

          .noMargin {
            margin-top: 0;
            margin-bottom: 0;
          }

          .container {
            --main-color: var(--grey50);
            --main-contrast-color: var(--geut-main-color);
            background: radial-gradient(
              ellipse at 50% 0%,
              var(--geut-purple),
              var(--geut-purple-dark)
            );
          }

          .container > * {
            margin: 0 auto;
            max-width: 72em;
          }

          .columns {
            display: flex;
            flex-direction: column;
          }

          .rows {
            display: flex;
            flex-direction: row;
          }

          

          .innerContent :global(h2) {
            color: var(--grey200);
          }

          .innerContent :global(p) {
            color: var(--grey100);
          }
        `}</style>
      </div>
    </Fragment>
  )
})
