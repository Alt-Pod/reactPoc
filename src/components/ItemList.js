'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class ItemPreview extends React.Component {

  setCurrent(){
    this.props.handleChange(this.props.name);
  }

  render() {
    return (
        <li className={this.props.current}>
          <Link to="/" onClick={this.setCurrent.bind(this)}>
            {this.props.name}
          </Link>
        </li>
    );
  }
}

ItemPreview.propTypes = {
    handleChange: React.PropTypes.func
};