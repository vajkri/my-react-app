import React, { Component } from 'react';
import './SocialIcons.css';
import facebook from './../../assets/icons/icon-social-facebook.svg';
import instagram from './../../assets/icons/icon-social-instagram.svg';
import pinterest from './../../assets/icons/icon-social-pinterest.svg';

class SocialIcons extends Component {

	render() {

		const icons = [
			{
				src: pinterest,
				href: '#!',
				alt: 'pinterest icon'
			},
			{
				src: facebook,
				href: '#!',
				alt: 'facebook icon'
			},
			{
				src: instagram,
				href: '#!',
				alt: 'instagram icon'
			}
		];

		return (
				<ul className="social-icons">
					{
						icons.map(item =>
							<li className="social-icons__item">
								<a className="social-icons__link" href={item.href} target="_blank">
									<img className="social-icons__asset" src={item.src} alt={item.alt}/>
								</a>
							</li>
						)
					}
				</ul>
		);
	}
}

export default SocialIcons;
