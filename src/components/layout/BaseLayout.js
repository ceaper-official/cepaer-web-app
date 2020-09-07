import React from "react";

import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";

import s from './BaseLayout.module.scss';

const BaseLayout = (props) => (
  <div className={s.layout}>
    <Header />
    <div className={` ${s.page} ${props.article ? s.article : ''} `}>
      {props.children}
    </div>
    <Footer />
   </div>
);

export default BaseLayout;
