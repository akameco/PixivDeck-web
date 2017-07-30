// @flow
import React, { Component } from 'react'
import Logo from './Logo'
import Center from './Center'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="logo">
            <Center direction="row">
              <Logo />
              <h1>PixivDeck</h1>
            </Center>
          </div>
        </div>
        <style jsx>{`
          header {
            width: 100%;
            background: black;
          }
          .container {
            margin: 0 auto;
            max-width: 760px;
          }
          .logo {
            padding: 0 20px;
            text-align: left;
            display: flex;
            flex-direction: row;
            cursor: pointer;
          }
          h1 {
            font-size: 20px;
            font-weight: 300;
            color: white;
          }
        `}</style>
      </header>
    )
  }
}
