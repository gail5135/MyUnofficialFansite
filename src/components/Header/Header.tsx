import mainHeaderImg from "../../assets/images/main-header.jpg";
import "./header.scss";

function Header() {
  return (
    <header className="main-header">
      <img
        src={mainHeaderImg}
        alt="main-header-img"
        className="main-header-img"
      />
    </header>
  );
}

export default Header;
