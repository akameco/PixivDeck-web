// @flow
import React, { Component } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Container from '../components/Container'
import Download from '../components/Download'
import Center from '../components/Center'

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Container>
          <Center>
            <h1>PixivDeck</h1>
            <p>TweetDeckライクのpixivクライアント</p>
          </Center>
          <Download />
        </Container>
        <style jsx>{`
          p {
            font-size: 20px;
            color: #5a5252;
          }
        `}</style>
      </Layout>
    )
  }
}
