import React from "react"

import Menu from "./Menu/Menu"
const Bgm = React.lazy(() => import("./Music/BGM"));

const ButtonBar = () => {
	const [menu, setMenu] = React.useState(false);

	return <div>
		<Menu menu={menu} setMenu={setMenu} />
		<Bgm menu={menu} setMenu={setMenu} />
	</div>
};

export default ButtonBar;