import React from "react";

import s from "./Dropdown.module.scss";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

render () {
  return (
    <div className={s.dropdown}>
      <div onClick={this.toggle} className={s.dropdown__button}>{this.props.button}</div>
       <div className={this.state.open ? s.open : s.hide}>
        <div className={s.dropdown__inner}>
          {this.props.children}
        </div>
      </div>
    </div>
  );
}
}

export default Dropdown;
