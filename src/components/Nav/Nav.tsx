import './nav.scss';
import NavItem from "./NavItem";
import navProfileImg from "../../assets/images/nav-profile.gif";
import navDiscographyImg from "../../assets/images/nav-discography.gif";

const NAV_ROUTE = {
  PROFILE: "/profile",
  DISCOGRAPHY: "/discography",
}

const NAV_IMAGE = {
  PROFILE: navProfileImg,
  DISCOGRAPHY: navDiscographyImg,
}

function Nav() {
  return ( 
    <nav className="main-navigator">
      <NavItem navRoute={NAV_ROUTE.PROFILE} navImg={NAV_IMAGE.PROFILE}/>
      <NavItem navRoute={NAV_ROUTE.DISCOGRAPHY} navImg={NAV_IMAGE.DISCOGRAPHY}/>
    </nav>
  );
}

export default Nav;
