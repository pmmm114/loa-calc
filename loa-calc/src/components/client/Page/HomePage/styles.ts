import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Container from "@src/components/client/common/Container";
import { ListBox } from "@src/components/client/common/ListBox/styles";

export const HomePage = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

const CommonContainerStyle = (props: any) => css`
  justify-content: center;
  width: 100%;
`;

export const LogoContainer = styled(Container)`
  ${CommonContainerStyle};
  background-color: #fff;
  height: 300px;
`;

export const SearchContainer = styled(Container)`
  ${CommonContainerStyle};
  background-color: red;
  margin-top: 30px;
`;

export const PostContainer = styled(Container)`
  ${CommonContainerStyle};
  display: flex;
  background-color: green;
  margin-top: 40px;
  padding: 0 5rem;
`;

export const ListBoxWrap = styled.div`
  /* display: grid;
  width: 100%;
  background-color: orange;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 2rem; */
  display: flex;
  width: 100%;
  justify-content: space-between;

  ${ListBox} {
    width: 46%;
  }
`;

export const ListItemWrap = styled.ul`
  width: 100%;
`;
