import React, { Component } from 'react';
import './SectionCta.css';

class SectionCta extends Component {
	render() {
		return (
				<section className="section-cta u-block">
					<h2 className="section-cta__title">We found some fantastic collections for you</h2>
					<a className="link section-cta__link cta" href="#!">
						<span className="cta__label">Discover more</span>
						<svg className="cta__icon icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129"><path d="M40.4 121.3c-.8.8-1.8 1.2-2.9 1.2s-2.1-.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8 0l53.9 53.9c1.6 1.6 1.6 4.2 0 5.8l-53.9 53.9z"/></svg>
					</a>
				</section>
		);
	}
}

export default SectionCta;
