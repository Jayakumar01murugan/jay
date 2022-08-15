import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first:"hello"
      }
    //   this.h=this.h.bind(this)
    }
    h(){
        this.setState({
            first:"good bye!"
        })
        
    }
  render() {
    return (
      <div>
        <div>
            {this.state.first}
        </div>
        {/* <button onClick={this.h}> */}
        {/* <button onClick={this.h.bind(this)}> */}
       
        <button onClick={()=>this.h()}>
            click
        </button>

      </div>
    )
  }
}

export default EventBind