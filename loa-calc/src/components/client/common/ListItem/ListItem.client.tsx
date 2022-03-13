import React from "react";
import * as ES from "./styles";

const ListItem = ({ children, ...rest }: any) => {
  return (
    <ES.ListItem {...rest}>
      <div>{children}</div>
    </ES.ListItem>
  );
};

export default ListItem;
