import React from "react";
import "./Farewell.scss";
import styled, { keyframes } from "styled-components";

function random_int(value = 100) {
	return Math.floor(Math.random() * value) + 1;
}
function random_range(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateFlakes(snowCount) {
	let snow = []
	for (let i = 0; i < snowCount; i++) {
		let random_x = Math.random() * 100; // vw
		let random_offset = random_range(-100, 100) * 0.1; // vw;
		let random_yoyo_time = random_range(3, 8) / 10;
		let random_yoyo_y = random_yoyo_time * 100; // vh
		let random_scale = Math.random();
		let fall_duration = random_range(10, 30) * 1; // s

		// Ignore error highlights, this compiles
		const flakeAnimation = keyframes`
			${random_yoyo_time * 100}% {
      	transform: translate(${random_x + random_offset}vw, ${random_yoyo_y}vh) scale(${random_scale});
      }
      to {
        transform: translate(${random_x + (random_offset / 2)}vw, 100vh) scale(${random_scale});
      }`

		let Flake = styled.div`
			filter:
					opacity: ${Math.random()};
					transform: translate(${random_x}vw, -10px) scale(${random_scale});
					animation: ${flakeAnimation} ${fall_duration}s ${-random_int(30)}s linear infinite;
		`;
		snow.push(<Flake className="snowflake" />);
	}
	return snow
}

const Farewell = () => {
	return <>
		<div id="snow">
			{generateFlakes(200)}
		</div>
		<div className="boring-essay">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque eros eu est maximus dignissim. Donec suscipit hendrerit turpis, in mollis eros tincidunt vel. Quisque imperdiet, odio eget ultricies rutrum, felis justo luctus quam, quis vulputate ligula diam eu purus. Vestibulum suscipit a libero in ornare. Nam placerat id felis id varius. Etiam ac aliquet massa. Integer luctus eu ex eu molestie. Phasellus luctus tellus sit amet enim bibendum, eget efficitur tellus luctus. Integer eu dolor sed ipsum aliquam sollicitudin egestas non quam. Ut cursus sem orci, in pellentesque odio dapibus eget.
			</p>
			<p>
				Nulla rutrum mollis convallis. Fusce mattis elit arcu. Donec nec nisi a ante mollis viverra id a felis. Maecenas vel elit viverra, sollicitudin arcu in, eleifend quam. Integer blandit lorem vitae dui ullamcorper, eu gravida tellus posuere. Nulla ligula urna, tincidunt at mattis at, consectetur non felis. Nunc turpis leo, dictum eu sagittis non, vestibulum id ligula. Fusce magna nunc, lobortis vel nisl placerat, porta interdum turpis. Donec ut dui et justo hendrerit rhoncus eget vestibulum nulla. Vivamus hendrerit dolor nec massa maximus dapibus. Nam non lorem ut nibh pellentesque mattis vitae id lorem. Aenean condimentum magna nec egestas euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin aliquam congue fringilla. Fusce at nisi quis lorem tempor sollicitudin id eu tortor. Pellentesque vitae magna pulvinar, bibendum massa in, molestie lorem.
			</p>
		</div>
	</>
};

export default Farewell;