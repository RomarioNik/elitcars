import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  max-width: 1214px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Header = styled.header`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 1;
  background-color: transparent;
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div``;

export const Menu = styled.nav`
  display: flex;
  flex-grow: 1;
`;

export const MenuList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const MenuListItem = styled.li``;

export const NavLinkStyled = styled(NavLink)``;

export const ThemeContainer = styled.div``;

export const Main = styled.main``;

export const Footer = styled.footer`
  height: 50px;
`;
