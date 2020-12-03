import React from 'react'
import withPost, { Content } from 'nextein/post'

import { Heading1 } from 'elems'
import renderers from 'elems/renderers'

import GEUTNavigation from '../components/geutnavigation'
import Meta from '../components/meta'
import { name, npm, github } from '../site.json'
import Footer from '../components/footer'
import GEUTFooter from '../components/geutfooter'

export default withPost(({ post }) => {
  const headTitle = `${name} | Usage | ${post.data.title}`

  return (
    <>
      <Meta title={headTitle} />
      <div className='container'>
        <header className='noMargin'>
          <GEUTNavigation />
        </header>
        <div className='main rows'>
          <article>
            <header>
              <div className='category'>Usage </div>
              <Heading1>{post.data.title}</Heading1>
            </header>

            <section className='innerContent'>
              <Content {...post} renderers={renderers} />
            </section>
            <Footer github={github} npm={npm} />
            <GEUTFooter gutter className='geutFooter' />
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
            color: var(--main-color);
            margin-bottom: calc(var(--spacing) * -4);
          }

          header :global(h1) {
            font-family: var(--font-family-geut);
            font-weight: 200;
            color: var(--secondary-color);
          }

          .noMargin {
            margin-top: 0;
            margin-bottom: 0;
          }

          .container {
            --main-contrast-color: var(--grey500);
            background-color: var(--grey100);
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
            color: var(--grey700);
          }

          .innerContent :global(p) {
            color: var(--grey600);
          }
        `}</style>
      </div>
    </>
  )
})
