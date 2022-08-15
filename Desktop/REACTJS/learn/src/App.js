
import React, { Component } from 'react';
import './App.css';
// import {Greet } from './components/Greet.js';
// import { Hi } from './components/Greet.js';
// import Welcome from './components/Welcome';
// import { Heelo } from './components/hello';
// import { S } from './components/hello'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
class App extends Component {
  render(){
  return (
    <div className="App">
      <Message/>
      <Counter/>
      <FunctionClick/>
      <ClassClick/>
      <EventBind/>
      {
      /* <Hi/>  
      <Greet name="bruce" heroname="ajith"/>
      <Greet name="leo" heroname="vijay"><p>this is from app.js</p></Greet>
      <Greet name="clark" heroname="arun vijay"><button>Action</button></Greet>
      <Heelo/>
      <S/>
      <Welcome name="bruce" heroname="ajith"><p> this is a Welcome paragraph</p></Welcome>
      <Welcome  name="leo" heroname="vijay"/>
      <Welcome name="clark" heroname="arun vijay"/> */}
      
    </div>
  );
}
}

export default App;
