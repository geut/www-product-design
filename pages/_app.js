import React from 'react'
import App from 'next/app'

export default class MyApp extends App {


  render() {
    const { Component, pageProps } = this.props

    return (
      <div>
        <style jsx global>{`
          :root {
            --base-font-size: 18px;
            --base-line-height: calc(32 / 18);
            --spacing: 8px;

            --font-family-heading: Georgia;
            --font-family-body: "Helvetica Neue", "Lucida Grande", sans-serif;
            --font-family-monospace: monospace;
  
  
            --main-color: #181818;
            --action-color: #035599;

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
  
            font-size: var(--base-font-size);
          }

          body {
            font-family: var(--font-family-body);
            margin: 0;
            padding: var(--spacing);
          }

        `}</style>
        <Component {...pageProps} />
      </div>
    )
  }
}
