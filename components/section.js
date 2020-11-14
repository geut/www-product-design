import React, { Component } from 'react'

import { Heading2 } from 'elems'

export default class Section extends Component {
  render () {
    const { title, children } = this.props
    return (
      <div className='container'>
        <div className='separator' />
        <div className='title'>
          <Heading2>{title}</Heading2>
        </div>
        {children}
        <style jsx>{`
          .container {
            margin-top: calc(var(--spacing) * 2);
            padding: 0 calc(var(--spacing) * 4);
          }

          .separator {
            margin: 0;
            width: calc(var(--spacing) * 10);
            height: calc(var(--spacing) * 0.5);
            background-color: var(--main-color);
          }

          .title :global(h2) {
            font-family: var(--font-family-geut);
            font-weight: lighter;
            margin: calc(var(--spacing) * 4) 0;
            color: var(--secondary-color);
          }
        `}</style>
      </div>
    )
  }
}
