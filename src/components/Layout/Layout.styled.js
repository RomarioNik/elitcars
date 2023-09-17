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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 1;
  border-bottom: 1px solid #fff;
  background-color: ${({ theme, ismagemain }) =>
    ismagemain ? "transparent" : theme.color.bg};
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

export const MenuListItem = styled.li`
  align-self: center;
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${({ theme, ismagemain }) =>
    ismagemain ? "#fff" : theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ route, to }) => (route === to ? "bold" : "")};
  letter-spacing: 1px;
  user-select: none;
`;

export const LogoName = styled.span`
  color: #e10000;
`;

export const ThemeContainer = styled.div`
  display: ${({ ismagemain }) => (ismagemain ? "none" : "block")};
`;

export const Main = styled.main`
  position: relative;
  padding-top: 50px;
`;

export const Footer = styled.footer`
  height: 50px;
`;
