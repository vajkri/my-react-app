import React, { Component } from 'react';
import './ContactBlock.css';
import NewsletterForm from "../NewsletterForm/NewsletterForm";
import SocialIcons from "../SocialIcons/SocialIcons";

class ContactBlock extends Component {
	render() {
		return (
				<div className="contact-block">
					<NewsletterForm />
					<SocialIcons />
				</div>
		);
	}
}

export default ContactBlock;
