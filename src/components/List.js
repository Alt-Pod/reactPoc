'use strict';

import React from 'react';
import items from '../data/items';
import ItemPreview from './ItemPreview';

export default class List extends React.Component {
	constructor() {
	    super();

	    this.handleChange = this.handleChange.bind(this);
	    this.state = {
	      class: 'test',
        current: ''
	    };
	  }

	  handleChange(value,name) {
	    this.setState({
	      class: value,
        current: name
	    });
	  }

  	render() {
    return (
      <div className="list">
      	<ul className="items-selector">
      	  <li className="current">
      	  	<a href="javascript:void(0)" onClick={this.handleClick}>
      	  		Home
      	  	</a>
      	  	<div className="landing-page">
      	  		<h1>Solera Home: Technical Evaluation</h1>
  	  			<a href="https://www.linkedin.com/in/michael-dornic-79b25955" target="_blank">
  	  				By Michael Dornic
  	  				<img src="../img/linkedin_logo.png"/>
  	  			</a>
      	  	</div>
      	  </li>
          {items.map(itemData => <ItemPreview class={this.state.class} current={this.state.current} handleChange={this.handleChange} key={itemData.name} {...itemData} />)}
        </ul>
      </div>
    );
  }
}
