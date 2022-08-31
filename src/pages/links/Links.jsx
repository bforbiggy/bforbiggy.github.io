import "../../styles/CoreStyles.scss";
import "./Links.scss";
import React from "react";
import { AiFillGithub, AiFillHeart } from "react-icons/ai";
import Flourish from "../../assets/flourish.svg";


const Links = () => {
	return (
		<div className="links-container">

			<div className="title">
				<h1>Links</h1>
				<img src={Flourish} alt="" />
			</div>

			<div className="linkedlist">


				<div className="link" >
					<AiFillGithub />
					<p>Github</p>
				</div>


				<div className="link">
					<AiFillHeart />
					<p>Onlyfans</p>
				</div>
			</div>
		</div>
	);
}

export default Links;