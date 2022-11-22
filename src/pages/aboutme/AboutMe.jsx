import randomInteger from "random-int";
import React from "react";
import "./AboutMe.scss";
import styled, { keyframes } from "styled-components";

const snowflakes = [];
for (let i = 0; i < 200; i++) {
	let random_x = randomInteger(0, 100);
	let offset = randomInteger(-10, 10);
	let yoyo_time = randomInteger(30, 80);
	let random_scale = Math.random();

	const flakeAnimation = keyframes`
		${yoyo_time}% { transform: translate(${random_x + offset}vw, ${yoyo_time}vh) scale(${random_scale});}
    to { transform: translate(${random_x + offset / 2}vw, 100vh) scale(${random_scale});}
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
				Hello.
				<a href="https://www.youtube.com/watch?v=RuIXOBF0eyQ">Good morning,</a>
				<a href="https://www.youtube.com/watch?v=Pi9J4epTWGM">good evening,</a>
				<a href="https://www.youtube.com/watch?v=B3vsRXOSBqc">and goodbye.</a>
			</div>
		</div>
	);
};

// I'll never forget you three: Alice, Frank, Rachael
export default AboutMe;
