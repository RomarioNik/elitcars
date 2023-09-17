import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Icon from "../Icon";
import theme from "../../constants/theme";
import {
  Container,
  Wrapper,
  Header,
  MenuWrapper,
  Menu,
  MenuList,
  MenuListItem,
  NavLinkStyled,
  LogoName,
  ThemeContainer,
  Main,
} from "./Layout.styled";

const Layout = () => {
  // const [currentTheme, setCurrentTheme] = useState("light");
  const [currentTheme] = useState("light");

  const ismagemain = "/" === useLocation().pathname;
  const route = useLocation().pathname;

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <Wrapper>
        <Header ismagemain={ismagemain}>
          <Container>
            <MenuWrapper>
              <Menu>
                <MenuList>
                  <MenuListItem>
                    <NavLinkStyled to="/" route={route} ismagemain={ismagemain}>
                      <span>
                        <Icon
                          id="icon-logo"
                          svgFill="#E10000"
                          svgWidth={24}
                          svgHeight={24}
                        />
                      </span>
                      <LogoName>Elit</LogoName>Cars
                    </NavLinkStyled>
                  </MenuListItem>
                  <MenuListItem>
                    <NavLinkStyled
                      to="/catalog"
                      route={route}
                      ismagemain={ismagemain}
                    >
                      Catalog
                    </NavLinkStyled>
                  </MenuListItem>
                  <MenuListItem>
                    <NavLinkStyled
                      to="/favorites"
                      route={route}
                      ismagemain={ismagemain}
                    >
                      Favorites
                    </NavLinkStyled>
                  </MenuListItem>
                </MenuList>
              </Menu>
              <ThemeContainer ismagemain={ismagemain}>
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
      </Wrapper>
    </ThemeProvider>
  );
};

export default Layout;
