import React from 'react'
import NextApp from 'next/app'
import { CssBaseline } from 'elems'

import 'prismjs/themes/prism-tomorrow.css'

export default class App extends NextApp {
  render () {
    const { Component, pageProps } = this.props

    return (
      <>
        <CssBaseline />
        <style jsx global>{`
          :root {
            --font-family-geut: 'ETH Sans';
            --font-family-heading: 'Open Sans';
            --font-family-body: 'Montserrat';

            --spacing: 8px;

            --h1-font-size: 4.4rem;
            --h1-margin: calc(var(--spacing) * 8) 0 calc(var(--spacing) * 4)
              calc(var(--spacing) * -0.5);
            --h2-font-size: 2.35rem;
            --h2-margin: calc(var(--spacing) * 3) 0 calc(var(--spacing) * 3)
              calc(var(--spacing) * -0.5);
            --h3-font-size: 1.8rem;
            --h3-margin: var(--h2-margin);
            --h4-font-size: 1.5rem;
            --h4-margin: var(--h2-margin);
            --h5-font-size: 1.3rem;
            --h5-margin: var(--h2-margin);
            --h6-font-size: 1.1rem;
            --h6-margin: var(--h2-margin);

            --p-font-size: 21px;
            // --p-margin: 0 0 calc(var(--spacing) * 6) 0;
            // --pre-margin: 0 0 calc(var(--spacing) * 6) 0;
            --li-font-size: 21px;

            --grey50: #fafafa;
            --grey100: #f0f0f0;
            --grey200: #e4e4e4;
            --grey300: #d5d5d5;
            --grey400: #bdbdbd;
            --grey500: #9e9e9e;
            --grey600: #757575;
            --grey700: #424242;
            --grey800: #212121;
            --grey900: #181818;

            --geut-black: #0d0d0d;
            --geut-blue: #4e9fbf;
            --geut-green: #5abf9a;
            --geut-green-light: #5abf69;
            --geut-green-dark: #2c733d;
            --geut-purple: #5864a6;
            --geut-purple-dark: #2b2b53;

            --main-color: var(--grey700);
            --secondary-color: var(--geut-blue);

            --main-contrast-color: var(--grey400);
            --action-color: var(--geut-blue);

            font-size: 16px;
          }
          @font-face {
            font-family: 'ETH Sans';
            src: url('/static/fonts/eth-sans/EthRomainEthon.ttf');
            font-weight: lighter;
          }

          @font-face {
            font-family: 'ETH Sans';
            src: url('/static/fonts/eth-sans/EthBlackEthon.ttf');
            font-weight: bold;
          }

          @media screen and (max-width: 680px) {
            :root {
              --font-base: 12px;
            }
          }

          * {
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
            margin: 0;
            padding: 0;
          }

          body {
            font-family: var(--font-family-body), -apple-system,
              BlinkMacSystemFont, 'Helvetica Neue', 'Lucida Grande', sans-serif;
            font-size: var(--font-base);
          }

          // LAYOUT ---

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
        `}</style>
        <Component {...pageProps} />
      </>
    )
  }
}
