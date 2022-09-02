import "../../styles/CoreStyles.scss";
import "./Links.scss";
import React from "react";
import { AiFillGithub, AiOutlineMail, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode, SiDiscord } from "react-icons/si";
import { ReactComponent as Flourish } from "../../assets/flourish.svg";

const links = [
	{ text: "Email", icon: <AiOutlineMail />, url: "mailto:andyhecsp@gmail.com" },
	{ text: "Discord", icon: <SiDiscord />, url: "https://discordapp.com/users/187003715302064128" },
	{ text: "Twitter", icon: <AiOutlineTwitter />, url: "https://twitter.com/bforbiggy" },
	{ text: "Github", icon: <AiFillGithub />, url: "https://bforbiggy.github.io" },
	{ text: "LinkedIn", icon: <AiFillLinkedin />, url: "https://www.linkedin.com/in/andy-he-a31771242/" },
	{ text: "LeetCode", icon: <SiLeetcode />, url: "https://leetcode.com/bforbiggy/" },
];

const Links = () => {
	return (
		<div className="links-container">

			<div className="title">
				<p>Links</p>
				<Flourish />
			</div>

			<div className="linkedlist">
				{links.map((link) => (
					<a href={link.url} className="link">
						{link.icon}
						<p>{link.text}</p>
					</a>
				))}
			</div>
		</div>
	);
}

export default Links;