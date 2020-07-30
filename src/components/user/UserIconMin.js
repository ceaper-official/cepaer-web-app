import React from "react";

import { auth, firebase } from "@src/firebase";

import s from "./User.module.scss";

class UserIconMin extends React.Component {
  state = {
    user: null,
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }
  render() {
    return (
      <div className={s.user__icon__min}>
        <img src={this.state.user && this.state.user.photoURL} alt="user image" />
       </div>
    );
  }
}

export default UserIconMin;
