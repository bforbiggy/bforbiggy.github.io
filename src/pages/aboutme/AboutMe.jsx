import { isMobile, randomInteger } from "../../core/Util";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import { networklines } from "../../assets/svgs";
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
				<div className="cardcontent" style={{ backgroundImage: `url(${networklines})` }}>
					<h2>Andy He</h2>
					<p>I've a software engineer with 5 years of experience who loves to code new things all the time! My life started in the one and only New York City which is good, because some of the best ramen shops are in NYC! In my spare time I enjoy my hobbies like working out or boxing for exercise, coding for my brain and playing the piano for my creative side. </p>
				</div>
				<div className="links">
					<a href="https://www.youtube.com/watch?v=RuIXOBF0eyQ">Chalili - La Vanille</a>
					<a href="https://www.youtube.com/watch?v=B3vsRXOSBqc">Eve - This World To You</a>
					<a href="https://www.youtube.com/watch?v=Pi9J4epTWGM">Rex Orange County - Pluto Projector</a>
				</div>
			</div>
		</div >
	);
};

// I'll never forget you three: Alice, Frank, Rachael
export default AboutMe;
