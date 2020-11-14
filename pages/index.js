import React, { Component } from 'react'
import withPosts from 'nextein/posts'

import {
  name,
  url,
  description,
  npm_name as npmName,
  github_url as githubUrl
} from '../site.json'
import Meta from '../components/meta'
import Navigation from '../components/navigation'
import Hero from '../components/hero'
import Intro from '../components/intro'
// import Contributors from "../components/contributors";
import Sponsors from '../components/sponsors'
import Footer from '../components/footer'

class Index extends Component {
  render () {
    return (
      <>
        <Meta title={name} url={url} description={description} />
        <div className='container'>
          <header>
            <Navigation githubUrl={githubUrl} npmName={npmName} />
            <Hero
              title={name}
              description={description}
              npmName={npmName}
              githubUrl={githubUrl}
            />
          </header>
          <Intro snippets={[]} />

          <Sponsors />
          <Footer gutter githubUrl={githubUrl} npmName={npmName} />
          <style jsx>{`
            .container {
              --main-contrast-color: var(--geut-main-color);
              background: radial-gradient(
                ellipse at 50% 0%,
                var(--geut-blue),
                var(--geut-purple)
              );
            }
          `}</style>
        </div>
      </>
    )
  }
}

export default withPosts(Index)
