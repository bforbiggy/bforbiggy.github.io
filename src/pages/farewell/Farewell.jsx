import React from "react";
import "./Farewell.scss";

let snowflakes_count = 200;

function spawn_snow(snow_density = 200) {
	snow_density -= 1;
	for (let x = 0; x < snow_density; x++) {
		let board = document.createElement('div');
		board.className = "snowflake";

		document.getElementById('snow').appendChild(board);
	}
}

// Append style for each snowflake to the head
function add_css(rule) {
	let css = document.createElement('style');
	css.type = 'text/css';
	css.appendChild(document.createTextNode(rule));
	document.getElementsByTagName("head")[0].appendChild(css);
}

function random_int(value = 100) {
	return Math.floor(Math.random() * value) + 1;
}
function random_range(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function spawnSnowCSS(snow_density = 200) {
	let snowflake_name = "snowflake";
	let rule = ``;

	for (let i = 1; i < snow_density; i++) {
		let random_x = Math.random() * 50; // vw
		let random_offset = random_range(-100000, 100000) * 0.0001; // vw;
		let random_x_end = random_x + random_offset;
		let random_x_end_yoyo = random_x + (random_offset / 2);
		let random_yoyo_time = random_range(30000, 80000) / 100000;
		let random_yoyo_y = random_yoyo_time * 100; // vh
		let random_scale = Math.random();
		let fall_duration = random_range(10, 30) * 1; // s
		let fall_delay = random_int(30) * -1; // s
		let opacity_ = Math.random();

		rule += `
        .${snowflake_name}:nth-child(${i}) {
            opacity: ${opacity_};
            transform: translate(${random_x}vw, -10px) scale(${random_scale});
            animation: fall-${i} ${fall_duration}s ${fall_delay}s linear infinite;
        }

        @keyframes fall-${i} {
            ${random_yoyo_time * 100}% {
                transform: translate(${random_x_end}vw, ${random_yoyo_y}vh) scale(${random_scale});
            }

            to {
                transform: translate(${random_x_end_yoyo}vw, 100vh) scale(${random_scale});
            }
            
        }
        `
	}

	add_css(rule);
}

// Load the rules and execute after the DOM loads
window.onload = function () {
	spawnSnowCSS(snowflakes_count);
	spawn_snow(snowflakes_count);
};

const Farewell = () => {
	return <div className="boring-essay">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque eros eu est maximus dignissim. Donec suscipit hendrerit turpis, in mollis eros tincidunt vel. Quisque imperdiet, odio eget ultricies rutrum, felis justo luctus quam, quis vulputate ligula diam eu purus. Vestibulum suscipit a libero in ornare. Nam placerat id felis id varius. Etiam ac aliquet massa. Integer luctus eu ex eu molestie. Phasellus luctus tellus sit amet enim bibendum, eget efficitur tellus luctus. Integer eu dolor sed ipsum aliquam sollicitudin egestas non quam. Ut cursus sem orci, in pellentesque odio dapibus eget.
		</p>
		<p>
			Nulla rutrum mollis convallis. Fusce mattis elit arcu. Donec nec nisi a ante mollis viverra id a felis. Maecenas vel elit viverra, sollicitudin arcu in, eleifend quam. Integer blandit lorem vitae dui ullamcorper, eu gravida tellus posuere. Nulla ligula urna, tincidunt at mattis at, consectetur non felis. Nunc turpis leo, dictum eu sagittis non, vestibulum id ligula. Fusce magna nunc, lobortis vel nisl placerat, porta interdum turpis. Donec ut dui et justo hendrerit rhoncus eget vestibulum nulla. Vivamus hendrerit dolor nec massa maximus dapibus. Nam non lorem ut nibh pellentesque mattis vitae id lorem. Aenean condimentum magna nec egestas euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin aliquam congue fringilla. Fusce at nisi quis lorem tempor sollicitudin id eu tortor. Pellentesque vitae magna pulvinar, bibendum massa in, molestie lorem.
		</p>
		<div id="snow"></div>
	</div>
};

export default Farewell;