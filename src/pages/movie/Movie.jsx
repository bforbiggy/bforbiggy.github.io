import "./Movie.scss";

const Movie = () => {
	return <div id="movie" className="movie">
		<iframe
			title="minions"
			src="https://archive.org/embed/minions-the-rise-of-gru-2022"
			frameborder="0"
			webkitallowfullscreen="true"
			mozallowfullscreen="true"
			allowfullscreen
		/>
	</div>;
}

export default Movie;