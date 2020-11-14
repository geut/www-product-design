import React, { Component, Fragment } from 'react'
import withPosts from 'nextein/posts'

import { name, url, description, npm_name, github_url } from '../site.json'
import Meta from '../components/meta'
import Navigation from '../components/navigation'
import Hero from '../components/hero'
import Intro from '../components/intro'
//import Contributors from "../components/contributors";
import Sponsors from '../components/sponsors'
import Footer from '../components/footer'

class Index extends Component {
  render () {
    const { posts } = this.props

    //const snippets = posts.filter(inCategory("snippets"));

    return (
      <Fragment>
        <Meta title={name} url={url} description={description} />
        <div className='container'>
          <header>
            <Navigation github_url={github_url} npm_name={npm_name} />
            <Hero
              title={name}
              description={description}
              npm_name={npm_name}
              repo_url={github_url}
            />
          </header>
          <Intro snippets={[]} />

          <Sponsors />
          <Footer gutter />
          <style jsx>{`
            .container {
              --main-color: var(--geut-main-color);
              --main-contrast-color: var(--grey100);
              background: radial-gradient(
                ellipse at 50% 0%,
                var(--geut-blue),
                var(--geut-purple)
              );
            }
          `}</style>
        </div>
      </Fragment>
    )
  }
}

export default withPosts(Index)
