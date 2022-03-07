/**
 * 문자열에 공백 및 빈값 존재하는지 체크
 */
export function isOnlyWhiteSpaceCheck(inputValue: string): boolean {
  const regExp = new RegExp("^\\s*$", "g");

  return regExp.test(inputValue);
}

export function onlyParseInt(valueToString = "") {
  const parseValue = parseInt(valueToString.replace(/[^\d]+/g, ""), 10);
  return Number.isNaN(parseValue) ? 0 : parseValue;
}

/**
 * 숫자 값만 입력
 */
const numberFormatterType = {
  number: "number",
};
type numberFormatterType =
  typeof numberFormatterType[keyof typeof numberFormatterType];
export function numberFormat(data: string | number, type: numberFormatterType) {
  const valueToString = typeof data === "number" ? data.toString() : data;
  let valueToInt = 0;

  valueToInt = onlyParseInt(valueToString);
  if (Number.isNaN(valueToInt)) {
    valueToInt = 0;
  }
  return valueToInt.toLocaleString();
}
