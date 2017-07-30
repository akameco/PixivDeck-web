// @flow
import React, { Component } from 'react'
import EventListener from 'react-event-listener'
import Youtube from 'react-youtube'

type State = {
  width: number,
  height: number,
}

const defaultWidth = 730
const defaultHeight = 500

type Props = {
  videoId: string,
  opts?: Object,
}

export default class DemoVideo extends Component {
  props: Props
  state: State = {
    width: defaultWidth,
    height: defaultHeight,
  }

  handleOnReady = (event: any) => {
    event.target.setVolume(0)
  }

  handleResize = () => {
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    if (windowWidth < defaultWidth && windowWidth > 200) {
      this.setState({ width: windowWidth - 10 })
    } else {
      this.setState({ width: defaultWidth })
    }

    if (windowHeight < defaultHeight && windowHeight > 200) {
      this.setState({ height: windowHeight - 10 })
    } else {
      this.setState({ height: defaultHeight })
    }
  }

  render() {
    const { width, height } = this.state
    const { videoId, opts = {} } = this.props

    const youtubeOpts = {
      width,
      height,
      playerVars: {
        rel: 0,
        autoplay: 1,
        controls: 2,
        ...opts,
      },
    }

    return (
      <div>
        <EventListener target="window" onResize={this.handleResize} />
        <Youtube
          videoId={videoId}
          opts={youtubeOpts}
          onReady={this.handleOnReady}
        />
      </div>
    )
  }
}
