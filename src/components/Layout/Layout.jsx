import React from "react";
import { Outlet } from "react-router-dom";
import {
  Container,
  Wrapper,
  Header,
  Logo,
  Menu,
  MenuList,
  MenuListItem,
  NavLinkStyled,
  ThemeContainer,
  Main,
  Footer,
} from "./Layout.styled";

const Layout = () => {
  return (
    <Wrapper>
      <Header>
        {/* <Container> */}
        <Logo>
          <NavLinkStyled to="/">ElitCars</NavLinkStyled>
        </Logo>
        <Menu>
          <MenuList>
            <MenuListItem>
              <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
            </MenuListItem>
            <MenuListItem>
              <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
            </MenuListItem>
          </MenuList>
        </Menu>
        <ThemeContainer>
          <p>Theme</p>
        </ThemeContainer>
        {/* </Container> */}
      </Header>
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <Footer>footer</Footer>
    </Wrapper>
  );
};

export default Layout;
