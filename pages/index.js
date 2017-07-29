// @flow
import React, { Component } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Container from '../components/Container'
import Download from '../components/Download'
import Center from '../components/Center'
import Logo from '../components/Logo'

class Title extends Component {
  render() {
    return (
      <Center direction="row">
        <Logo />
        <h1>PixivDeck</h1>
        <style jsx>{`
          h1 {
            font-size: 40px;
            margin-left: 5px;
          }
        `}</style>
      </Center>
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
              <p>TweetDeckライクのpixivクライアント</p>
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
