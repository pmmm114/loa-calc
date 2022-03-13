import React from "react";
import * as ES from "./styles";

interface ICommonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: any;
  onClick: () => void;
}
const CommonButton = ({
  children,
  type = "button",
  onClick,
  ...rest
}: ICommonButtonProps) => {
  return (
    <ES.CommonButton type={type} onClick={onClick} {...rest}>
      {children}
    </ES.CommonButton>
  );
};

export default CommonButton;
