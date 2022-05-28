import { Component } from "react";

export default class Layout extends Component {
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    return(
      <div>
        <h1>class header</h1>
        {this.props.children}
      </div>
    );
  }
}
