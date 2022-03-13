import styled from "@emotion/styled";

export const CommonLayoutHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  height: 60px;
  font-size: 1.6rem;
  background-color: #333;
  h1 {
    font-size: 0;
  }
`;

export const CommonLayoutNav = styled.nav`
  width: 100%;
`;
export const HeaderMenuLink = styled.a`
  text-decoration: none;
  color: white;
  padding: 10px;

  &:active {
  }
`;
export const HeaderMenuListItem = styled.li`
  width: 150px;
  margin: auto;
  text-align: center;
`;
export const HeaderMenuList = styled.ul`
  display: flex;
  height: 100%;
`;

export const CommonLayoutNavWrap = styled.div``;
