import React from 'react'
import Head from 'next/head'
import Link from 'nextein/link'
import { Paragraph, Anchor } from 'elems'

import { name } from '../site'

export default function Layout ({
  title,
  showNav = false,
  children,
  docsStyle = false
}) {
  const rootStyle = `root`
  return (
    <div className={rootStyle}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{title}</title>
      </Head>
      <main>
        {showNav && (
          <nav>
            <Link href='/' passHref>
              <Anchor>{name}</Anchor>
            </Link>
          </nav>
        )}
        {children}
      </main>
      <footer>
        <Paragraph>
          &copy; {new Date().getFullYear()} - Built with ♥︎ and
          {` `}
          <Anchor href='https://nextein.elmasse.io'>Nextein</Anchor>
        </Paragraph>
      </footer>
      <style jsx>{`
        .root {
          margin: 0 auto;
          padding: var(--spacing);
          max-width: calc(var(--spacing) * 84);
        }

        nav :global(a) {
          text-decoration: none;
        }

        main {
          display: flex;
          flex-direction: column;
        }

        footer {
          padding-top: calc(var(--spacing) * 8);
        }
      `}</style>
    </div>
  )
}
