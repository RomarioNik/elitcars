import React from "react";
import { Outlet } from "react-router-dom";
import {
  Container,
  Wrapper,
  Header,
  MenuWrapper,
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
        <Container>
          <MenuWrapper>
            <Menu>
              <MenuList>
                <MenuListItem>
                  <NavLinkStyled to="/">ElitCars</NavLinkStyled>
                </MenuListItem>
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
          </MenuWrapper>
        </Container>
      </Header>
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <Footer>
        <Container>footer</Container>
      </Footer>
    </Wrapper>
  );
};

export default Layout;
