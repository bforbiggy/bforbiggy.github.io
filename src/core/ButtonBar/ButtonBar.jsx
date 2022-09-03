import React from "react"

import Menu from "./Menu/Menu"
const Bgm = React.lazy(() => import("./Music/BGM"));

const ButtonBar = () => {
	const [hidden, setHidden] = React.useState(false);

	return <div>
		<Menu setHidden={setHidden} />
		<Bgm hidden={hidden} />
	</div>
};

export default ButtonBar;