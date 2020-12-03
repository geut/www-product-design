import React from 'react'

import GEUTLogo from './geutlogo'
import Link from 'nextein/link'

const Navigation = ({ top = true, ...props }) => (
  <nav role='navigation' {...props}>
    <ul>
      <li className='productLogo'>
        <a href='/'>YOUR LOGO</a>
      </li>

      <li className='about'>
        <Link href='https://geutstudio.com/#about-us'>
          <a>About us</a>
        </Link>
      </li>
      <li className='contact'>
        <Link href='https://geutstudio.com/#contact-us'>
          <a>Contact</a>
        </Link>
      </li>
      <li className='blog'>
        <Link href='https://geutstudio.com/blog/'>
          <a>Blog</a>
        </Link>
      </li>
      <li className='logo'>
        <a href='https://geutstudio.com'>
          <GEUTLogo className='logo' width='80px' opacity={1} />
        </a>
      </li>
    </ul>
    <style jsx>{`
      nav {
        position: absolute;
        left: 0;
        right: 0;
        width: 100vw;
        height: calc(var(--spacing) * 14);
      }

      nav ul {
        background-color: var(--grey50);
        padding: calc(var(--spacing) * 4) 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      nav li {
        list-style: none;
        display: inline-block;

        flex: 1 0 auto;
        display: block;
        text-align: right;
      }

      nav li a {
        text-decoration: none;
        text-transform: uppercase;
        color: var(--geut-purple);
        font-weight: 600;
      }

      nav li.productLogo {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        flex: 6 0 auto;
        padding-left: calc(var(--spacing) * 4);
      }

      nav li.logo {
        padding-right: calc(var(--spacing) * 4);
      }

      @media screen and (max-width: 680px) {
        nav ul {
          font-size: 0.75em;
        }

        nav li.logo {
          padding-right: var(--spacing);
        }

        nav li.productLogo {
          padding-left: var(--spacing);
        }
      }
    `}</style>
  </nav>
)

export default Navigation
