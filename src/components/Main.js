'use strict';

import React from 'react';
import items from '../data/items';
import ItemPreview from './ItemPreview';
import ItemList from './ItemList';
import ShoppingBasket from './ShoppingBasket';

export default class Main extends React.Component {
  // CONSTRUCTOR MANAGING THE CURRENT AND THE BASKET CONTENT THROUGH AN ARRAY
  constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        var myStringArray =[];
        for (var i = 0; i <items.length; i++) {
            myStringArray[i] = {name : items[i].name, currentNb: 0, price : items[i].price, sum : 0}
        }
        this.state = {current: 'home', cart : false, total : myStringArray, totalSum : 0};
  }
  // FILLING THE BASKET ARRAY AND CALCULATING BASKET'S SUMS
  handleChange(name,nb) { 
    var tempTotal = 0;
    var myStringArray = this.state.total;
    for (var i = 0; i < myStringArray.length; i++) {
      if(nb!='n/a' && myStringArray[i].name == name){ 
        myStringArray[i].currentNb = nb;
        if('Papaya' == name)
        {myStringArray[i].sum = parseFloat(nb*myStringArray[i].price).toFixed(2) - parseInt(nb/3)*myStringArray[i].price.toFixed(2);}
        else{myStringArray[i].sum = parseFloat(nb*myStringArray[i].price).toFixed(2)};
      }
      tempTotal = parseFloat(tempTotal) + parseFloat(myStringArray[i].sum)
    }   
    this.setState({totalSum : tempTotal.toFixed(2)});
    this.setState({current: name ,total : myStringArray});
  }
  // TOGGLE ON BASKET
  toggleCart() {this.setState({cart : !this.state.cart});}

	render() {
    return (
      <div className="main">
        {/* GENERATE THE LEFT SIDEBAR MENU */}
      	<ul className="items-selector">
          {/* HOME TOP LEFT SIDEBAR BUTTON */}
          <ItemList current={this.state.current == 'home' ? 'current' :  ''} handleChange={this.handleChange} name='home' />
          {/* ITEM LISTING BELOW AND ASSIGNING A CURRENT */}
          {items.map(itemData => <ItemList current={this.state.current == itemData.name ? 'current' :  ''} handleChange={this.handleChange} key={itemData.name} {...itemData} />)}
        </ul>
      {/* GENERATE THE PREVIEW OF THE ITEM */}
        <div className="items-previews">
          {/* HOMEPAGE CONTENT */}
          <div className="landing-page">
            <h1>Solera Home: Technical Evaluation</h1>
            <a href="https://www.linkedin.com/in/michael-dornic-79b25955" target="_blank">
              By Michael Dornic
              <img src="../img/linkedin_logo.png"/>
            </a>
          </div>
          {/* ITEM PREVIEW, CURRENT VALUE PRINT THE SELECTED ITEM IN THE LIST */}
          {items.map(itemData => <ItemPreview handleChange={this.handleChange} current={this.state.current == itemData.name ? 'current' :  'hidden'} key={itemData.name} {...itemData} />)}
        </div>
      {/* GENERATE THE BASKET */}
        <a id="basket" href="javascript:void(0);" onClick={this.toggleCart.bind(this)} ></a>
        <div id='basketList' className={this.state.cart ? "large" : ""}>
          <table>
            <tr>
              <td>Fruit</td>
              <td>Number</td>
              <td>total</td>
            </tr>
            {this.state.total.map(itemData => <ShoppingBasket name={itemData.name} nb={itemData.currentNb} subSum={itemData.sum}/>)}
            <tr><td></td><td>Total</td><td>
              {this.state.totalSum} $
            </td></tr>
          </table>
        </div>
      </div>
    );
  }
}
