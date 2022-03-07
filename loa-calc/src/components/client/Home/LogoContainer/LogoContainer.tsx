import React from "react";
import * as ES from "./styles";

// interface IPageHome {
//   children: React.ReactNode;
// }

const LogoContainer = ({ children, ...rest }: any) => {
  return (
    <ES.LogoCotainer>
      <ES.Logo>Logo</ES.Logo>
    </ES.LogoCotainer>
  );
};

export default LogoContainer;
