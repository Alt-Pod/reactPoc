'use strict';

import React from 'react';
import items from '../data/items';
import ItemPreview from './ItemPreview';
import ItemList from './ItemList';

export default class List extends React.Component {
  constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.state = {current: 'home'};
  }

  handleChange(name) {
        this.setState({
          current: name
        });
      }

	render() {
    return (
      <div className="main">

      	<ul className="items-selector">
          <ItemList current={this.state.current == 'home' ? 'current' :  ''} handleChange={this.handleChange} name='home' />
          {items.map(itemData => <ItemList current={this.state.current == itemData.name ? 'current' :  ''} handleChange={this.handleChange} key={itemData.name} {...itemData} />)}
        </ul>

        <div className="items-previews">
          <div className="landing-page">
            <h1>Solera Home: Technical Evaluation</h1>
            <a href="https://www.linkedin.com/in/michael-dornic-79b25955" target="_blank">
              By Michael Dornic
              <img src="../img/linkedin_logo.png"/>
            </a>
          </div>
          {items.map(itemData => <ItemPreview current={this.state.current == itemData.name ? 'current' :  'hidden'} key={itemData.name} {...itemData} />)}
        </div>

        
      </div>
    );
  }
}
