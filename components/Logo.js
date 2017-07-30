// @flow
import React, { Component } from 'react'

const staticPath = process.env.STATIC_PATH || '/static'

export default class Logo extends Component {
  render() {
    return (
      <div>
        <img src={`${staticPath}/logo.png`} />
        <style jsx>{`
          img {
            width: 44px;
            height: 44px;
          }
        `}</style>
      </div>
    )
  }
}
