import React, { Component } from 'react';

export default class ComponentOld extends Component {

  constructor(props) {
    super(props);
    this.state = {
        text:'demo'
    };
    console.log('constructor');
    //this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount(){
    console.log('componentDidMount')
  }

  handleClick(){
    alert()
  }

  render() {
    console.log('render');
    return (
      <div onClick={this.handleClick.bind(this)}>
          component-old--{this.state.text}
      </div>
    )
  }
}
