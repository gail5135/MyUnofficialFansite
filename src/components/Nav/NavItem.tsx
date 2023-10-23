import React from "react";
import { Link } from "react-router-dom";

interface NavItemPropsType {
  navRoute: string;
  navImg: string;
}

function NavItem(props: NavItemPropsType): React.ReactElement {
  const { navRoute, navImg } = props;

  return <Link className="main-nav-item" to={navRoute}><img src={navImg} alt={navRoute} /></Link>;
}

export default NavItem;
