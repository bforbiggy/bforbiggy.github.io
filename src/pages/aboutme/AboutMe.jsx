import randomInteger from "random-int";
import React from "react";
import "./AboutMe.scss";
import styled, { keyframes } from "styled-components";

const snowflakes = [];
for (let i = 0; i < 200; i++) {
	let random_x = randomInteger(0, 100); // vw
	let offset = randomInteger(-10, 10); // vw;
	let yoyo_time = randomInteger(30, 80);
	let random_scale = Math.random();

	// Ignore error highlights, this compiles
	const flakeAnimation = keyframes`
		${yoyo_time}% {
      transform: translate(${random_x + offset}vw, ${yoyo_time}vh) scale(${random_scale});
    }
    to {
      transform: translate(${random_x + offset / 2}vw, 100vh) scale(${random_scale});
    }
	`;

	let Flake = styled.div`
		filter:
			opacity: ${Math.max(0.1, Math.random())};
			transform: translate(${random_x}vw, -10px);
			animation: ${flakeAnimation} ${randomInteger(10, 30)}s ${-randomInteger(30)}s linear infinite;
	`;
	snowflakes.push(<Flake className="snowflake" key={`flake${i}`} />);
}

const AboutMe = () => {
	return (
		<div className="aboutme">
			<div className="snow">{snowflakes}</div>
			<div className="boring-essay">
				<p>waga baga bobo?</p>
				<a href="https://www.youtube.com/watch?v=RuIXOBF0eyQ">Song for two</a>
			</div>
		</div>
	);
};

export default AboutMe;
