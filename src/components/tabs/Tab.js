import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from "./Tabs.module.scss";

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
        icon,
      },
    } = this;

    let className = s.tab__list__item;
    if (activeTab === label) {
      className =  s.tab__list__active;
    }
    return (
      <span
        className={className}
        onClick={onClick}
      >
        {icon}
        {label}
      </span>
    );
  }
}

export default Tab;
