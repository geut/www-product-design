import React, { Component } from 'react'
import Link from 'nextein/link'
import { Paragraph } from 'elems'

import Github from './icons/github'
import Npm from './icons/npm'
import { Button } from './button'
import Window from './windows/window'

export default class Header extends Component {
  render () {
    const { title, npmName, description, github, npm } = this.props

    const cmd = `npm install ${npmName}`

    return (
      <div className='container rows'>
        <div className='title row'>
          <h1>{title}</h1>
          <Paragraph>{description}</Paragraph>

          <div className='actions rows'>
            <Link href='/usage'>
              <Button variant='highlight'>
                <a>
                  <b>Usage</b>
                </a>
              </Button>
            </Link>
            <Link href={github}>
              <Button raised>
                <a>
                  <b>Code</b>
                </a>
              </Button>
            </Link>
          </div>

          <div className='productIcons rows'>
            <Link href={github}>
              <a target='_blank' rel='noopener noreferrer'>
                <Github width='24' alt='GitHub' />
              </a>
            </Link>
            <Link href={npm}>
              <a target='_blank' rel='noopener noreferrer'>
                <Npm width='40' style={{ marginTop: '5px' }} alt='npm' />
              </a>
            </Link>
          </div>
        </div>
        <div className='terminal row'>
          <Window type='zsh' cmd={cmd} />
        </div>
        <style jsx>{`
          .container {
            padding-top: calc(var(--spacing) * 18);
            min-height: 90vh;
          }

          .row {
            flex: 1;
          }

          .title {
            display: flex;
            flex-direction: column;
            align-items: self-start;
            justify-content: center;
            padding: 0 calc(var(--spacing) * 8);
          }

          .title-compact {
            margin-top: calc(var(--spacing));
            line-height: 1.1;
          }

          h1:first-child {
            font-weight: 200;
            color: var(--secondary-color);
            letter-spacing: -0.031em;
            margin: 0;
          }

          h1 {
            font-family: var(--font-family-geut);
            font-weight: 600;
            font-size: 6em;
            color: var(--grey500);
            margin: 0;
            margin-top: calc(var(--spacing) * -3);
          }

          h1 span {
            border-bottom: calc(var(--spacing) * 0.5) solid var(--grey100);
            padding-bottom: calc(var(--spacing) * 4);
          }

          .title :global(p) {
            --main-color: var(--grey600);
            margin-top: calc(var(--spacing) * 10);
            font-weight: 200;
          }

          .actions {
            margin-top: calc(var(--spacing) * 2);
            margin-left: calc(var(--spacing) * -1);
          }

          .actions :global(button) {
            --button-color: var(--grey900);
            margin: 0 calc(var(--spacing) * 1);
            width: 150px;
          }

          .productIcons {
            align-items: center;
            min-height: 10vh;
          }

          .productIcons :global(svg) {
            fill: var(--grey500);
            margin: 0 var(--spacing);
          }

          .terminal {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: center;
            flex: 1;
            padding: 0 calc(var(--spacing) * 8);
          }

          @media screen and (max-width: 1024px) {
            .container.rows {
              flex-direction: column;
            }
            .title {
              padding: calc(var(--spacing) * 4);
              margin: 0 auto;
            }

            .terminal {
              display: none;
            }
          }
          @media screen and (max-width: 400px) {
            h1 {
              font-size: 5em;
            }
            .actions.rows {
              flex-direction: column;
              align-self: center;
              width: 100%;
            }

            .actions :global(button) {
              margin: calc(var(--spacing) * 1) 0;
              width: 100%;
            }
          }
        `}</style>
      </div>
    )
  }
}
