import React,{Component} from "react";
class Welcome extends Component{
    
    render(){
        return(
        <div>
            <h1>class  hello{this.props.name} h.s{this.props.heroname}
            </h1>
        {this.props.children}
        </div>
        )
    }
}

    export default Welcome