import React, { Component } from 'react';
import hero from '../../assets/images/image-hero.jpg';
import './MastHead.css';

class MastHead extends Component {
	render() {
		return (
				<header className="masthead">
					<div className="masthead__foreground u-container">
						<div className="masthead__content">
							<h1>Thank you for using ColourBox!</h1>
							<p className="lead">You are now signed out, but your journey doesn't have to end here.</p>
						</div>
					</div>
					<img className="masthead__image" src={hero} alt="girl smelling flowers"/>
				</header>
		);
	}
}

export default MastHead;
