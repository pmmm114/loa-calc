import React from "react";
import * as ES from "./styles";

const ListBoxTitle = ({ children, ...rest }: any) => {
  return <ES.ListBoxTitle {...rest}>{children}</ES.ListBoxTitle>;
};

export default ListBoxTitle;
