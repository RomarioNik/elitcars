import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Thumb = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: cover;
`;

export const Description = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  font-size: 42px;
  font-weight: 600;
  color: #fff;
  text-align: center;
`;

export const Titile = styled.h1`
  line-height: 1;
  color: #fff;
  user-select: none;
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #fff;
  user-select: none;
`;

export const NavLinkStyled = styled(NavLink)`
  color: #fff;
  padding: 12px 44px;
  font-size: 24px;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: #e10000;
  user-select: none;
`;
