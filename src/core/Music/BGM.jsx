import React, { useState } from "react";

import "./BGM.scss";
import { TbMusic, TbMusicOff } from "react-icons/tb";
import backgroundMusic from "../../assets/searching.mp3";

const bgm = new Audio(backgroundMusic);
bgm.loop = true;

const BGM = () => {
	const [muted, setMuted] = useState(true);
	const toggleMute = () => {
		bgm.play();
		bgm.muted = !muted;
		setMuted(!muted);
	};

	return (
		<div className="muter">
			{muted ? <TbMusicOff onClick={toggleMute} /> : <TbMusic onClick={toggleMute} />}
		</div>
	);
}

export default BGM;