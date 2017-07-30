// @flow
import React, { Component } from 'react'
import Center from './Center'
import Logo from './Logo'

export default class Title extends Component {
  render() {
    return (
      <div className="title">
        <Center direction="row">
          <Logo />
          <h1>PixivDeck</h1>
        </Center>
        <h2>TweetDeckライクな高機能pixivクライアント</h2>
        <style jsx>{`
          .title {
            margin-top: 15px;
            margin-bottom: 30px;
          }

          h1 {
            font-size: 48px;
            margin-left: 5px;
          }

          h2 {
            font-size: 24px;
            font-weight: 300;
            color: #5a5252;
          }
        `}</style>
      </div>
    )
  }
}
