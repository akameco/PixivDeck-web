// @flow
import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <h1>PixivDeck</h1>
        </div>
        <style jsx>{`
          header {
            width: 100%;
            background: black;
          }
          .container {
            margin: 0 auto;
            padding: 0 20px;
            max-width: 760px;
          }
          h1 {
            color: white;
          }
        `}</style>
      </header>
    )
  }
}
