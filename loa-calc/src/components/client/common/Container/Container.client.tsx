import React from "react";
import * as ES from "./styles";

const Container = ({ children, ...rest }: any) => {
  return <ES.Container {...rest}>{children}</ES.Container>;
};

export default Container;
