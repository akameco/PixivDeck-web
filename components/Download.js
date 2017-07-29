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
        <p>別のプラットフォーム向けのPixivDeckをダウンロード</p>
        <style jsx>{`
          .top {
            margin-top: 20px;
            display: flex;
            justify-content: center;
            flex-direction: column;
          }

          p {
            margin-top: 10px;
            color: #605454;
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
