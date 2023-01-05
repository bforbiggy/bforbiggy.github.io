import { isMobile, randomInteger } from "../../core/Util";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import { networklines } from "../../assets/svgs";
import "./AboutMe.scss";
import Aboutters from "./Aboutters";

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
			<div className="boring-essay" style={{ backgroundImage: `url(${networklines})` }}>
				{Aboutters.map((paragraph, index) => <p key={`p${index}`} > {paragraph}</p>)}
				<a href="https://www.youtube.com/watch?v=RuIXOBF0eyQ">Chalili - La Vanille</a>
				<a href="https://www.youtube.com/watch?v=B3vsRXOSBqc">Eve - This World To You</a>
				<a href="https://www.youtube.com/watch?v=Pi9J4epTWGM">Rex Orange County - Pluto Projector</a>
			</div>
		</div >
	);
};

// I'll never forget you three: Alice, Frank, Rachael
export default AboutMe;
