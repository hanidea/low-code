import React, { Component } from 'react';
import SearchContext from './searchContext'

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text:'',
      lists:[]
    };
  }

  handleDispatch = (action)=>{
    switch (action.type) {
      case 'TEXT':
        return this.setState({
          text: action.payload
        });
      case 'LISTS':
        return this.setState({
          lists: action.payload
        });
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <SearchContext.Provider value={{
          state: this.state,
          dispatch: this.handleDispatch
        }}>

        </SearchContext.Provider>
      </div>
    )
  }
}
