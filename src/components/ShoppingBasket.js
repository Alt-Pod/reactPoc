'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class ShoppingBasket extends React.Component {

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.nb}</td>
        <td>{this.props.subSum}</td>
      </tr>
    );
  }
}
