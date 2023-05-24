import React from "react"

import MenuButton from "./Menu/MenuButton"
const Bgm = React.lazy(() => import("./Music/BGM"));

const ButtonBar = ({ menu, setMenu }) => {
	return <div class="buttonbar">
		<MenuButton menu={menu} setMenu={setMenu} />
		<Bgm menu={menu} setMenu={setMenu} />
	</div>
};

export default ButtonBar;