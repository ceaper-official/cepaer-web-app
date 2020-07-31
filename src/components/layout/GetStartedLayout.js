import React from "react";
import Div100vh from 'react-div-100vh'

import GetStartedHeader from "@components/header/GetStartedHeader";
import Footer from "@components/footer/Footer";

import s from './BaseLayout.module.scss';

const GetStartedLayout = (props) => (
  <Div100vh className={s.layout}>
    <GetStartedHeader />
    <Div100vh className={s.flex__page}>
      {props.children}
    </Div100vh>
   </Div100vh>
);

export default GetStartedLayout;
