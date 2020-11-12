import React from 'react'
import withPost, { Content } from 'nextein/post'

import { Heading1, Paragraph } from 'elems'
import renderers  from 'elems/renderers'

import { name, authors } from '../site';
import Layout from '../components/layout'

export default withPost(({ post }) => {
  const author = authors[post.data.author]
  const source = authors[post.data.source]
  return (
    <Layout title={`${name} - ${post.data.title}`} showNav>
      <header>
        <Heading1>{post.data.title}</Heading1>
        <Paragraph>
          {author && `Written by ${author.name}`}
          {author && source && ` ${String.fromCharCode(183)} `}
          {source && `From ${source.name}`}
        </Paragraph>
      </header>
      <section>
        <Content {...post} renderers={renderers}/>
      </section>
      <style jsx>{`
        header {
          margin: calc(var(--spacing) * 8) 0;
        }

      `}</style>
    </Layout>
  )
})

