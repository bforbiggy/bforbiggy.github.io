import "../../styles/CoreStyles.scss";
import "./Links.scss";
import { AiFillGithub, AiOutlineMail, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode, SiDiscord } from "react-icons/si";
import { isMobile, randomInteger } from "../../core/Util";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const links = [
	{ text: "Email", icon: <AiOutlineMail />, url: "mailto:andyhecsp@gmail.com" },
	{ text: "Discord", icon: <SiDiscord />, url: "https://discordapp.com/users/187003715302064128" },
	{ text: "Twitter", icon: <AiOutlineTwitter />, url: "https://twitter.com/bforbiggy" },
	{ text: "Github", icon: <AiFillGithub />, url: "https://github.com/bforbiggy" },
	{ text: "LinkedIn", icon: <AiFillLinkedin />, url: "https://www.linkedin.com/in/andy-he-a31771242/" },
	{ text: "LeetCode", icon: <SiLeetcode />, url: "https://leetcode.com/bforbiggy/" },
];

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

const Links = () => {
	const [flakes, setFlakes] = useState([]);

	useEffect(() => {
		setFlakes(snowflakes);
	}, []);

	return <>
		<div className="snow" id="snow">{flakes}</div>


		<div className="links-container">

			<h1>Links</h1>

			<div className="linkedlist">
				{links.map((link, index) => (
					<a href={link.url} className="link" style={{ animation: `link-entry ${0.5 + 0.05 * index}s linear` }} key={link.text}>
						<span class="dot"></span>
						{link.icon}
						<p>{link.text}</p>
					</a>
				))}
			</div>
		</div>
	</>;
}

export default Links;