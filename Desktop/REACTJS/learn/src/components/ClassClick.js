import React, { Component } from 'react'

export class ClassClick extends Component {
    jay(){
        console.log('click me worked');
    }
  render() {
    return (
      <div>
        <button onClick={this.jay}>click me!</button>
      </div>
    )
  }
}

export default ClassClick