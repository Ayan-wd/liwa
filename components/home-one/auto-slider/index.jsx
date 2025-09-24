"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const sliderData = [
	{
		id: crypto.randomUUID(),
		title: "Your Partners in Global Energy Supplies",

	},
	{
		id: crypto.randomUUID(),
		title: "High-Quality Oilfield Equipment",
	},
	{
		id: crypto.randomUUID(),
		title: "Delivering Excellence, On Time Every Time",
	},
	{
		id: crypto.randomUUID(),
		title: "Reliable Industrial Valves & Fittings",
	},
	{
		id: crypto.randomUUID(),
		title: "Flanges, Pipes & Compression Fittings",
	},
	{
		id: crypto.randomUUID(),
		title: "Custom Grades & Alloys",
	},
	{
		id: crypto.randomUUID(),
		title: "Industry-Specific Expertise",
	},
	{
		id: crypto.randomUUID(),
		title: "Stocking & Rapid Delivery",
	},
];


const swiperSettings = {
	centeredSlides: true,
	speed: 6000,
	autoplay: {
		delay: 1,
	},
	loop: true,
	slidesPerView: "auto",
	allowTouchMove: false,
	modules: [Autoplay],
};

function AutoSlider() {
	return (
		<div className="aximo-auto-slider-section">
			<div className="swiper aximo-auto-slider">
				{
					<Swiper {...swiperSettings}>
						{sliderData.map((item) => (
							<SwiperSlide key={item.id}>
								<div className="aximo-auto-slider-item">
									<h3>{item.title}</h3>

								</div>
							</SwiperSlide>
						))}
					</Swiper>
				}
			</div>
		</div>
	);
}

export default AutoSlider;
