// @flow
import React, { Component } from 'react'
import Youtube from 'react-youtube'

export default class DemoVideo extends Component {
  handleOnReady = (event: any) => {
    event.target.setVolume(0)
  }

  render() {
    const youtubeOpts = {
      width: '730',
      height: '500',
      playerVars: {
        rel: 0,
        autoplay: 1,
        controls: 2,
      },
    }

    return (
      <Youtube
        videoId="DsL9NC8cWVE"
        opts={youtubeOpts}
        onReady={this.handleOnReady}
      />
    )
  }
}
