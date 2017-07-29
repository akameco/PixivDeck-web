// @flow
import React, { Component } from 'react'

type Direction = 'column' | 'row'

type DP = {
  direction: Direction,
}

type Props = {
  children?: React.Element<*>,
} & DP

export default class Center extends Component<DP, Props, void> {
  static defaultProps = { direction: 'column' }
  render() {
    return (
      <div>
        {this.props.children}
        <style jsx>{`
          div {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
        `}</style>
      </div>
    )
  }
}
