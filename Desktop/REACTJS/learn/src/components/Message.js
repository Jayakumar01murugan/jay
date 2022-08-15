import React,{Component} from "react";
class Message extends Component{
    constructor(){
        super()
        this.state={
            message:"welcome visitor"
        }
    }
    change(){
        this.setState({message:"thank you for subscribe"})
    }
    render(){
        return<>
            <h1>
                {this.state.message}
            </h1>
            <button onClick={()=>this.change()}>
                subscribe
            </button>
        </>
    }
}

    export default Message