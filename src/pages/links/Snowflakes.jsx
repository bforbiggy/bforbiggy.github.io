import "./Snowflakes.scss";
import styled, { keyframes } from "styled-components";
import { isMobile, randomInteger } from "../../core/Util";


const Snowflakes = () => {
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

	return <div className="snow" id="snow">{snowflakes}</div>;
}

export default Snowflakes;