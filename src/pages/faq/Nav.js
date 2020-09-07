import React from "react";

import SideNav from "@components/nav/SideNav";
import SideNavItem from "@components/nav/SideNavItem";

export class EditNav extends React.Component {
  render() {
    return (
      <SideNav>
        <SideNavItem
          title="Ceaperについて"
          to="/"
        />
        <SideNavItem
          title="アカウント"
          to="/faq/account"
        />
        <SideNavItem
          title="サポート"
           to="/faq/account"
          />
        </SideNav>
    );
  }
}

export default EditNav;
