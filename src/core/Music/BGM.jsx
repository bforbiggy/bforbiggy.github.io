import React, { useState } from "react";

import "./BGM.scss";
import { TbMusic, TbMusicOff } from "react-icons/tb";
import backgroundMusic from "../../assets/searching.mp3";

const bgm = new Audio(backgroundMusic);
bgm.loop = true;
bgm.volume = 0.5;

const BGM = ({ menu }) => {
	const [muted, setMuted] = useState(true);
	const toggleMute = () => {
		bgm.muted = !muted;
		bgm.muted ? bgm.pause() : bgm.play();
		setMuted(!muted);
	};

	return (
		<div className={`muter ${menu && "hide"}`}>
			{muted ? <TbMusicOff onClick={toggleMute} /> : <TbMusic onClick={toggleMute} />}
		</div>
	);
}

export default BGM;