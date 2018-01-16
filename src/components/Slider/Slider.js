import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { getImageData } from './../../utils/placeholder-api';
import './SliderVendor.css';
import './Slider.css';

class Slider extends Component {
	constructor() {
		super();
		this.state = {
			images: []
		};
	}

	getImages() {
		getImageData().then((images) => {
			this.setState({ images });
		});
	}

	componentDidMount() {
		this.getImages();
	}

	render() {
		const { images } = this.state;

		const sliderParams = {
			containerClass: 'slider',
			containerModifierClass: 'slider--',
			wrapperClass: 'slider__wrapper',
			slideClass: 'slider__slide',
			slideActiveClass: 'is-active',
			slideDuplicateClass: 'slider__slide-duplicate',
			slideDuplicatedActiveClass: 'slider__slide-duplicate--active',
			slideVisibleClass: 'slider__slide--visible',
			slideNextClass: 'slider__slide-next',
			slideDuplicatedNextClass: 'slider__slide-next-duplicate',
			slidePrevClass: 'slider__slide-prev',
			slideDuplicatedPrevClass: 'slider__slide-prev-duplicate',
			navigation: {
				nextEl: '.slider__button-next',
				prevEl: '.slider__button-prev',
				disabledClass: 'slider__button--disabled'
			},
			slidesPerView: 5,
			spaceBetween: 15,
			breakpoints: {
				1024: {
					slidesPerView: 2
				}
			},
			rebuildOnUpdate: true // so slider rebuilds when image data is loaded
		};

		return(
			<Swiper {...sliderParams}>
				{ images.map((image, index) => (
						<a href="#!" key={index}>
							<div className="slider__slide-inner">
								<img className="slider__slide-image" src={image.url} alt={image.alt}/>
								<div className="slider__slide-content">
									<h3 className="slider__slide-title">{image.title}</h3>
									<p className="slider__slide-subtitle">100+ Inspirational images</p>
								</div>
							</div>
						</a>
				))}
			</Swiper>
		)
	}
}

export default Slider;
