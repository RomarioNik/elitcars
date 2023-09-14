import styled from "styled-components";
import { NavLink } from "react-router-dom";

const savePadding = "15px";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  max-width: 1214px;
  margin: 0 auto;
  /* height: 100vh; */
  padding: 0 ${savePadding};
`;

export const Header = styled.header`
  position: relative;
  /* width: 100%; */
  height: 50px;
  padding: 0 ${savePadding};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 1;
  background-color: transparent;
`;

export const Logo = styled.div``;

export const Menu = styled.nav`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

export const MenuList = styled.ul`
  /* display: grid;
  grid-template-columns: 1fr repeat(3, auto) 1fr;
  grid-column-gap: 20px; */
  display: flex;
  gap: 20px;
`;

export const MenuListItem = styled.li`
  /* :nth-child(1) {
    grid-column-start: 2;
  }

  :nth-child(4) {
    margin-left: auto;
  } */
`;

export const NavLinkStyled = styled(NavLink)``;

export const ThemeContainer = styled.div`
  position: absolute;
  top: 50%;
  right: ${savePadding};
  transform: translate(0, -50%);
  /* flex: 1; */
  /* align-self: flex-end; */
  /* justify-self: end; */
  /* justify-items: flex-end; */
  /* margin-left: auto; */
  /* max-width: 100%; */
  /* flex-grow: 1; */
`;

export const Main = styled.main`
  /* flex-grow: 1; */
`;

export const Footer = styled.footer`
  height: 50px;
  padding: 0 ${savePadding};
`;
