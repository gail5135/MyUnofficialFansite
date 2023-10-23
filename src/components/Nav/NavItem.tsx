import React from "react";

interface NavItemProps {
  navRoute: string;
  navImg: string;
}

function NavItem(props: NavItemProps): React.ReactElement {
  const { navRoute } = props;

  return <a href={navRoute}></a>;
}

export default NavItem;
