import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import './SliderVendor.css';
import './Slider.css';

class Slider extends Component {
	render() {
		const params = {
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
			}
		};

		return(
				<Swiper {...params}>
					<a href="#!">
						<img className="slider__slide-image" src="https://source.unsplash.com/400x600/?mountain,nature" alt="something"/>
						<div className="slider__slide-content">
							<h3 className="slider__slide-title">Love</h3>
							<p className="slider__slide-subtitle">100+ Inspirational images</p>
						</div>
					</a>
					<a href="#!">
						<img className="slider__slide-image" src="https://source.unsplash.com/400x600/?mountain,nature" alt="something"/>
						<div className="slider__slide-content">
							<h3 className="slider__slide-title">Love</h3>
							<p className="slider__slide-subtitle">100+ Inspirational images</p>
						</div>
					</a>
					<a href="#!">
						<img className="slider__slide-image" src="https://source.unsplash.com/400x600/?mountain,nature" alt="something"/>
						<div className="slider__slide-content">
							<h3 className="slider__slide-title">Love</h3>
							<p className="slider__slide-subtitle">100+ Inspirational images</p>
						</div>
					</a>
					<a href="#!">
						<img className="slider__slide-image" src="https://source.unsplash.com/400x600/?mountain,nature" alt="something"/>
						<div className="slider__slide-content">
							<h3 className="slider__slide-title">Love</h3>
							<p className="slider__slide-subtitle">100+ Inspirational images</p>
						</div>
					</a>
					<a href="#!">
						<img className="slider__slide-image" src="https://source.unsplash.com/400x600/?mountain,nature" alt="something"/>
						<div className="slider__slide-content">
							<h3 className="slider__slide-title">Love</h3>
							<p className="slider__slide-subtitle">100+ Inspirational images</p>
						</div>
					</a>
					<a href="#!">
						<img className="slider__slide-image" src="https://source.unsplash.com/400x600/?mountain,nature" alt="something"/>
						<div className="slider__slide-content">
							<h3 className="slider__slide-title">Love</h3>
							<p className="slider__slide-subtitle">100+ Inspirational images</p>
						</div>
					</a>
				</Swiper>
		)
	}
}

export default Slider;
