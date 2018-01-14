import React, { Component } from 'react';
import './SocialIcons.css';
import facebook from './../../assets/icons/icon-social-facebook.svg';
import instagram from './../../assets/icons/icon-social-instagram.svg';
import pinterest from './../../assets/icons/icon-social-pinterest.svg';

class SocialIcons extends Component {

	render() {

		return (
				<ul className="social-icons">
					<li className="social-icons__item">
						<a className="social-icons__link" href="#!" target="_blank">
							<img className="social-icons__asset" src={pinterest} alt="pinterest icon"/>
						</a>
					</li>
					<li className="social-icons__item">
						<a className="social-icons__link" href="#!" target="_blank">
							<img className="social-icons__asset" src={facebook} alt="facebook icon"/>
						</a>
					</li>
					<li className="social-icons__item">
						<a className="social-icons__link" href="#!" target="_blank">
							<img className="social-icons__asset" src={instagram} alt="instagram icon"/>
						</a>
					</li>
				</ul>
		);
	}
}

export default SocialIcons;
