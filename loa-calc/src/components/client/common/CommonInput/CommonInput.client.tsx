import React, { useImperativeHandle } from "react";
import useInputs, { ActionTypes } from "@src/utils/hooks/useInput";
import * as ES from "./styles";

export interface ICommonInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: React.Ref<any>;
  inputType?: ActionTypes;
  valueFormatter?: (value: string | number) => string | number;
}

const Input = ({
  ref,
  inputType,
  valueFormatter = (value) => {
    return value;
  },
  ...rest
}: ICommonInputProps) => {
  const { useInputValue, useInputOnChange } = useInputs("", inputType);
  useImperativeHandle(
    ref,
    () => ({
      getValue: () => useInputValue,
    }),
    [useInputValue]
  );

  return (
    <>
      <ES.CommonInput
        onChange={(e) => useInputOnChange(e)}
        value={valueFormatter(useInputValue)}
        {...rest}
      />
    </>
  );
};

const CommonInput = React.forwardRef<HTMLInputElement, ICommonInputProps>(
  (props: ICommonInputProps, ref) => {
    const _Input = Input({ ...props, ref });
    return _Input;
  }
);
CommonInput.displayName = "CommonInput";
export default CommonInput;
