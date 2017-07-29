// @flow
import React, { Component } from 'react'
import Button from './Button'
import Center from './Center'

export default class Download extends Component {
  render() {
    return (
      <div className="top">
        <Center>
          <Button>PixivDeck を無料ダウンロード</Button>
        </Center>
        <p className="version">Mac版</p>
        <a href="https://github.com/akameco/PixivDeck/releases/latest">
          別のプラットフォーム向けのPixivDeckをダウンロード
        </a>
        <style jsx>{`
          .top {
            margin-top: 60px;
            display: flex;
            justify-content: center;
            flex-direction: column;
          }

          a {
            margin-top: 10px;
            color: #605454;
            text-decoration: none;
            cursor: pointer;
          }

          a:hover {
            color: #4493ef;
          }

          .version {
            font-size: 14px;
            color: #938181;
            margin-top: 5px;
            text-align: center;
          }
        `}</style>
      </div>
    )
  }
}
