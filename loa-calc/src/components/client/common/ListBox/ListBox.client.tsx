import React from "react";
import * as ES from "./styles";

const ListBox = ({ children, ...rest }: any) => {
  return <ES.ListBox {...rest}>{children}</ES.ListBox>;
};

export default ListBox;
