import styled from "@emotion/styled";
import CommonInput from "@src/components/client/common/CommonInput";

export const SearchBar = styled(CommonInput)<any>`
  width: 50%;
  height: 48px;
  background-color: #333;
  border: 1px solid #fff;
  box-sizing: border-box;
  border-radius: 24px;
  font-size: 1.6rem;
  padding: 0 54px 0 24px;
  outline: none;
  color: ${({ theme }) => theme.fontGray};
`;
