<<<<<<< Updated upstream
import React from "react";
import massCircles from "../../assets/mass-circles.svg";
=======
import { isMobile, randomInteger } from "../../core/Util";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import { networklines } from "../../assets/svgs";
>>>>>>> Stashed changes
import lightning from "../../assets/biglightning.png";
import "./AboutMe.scss";



const AboutMe = () => {


	return (
		<div className="aboutme" style={{ backgroundImage: `url(${massCircles})`, backgroundSize: "cover" }}>
			<div className="card" >
<<<<<<< Updated upstream
				<div className="bio">
					<h1>Programmer, Artist, Gamer, Person.</h1>
					<p>I'm a software engineer with 5 years of experience in the field, having worked on a wide range of projects that have honed my skills in software development and exposed me to various programming languages. Born and raised in NYC, I've always had a love for music, art, and physical fitness. I have a proficiency for playing the piano and enjoy drawing in my spare time. I stay active through working out and boxing, and occasionally indulge in some gaming as well. My diverse interests and dedication to continuous learning make me a well-rounded and valuable asset to any client.</p>
=======
				<div className="left">
					<h2>Programmer, Artist, Gamer, Person.</h2>
					<p>I'm a software engineer with 5 years of experience in the field, having worked on a wide range of projects that have honed my skills in software development and exposed me to various programming languages. Born and raised in NYC, I've always had a love for music, art, and physical fitness. I have a talent for playing the piano and enjoy drawing and painting in my spare time. I stay active through working out and boxing, and occasionally indulge in some gaming as well. My diverse interests and dedication to continuous learning make me a well-rounded and valuable asset to any client.</p>
>>>>>>> Stashed changes
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
