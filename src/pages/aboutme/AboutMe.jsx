import { isMobile, randomInteger } from "../../core/Util";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import lightning from "../../assets/biglightning.png";
import "./AboutMe.scss";

let flakeCount = isMobile() ? 50 : 200;

let snowflakes = [];
for (let i = 0; i < flakeCount; i++) {
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
	const [flakes, setFlakes] = useState([]);

	useEffect(() => {
		setFlakes(snowflakes);
	}, []);

	return (
		<div className="aboutme">
			<div className="snow" id="snow">{flakes}</div>
			<div className="card" >
				<div className="left">
					<h2>Programmer, Artist, Gamer, Person.</h2>
					<p>I'm a software engineer with 5 years of experience in the field, having worked on a wide range of projects that have honed my skills in software development and exposed me to various programming languages. Born and raised in NYC, I've always had a love for music, art, and physical fitness. I have a talent for playing the piano and enjoy drawing and painting in my spare time. I stay active through working out and boxing, and occasionally indulge in some gaming as well. My diverse interests and dedication to continuous learning make me a well-rounded and valuable asset to any client.</p>
				</div>

				<img src={lightning} alt="biggy" />
			</div>

			<div className="links">
				<a href="https://youtu.be/yk9X4WceY64">Rat Boy & IBDY - Who's Ready For Tomorrow</a>
				<a href="https://youtu.be/LyiGmDOznWM">La prière - 君よ</a>
				<a href="https://youtu.be/hGu_UevvEBA">Beach Weather - Chit Chat</a>
			</div>
		</div >
	);
};

// I'll never forget you three: Alice, Frank, Rachael
export default AboutMe;
