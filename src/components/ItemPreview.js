
'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class ItemPreview extends React.Component {
  
  constructor(props) {
          super(props);
          this.state = { 
              current: ''
          };
      }

  resetValue() {
    this.props.handleChange('',this.props.name);
    if(this.props.current == this.props.name){
      this.setState({
        current: 'current'
      });
    } else{
      this.setState({
        current: ''
      });
    }
  }



  render() {
    return (
        <li className={this.state.current}>
          <Link to="/" onClick={this.resetValue.bind(this)}>
            {this.props.name}
          </Link>
          <div className="item-info">
            <p>{this.props.name}</p>
            <p>{this.props.price}</p>
            <p>{this.props.discount}</p>
          </div>
        </li>
    );
  }
}

ItemPreview.propTypes = {
    handleChange: React.PropTypes.func
};