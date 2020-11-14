import React, { Component } from 'react'
import Link from 'nextein/link'

import Github from './icons/github'
import Npm from './icons/npm'
import Twitter from './icons/twitter'

export default class Navigation extends Component {
  render () {
    const { githubUrl, npmName } = this.props
    const npmUrl = `https://www.npmjs.com/package/${npmName}`
    return (
      <nav>
        <Link href='/'>
          <a>YOUR PRODUCT ICON</a>
        </Link>
        <Link href={githubUrl}>
          <a target='_blank' rel='noopener noreferrer'>
            <Github width='25' alt='Github' />
          </a>
        </Link>
        <Link href={npmUrl}>
          <a target='_blank' rel='noopener noreferrer'>
            <Npm width='35' style={{ marginTop: '5px' }} alt='npm' />
          </a>
        </Link>
        <Link href='https://twitter.com/geutstudio'>
          <a target='_blank' rel='noopener noreferrer'>
            <Twitter width='19' alt='Twitter' />
          </a>
        </Link>
        <style jsx>{`
          nav {
            display: flex;
            flex-direction: row;
            align-items: center;
            min-height: 4em;
            margin-bottom: calc(var(--spacing) * 2);
            font-family: var(--font-family-heading);
          }

          nav > a {
            padding: 0 calc(var(--spacing) * 2);
            font-size: 0.885em;
          }

          nav > a,
          nav > a:visited {
            color: var(--grey500);
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;
          }

          nav > a:hover {
            color: var(--grey600);
          }

          nav > a :global(svg) {
            fill: var(--grey500);
          }

          nav > a :global(svg:hover) {
            fill: var(--grey600);
          }
        `}</style>
      </nav>
    )
  }
}
