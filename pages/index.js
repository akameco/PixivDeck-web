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

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Container>
          <div className="top">
            <Center>
              <Title />
              <DemoVideo />
            </Center>
          </div>
          <Download />
        </Container>
        <style jsx>{`
          .top {
            margin-top: 20px;
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
