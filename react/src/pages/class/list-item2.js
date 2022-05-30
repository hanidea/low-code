import React, { Component } from 'react';

export default class ListItem2 extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
          <h2>item2--{this.props.name}</h2>
      </div>
    )
  }
}
