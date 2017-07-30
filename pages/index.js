// @flow
import React, { Component } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Container from '../components/Container'
import Download from '../components/Download'
import Center from '../components/Center'
import Logo from '../components/Logo'
import DemoVideo from '../components/DemoVideo'

class Title extends Component {
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
            color: #5a5252;
          }
        `}</style>
      </div>
    )
  }
}

const staticPath = process.env.STATIC_PATH || '/static'

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Container>
          <div className="top">
            <Center>
              <Title />
              <DemoVideo videoId="DsL9NC8cWVE" />
            </Center>
          </div>
          <Download />
          <div className="benefit row">
            <div className="text">
              <Center>
                <h2>マルチカラム</h2>
                <p>
                  ブックマークと新着イラストとランキング。 <br />すべてを一度に閲覧できます。
                </p>
              </Center>
            </div>
            <video src={`${staticPath}/column.mp4`} loop autoPlay />
          </div>

          <div className="benefit">
            <div className="text">
              <Center>
                <h2>高度なフィルタ</h2>
                <p>
                  1000users入りの画像が見たい？ PixivDeckなら一瞬で切り替え。<br />
                  users入りタグが存在しない？<br />
                  大丈夫。ブックマーク数でフィルタ可能です
                </p>
              </Center>
            </div>
            <Center direction="row">
              <video
                src={`${staticPath}/filter1.mp4`}
                height="500"
                loop
                autoPlay
              />
            </Center>
          </div>

          <div className="benefit row">
            <div className="text">
              <Center>
                <h2>ワンクリックブックマーク</h2>
                <p>お気に入りのイラストを見つけたらワンクリックでブックマーク。</p>
              </Center>
            </div>
            <Center direction="row">
              <video src={`${staticPath}/bookmark.mp4`} loop autoPlay />
            </Center>
          </div>

          <div className="benefit">
            <div className="text">
              <h2>他にもいろんな機能がたくさん</h2>
              <ul>
                <li>デスクトップ通知</li>
                <li>オリジナルサイズの画像のダウンロード</li>
                <li>閲覧履歴</li>
                <li>NGキーワード</li>
                <li>English サポート</li>
                <li>自動アップデート</li>
              </ul>
            </div>
          </div>
          <div className="benefit row">
            <h2>PixivDeckを入手</h2>
            <img src={`${staticPath}/logo.png`} className="logo" />
            <Download />
          </div>
        </Container>
        <style jsx>{`
          .logo {
            max-width: 150px;
          }
          ul {
            display: flex;
            justify-content: center;
            flex-direction: column;
            font-size: 16px;
            margin-left: 60px;
          }
          li {
          }
          .top {
            margin-top: 20px;
            margin-bottom: 30px;
          }
          .benefit {
            margin-top: 100px;
            margin-bottom: 40px;
            display: flex;
            justify-content: center;
            flex-direction: row;
            align-items: center;
          }
          .benefit > * {
            margin-left: 20px;
            margin-right: 20px;
          }
          .benefit:last-child {
            margin-bottom: 180px;
          }
          .row {
            flex-direction: column;
          }
          .row video {
            margin-left: 20px;
            margin-right: 20px;
          }
          .benefit h2 {
            font-size: 36px;
            margin-bottom: 20px;
          }
          .benefit p {
            margin-bottom: 30px;
          }
          .text {
            margin: 0 10px;
          }
          .text p {
            font-size: 14px;
          }
          p {
            font-size: 20px;
            color: #5a5252;
          }
        `}</style>
      </Layout>
    )
  }
}
