import React, { Component } from 'react';
import { List } from 'antd-mobile';
import { Link } from 'umi';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h1>class demo</h1>
        <List>
          <List.Item>
            <Link to="/class/component-old">
            component-old
            </Link>
          </List.Item>
          <List.Item>
            <Link to="/class/component-new">
            component-new
            </Link>
          </List.Item>
        </List>
      </div>
    )
  }
}
