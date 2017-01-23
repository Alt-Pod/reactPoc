'use strict';

import React from 'react';
import { Link } from 'react-router';
import ShoppingBasket from './ShoppingBasket';

export default class ItemPreview extends React.Component {

  constructor(props) {
        super(props);

        this.state = {
          nb: 0,
          item: this.props.name
        };
  }

  addItem() {
    this.setState({
      nb: this.state.nb + 1
    });
  }

  removeItem() {
    this.setState({
      nb: this.state.nb - 1
    });
  }
  
  render() {
    return (
          <div className={this.props.current}>
            <img src={"../img/" + this.props.img}/>
            <h2>{this.props.name}</h2>
            <p>{this.props.price} $</p>
            <span>{this.props.discount == 1 ? '*three for the price of two' :  ''}</span>
            <p><i>Number : {this.state.nb}</i> <button onClick={this.addItem.bind(this)}>+</button> <button onClick={this.removeItem.bind(this)}>-</button></p>
            <ShoppingBasket name={this.state.item} nb={this.state.nb}/>
          </div>
    );
  }
}
