import "../../styles/CoreStyles.scss";
import "./Links.scss";
import React from "react";
import { AiFillGithub, AiFillHeart, AiOutlineMail } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { FaDiscord } from "react-icons/fa"
import Flourish from "../../assets/flourish.svg";

const links = [
	{ text: "Email", icon: <AiOutlineMail />, url: "mailto:andyhecsp@gmail.com" },
	{ text: "Discord", icon: <FaDiscord />, url: "https://discordapp.com/users/187003715302064128" },
	{ text: "Github", icon: <AiFillGithub />, url: "https://bforbiggy.github.io" },
	{ text: "LeetCode", icon: <SiLeetcode />, url: "https://leetcode.com/bforbiggy/" },
	{ text: "Onlyfans", icon: <AiFillHeart />, url: "https://www.onlyfans.com/biggy" },
];

const Links = () => {
	return (
		<div className="links-container">

			<div className="title">
				<h1>Links</h1>
				<img src={Flourish} alt="" />
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