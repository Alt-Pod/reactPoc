'use strict';

import React from 'react';
import { Link } from 'react-router';
import items from '../data/items';

export default class ShoppingBasket extends React.Component {

  constructor(props) {
        super(props);
        var basketItem = items
        for (var i = 0; i < basketItem.lenght; i++) {
            basketItem[i][nb] = 0;
        }
        this.state = basketItem;
  }


  render() {
    return (
        <a id='basket' href="javascript:void(0);">

        </a>
    );
  }
}
