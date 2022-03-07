import React, { useCallback, useReducer } from "react";
import { onlyParseInt } from "@src/utils/lib/validation";

export enum ActionTypes {
  ONLY_NUMBER = "ONLY_NUMBER",
  DEFAULT = "DEFAULT",
}
interface IUseInputAction {
  type: ActionTypes;
  value: string;
}

function useInputreducer(state: string, action: IUseInputAction) {
  switch (action.type) {
    case ActionTypes.ONLY_NUMBER:
      return onlyParseInt(action.value);
    default:
      return action.value;
  }
}

export default function useInputs(
  initialValue: string,
  valueType: ActionTypes = ActionTypes.DEFAULT
) {
  const [inputValue, dispatchInputValue] = useReducer(
    useInputreducer,
    initialValue as never
  );

  const onChange = useCallback((e) => {
    const { value } = e.target;
    dispatchInputValue({
      type: valueType,
      value: value,
    });
  }, []);

  const reset = useCallback(() => {
    dispatchInputValue({
      type: valueType,
      value: initialValue,
    });
  }, [inputValue]);

  return {
    useInputValue: inputValue,
    useInputOnChange: onChange,
    useInputReset: reset,
  };
}
