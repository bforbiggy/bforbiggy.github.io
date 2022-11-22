import { HiMenu } from "react-icons/hi";
import "./MenuButton.scss"

const MenuButton = ({ menu, setMenu }) => {
	return <div className={`open-menu ${menu && 'hidden'}`} onClick={() => { setMenu(true) }}>
		<HiMenu />
	</div>;
}

export default MenuButton;