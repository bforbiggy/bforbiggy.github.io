import "../../styles/CoreStyles.scss";
import "./Links.scss";
import { AiFillGithub, AiOutlineMail, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode, SiDiscord } from "react-icons/si";
import React, { lazy, Suspense } from 'react';
const Snowflakes = lazy(() => import('./Snowflakes'));

const links = [
	{ text: "Email", icon: <AiOutlineMail />, url: "mailto:andyhecsp@gmail.com" },
	{ text: "Discord", icon: <SiDiscord />, url: "https://discordapp.com/users/187003715302064128" },
	{ text: "Twitter", icon: <AiOutlineTwitter />, url: "https://twitter.com/bforbiggy" },
	{ text: "Github", icon: <AiFillGithub />, url: "https://github.com/bforbiggy" },
	{ text: "LinkedIn", icon: <AiFillLinkedin />, url: "https://www.linkedin.com/in/andy-he-a31771242/" },
	{ text: "LeetCode", icon: <SiLeetcode />, url: "https://leetcode.com/bforbiggy/" },
];



const Links = () => {
	return <>
		<Suspense >
			<Snowflakes />
		</Suspense>

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