import React, { Component } from 'react'
import withPosts from 'nextein/posts'

import { name, url, description, npmName, npm, github } from '../site.json'
import Meta from '../components/meta'
import GEUTNavigation from '../components/geutnavigation'
import Hero from '../components/hero'
import Intro from '../components/intro'
// import Contributors from "../components/contributors";
import Sponsors from '../components/sponsors'
import Footer from '../components/footer'
import GEUTFooter from '../components/geutfooter'

class Index extends Component {
  render () {
    return (
      <>
        <Meta title={name} url={url} description={description} />
        <div className='container'>
          <header>
            <GEUTNavigation />
            <Hero
              title={name}
              description={description}
              npm={npm}
              npmName={npmName}
              github={github}
            />
          </header>
          <Intro snippets={[]} />

          <Sponsors />
          <Footer gutter github={github} npm={npm} />
          <GEUTFooter gutter />
          <style jsx>{`
            .container {
              --main-contrast-color: var(--geut-main-color);
              background-color: var(--grey100);
            }
          `}</style>
        </div>
      </>
    )
  }
}

export default withPosts(Index)
