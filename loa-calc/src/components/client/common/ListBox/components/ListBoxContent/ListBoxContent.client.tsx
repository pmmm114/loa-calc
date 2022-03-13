import React from "react";
import * as ES from "./styles";

const ListBoxContent = ({ children, ...rest }: any) => {
  return <ES.ListBoxContent {...rest}>{children}</ES.ListBoxContent>;
};

export default ListBoxContent;
