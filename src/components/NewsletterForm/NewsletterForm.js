import React, { Component } from 'react';
import './NewsletterForm.css';

class NewsletterForm extends Component {
	render() {
		return (
				<form className="newsletter-form">
					<div className="input-group input-group--inline">
						<input className="input-group__input" id="email" type="email" placeholder="Email"/>
						<label className="input-group__label u-hide" htmlFor="email">Email</label>
					</div>
					<div className="input-group input-group--inline">
						<button className="input-group__submit button" type="submit">
							Keep me updated
						</button>
					</div>
				</form>
		);
	}
}

export default NewsletterForm;
