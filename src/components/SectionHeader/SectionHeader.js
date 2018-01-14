import React, { Component } from 'react';
import './SectionHeader.css';

class SectionHeader extends Component {
	render() {
		return (
				<section className="section-header">
					<h2>Let's stay in touch</h2>
					<p className="lead">Sign up to our Newsletter or follow us on Social Media</p>
				</section>
		);
	}
}

export default SectionHeader;
