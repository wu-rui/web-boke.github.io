import React, { Component } from 'react';

export default class Setting extends Component {

  render() {
    console.log('setting:', this.props.userMsg)
    return (
      <div style={{ backgroundColor: 'black', width: 100, height: 100, color: 'red' }}>
        {
          this.props.userMsg.username
        }
      </div>
    )
  }
}