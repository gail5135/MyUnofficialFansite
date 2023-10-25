import { Link } from "react-router-dom";
import mainHeaderImg from "../../assets/images/main-header.jpg";
import "./header.scss";

function Header() {
	return (
		<Link className="main-nav-item" to={"/"}>
			<header className="main-header">
				<img src={mainHeaderImg} alt="main-header-img" className="main-header-img" />
			</header>
		</Link>
	);
}

export default Header;
