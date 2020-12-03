import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <Html lang='en'>
        <Head>
          <link
            href='/static/images/favicon.svg'
            rel='icon'
            type='image/svg+xml'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Lato:300,400,700|Open+Sans:300,400,600|Montserrat:300,400,600'
            rel='stylesheet'
          />
          <link
            href='/static/css/gridlex.min.css'
            media='all'
            rel='stylesheet'
            type='text/css'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
