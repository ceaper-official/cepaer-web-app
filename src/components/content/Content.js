import React from "react";

import Block from "@components/block/Block"
import Container from "@components/container/Container"

const Content = (props) => {
  return (
    <Block>
      <Container>
        {props.children}
      </Container>
    </Block>
  );
};

export default Content;
