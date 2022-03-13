import styled from "@emotion/styled";
import CommonInput from "@src/components/client/common/CommonInput";
import CommonButton from "@src/components/client/common/CommonButton";

export const SearchBar = styled(CommonInput)`
  width: 100%;
  height: 100%;
  background-color: #333;
  border: 1px solid #fff;
  box-sizing: border-box;
  border-radius: 24px;
  font-size: 1.6rem;
  padding: 0 5.4rem 0 2.4rem;
  outline: none;
  color: ${(props) => props.theme.fontGray};
`;

export const SearchBarWrap = styled.div`
  position: relative;
  width: 50%;
  height: 46px;
`;

export const SearchBarButton = styled(CommonButton)`
  top: 50%;
  right: 2.7rem;
  transform: translate(50%, -50%);
  position: absolute;
  width: 2rem;
  height: 2rem;
  padding: 0;
`;
