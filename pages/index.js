import React, { Component } from 'react'
import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'
import Link from 'nextein/link'

import { Heading1, Anchor } from 'elems';
import renderers from 'elems/renderers'


import { name, authors } from '../site'
import Layout from '../components/layout'

class Index extends Component {

  render() {
    const { posts } = this.props
    return (
      <Layout title={name}>
        <header>
          <Heading1>{name}</Heading1>
        </header>
        <section>
          {posts.map(post => {
            const author = authors[post.data.author]
            const source = authors[post.data.source]
            return (
              <article key={post.data.url}>
                <header>
                  <h1>
                    <Link {...post} passHref><Anchor>{post.data.title}</Anchor></Link>
                  </h1>
                  <p>
                    {author && `Written by ${author.name}`}
                    {author && source && ` ${String.fromCharCode(183)} `}
                    {source && `From ${source.name}`}
                  </p>
                </header>
                <Content {...post} excerpt renderers={renderers}/>
              </article>
            )
          })}
        </section>
        <style jsx>{`
          header {
            margin-top: calc(var(--spacing) * 4);
            margin-bottom: calc(var(--spacing) * 8);
          }

          section {
            margin: calc(var(--spacing) * 5) 0;
          }
          
          article {
            margin-bottom: calc(var(--spacing) * 5);
          }

          article header {
            margin-top: calc(var(--spacing) * 2);
            margin-bottom: calc(var(--spacing) * 1);
          }

          article header h1 {
            font-family: var(--font-family-heading);
            font-size: 1.5rem;
            margin: 0;
          }

          article header h1 :global(a) {
            text-decoration: none;
          }
          
          article header p {
            line-height: calc(24/12);
            font-size: .75rem; // 12px;
            color: var(--grey600);
            margin: 0;
          }
        `}</style>
      </Layout>
    )
  }
}

export default withPosts(Index)
