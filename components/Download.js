// @flow
import React, { Component } from 'react'
import * as platfrom from 'platform'
import Button from './Button'
import Center from './Center'

const version = '0.15.0'

const macOS = `PixivDeck-${version}.dmg`
const windonws = `PixivDeck-Setup-${version}.exe`
const linux = `PixivDeck-${version}-x86_64.AppImage`

const downloadLink = `https://github.com/akameco/PixivDeck/releases/download/v${version}`

function getDownloadLink(family: string): string {
  if (family === 'OS X') {
    return `${downloadLink}/${macOS}`
  } else if (family === 'Windows' || family === 'Windows XP') {
    return `${downloadLink}/${windonws}`
  }
  return `${downloadLink}/${linux}`
}

function getOSText(family: string): string {
  if (family === 'OS X') {
    return 'Mac版'
  } else if (family === 'Windows' || family === 'Windows XP') {
    return 'Windows版'
  }
  return 'Linux版'
}

export default class Download extends Component {
  render() {
    return (
      <div className="top">
        <Center>
          <a href={getDownloadLink(platfrom.os.family)}>
            <Button>PixivDeck を無料ダウンロード</Button>
          </a>
        </Center>
        <p className="version">
          {getOSText(platfrom.os.family)}
        </p>
        <a
          href="https://github.com/akameco/PixivDeck/releases/latest"
          className="other"
        >
          別のプラットフォーム向けのPixivDeckをダウンロード
        </a>
        <style jsx>{`
          .top {
            margin-top: 60px;
            display: flex;
            justify-content: center;
            flex-direction: column;
          }

          .other {
            margin-top: 10px;
            color: #605454;
            text-decoration: none;
            cursor: pointer;
          }

          .other:hover {
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
