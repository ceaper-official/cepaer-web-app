import React from "react";

import { firebase, getCurrentUser } from "@src/firebase";

import SideNav from "@components/nav/SideNav";
import SideNavItem from "@components/nav/SideNavItem";

export class Nav extends React.Component {
  constructor(props) {
    // Stateの定義
    super(props);
    this.state = {
      providerID: "",
    };
  }

  componentDidMount() {
    const user = firebase.auth().currentUser;
    if(user) {
      user.providerData.forEach((profile) => {
      this.setState({providerID: profile.providerId});
      });
    }
  };

  render() {
    const loginProvider = this.state.providerID;
    console.log(loginProvider);
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
          title="パスワードの変更"
          to="/edit/password"
          style={{ display: loginProvider !== "password" ? 'none' : '' }}
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
