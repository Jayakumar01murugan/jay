 import React, { Component } from 'react'
 
 class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increment(){
        this.setState(prevState=>({count:prevState.count+1}) )
        console.log(this.state.count);
    }
    incre(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }
   render() {
     return (
       <div>
        <div>Count - {this.state.count}</div>
        <button onClick={()=>this.incre()}>button</button>
       </div>
 )
   }
 }
 
 export default Counter