import React from 'react'

// function Greet(){
//     return <h1>hello jay</h1>
// }
export const Greet =(props)=>{
    console.log(props)
return(<>
<h1>hello  jay.{props.name} h.s.{props.heroname}</h1>
<p> this is a paragrapg tag</p>{props.children}</>
)}
export const Hi=()=><h2>hi </h2>
