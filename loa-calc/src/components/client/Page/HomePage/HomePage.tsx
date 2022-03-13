import React from "react";
import * as ES from "./styles";

interface IPageHome {
  children: React.ReactNode;
}

const PageHome = ({ children, ...rest }: IPageHome) => {
  return <ES.HomePage {...rest}>{children}</ES.HomePage>;
};

export default PageHome;
