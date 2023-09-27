import { Outlet, useLocation } from "react-router-dom";
import Icon from "../Icon";
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
  ButtonStyled,
  Main,
} from "./Layout.styled";

const Layout = ({ toggleTheme }) => {
  const ismagemain = "/" === useLocation().pathname;
  const route = useLocation().pathname;

  return (
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
              <ButtonStyled onClick={toggleTheme}>Theme</ButtonStyled>
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
  );
};

export default Layout;
