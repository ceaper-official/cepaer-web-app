import React from "react";

import SideNav from "@components/nav/SideNav";
import SideNavItem from "@components/nav/SideNavItem";

export class Nav extends React.Component {
  render() {
    return (
      <SideNav>
        <SideNavItem
          title="プロフィール"
          to="/edit"
        />
        <SideNavItem
          title="アカウント情報"
          to="/edit/account"
        />
        <SideNavItem
          title="パスワード"
           to="/edit/password"
          />
          <SideNavItem
           title="ソーシャルメディア"
            to="/edit/social"
          />
          <SideNavItem
           title="アカウントの削除"
            to="/edit/delete"
          />
        </SideNav>
    );
  }
}

export default Nav;
