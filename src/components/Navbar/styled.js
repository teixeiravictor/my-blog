import styled, { css } from "styled-components";

import media from "styles/media";
import transitions from "styles/transitions";

export const Background = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
    max-width: ${theme.grid.container};
    margin: 0 auto;
    width: 100%;
  `}
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NavbarMenu = styled.ul`
  ${({ theme, open }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.secondary};
    height: 100vh;
    padding: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    transition: ${transitions.TRANSFORM};
    transform: ${open ? "translateX(0)" : "translateX(100%)"};
    z-index: 1;
    width: 100%;

    ${media.tablet`
      flex-direction: row;
      justify-content: flex-end;
      position: static;
      height: auto;
      background: unset;
      transform: translateX(0);
      padding: 0;
    `}
  `}
`;

export const NavbarItem = styled.li`
  ${({ theme, active }) => css`
    margin-bottom: ${theme.spacings.small};
    width: 250px;

    ${media.tablet`
      margin-bottom: 0;
      margin-left: ${theme.spacings.medium};
      width: auto;
    `}

    position: relative;

    &::before,
    &::after {
      content: "";
      position: absolute;
      background: ${theme.colors.primary};
      transition: ${transitions.TRANSFORM};

      top: 0;
      width: 2px;
      height: 100%;
      transform: scale3d(1, 0, 1);
    }

    &::before {
      left: 0;
      transform-origin: 50% 100%;
    }

    &::after {
      right: 0;
      transform-origin: 50% 0%;
    }

    ${active &&
    css`
      &::before,
      &::after {
        transform: scale3d(1, 1, 1);
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 0.4s;
      }
    `}

    ${active &&
    css`
      &::after {
        transition-delay: 0s;
      }
    `}
  `}
`;

export const NavbarLink = styled.a`
  ${({ theme, active }) => css`
    cursor: pointer;
    color: ${active ? theme.colors.primary : theme.colors.black};
    font-weight: ${active ? theme.font.bold : "none"};
    text-decoration: none;
    padding: ${theme.spacings.xxsmall};
    transition: ${transitions.COLOR};

    &:hover,
    &:focus {
      color: ${theme.colors.darkPrimary};
    }

    position: relative;
    display: block;
    text-align: center;

    &::before,
    &::after {
      content: "";
      position: absolute;
      background: ${theme.colors.primary};
      transition: ${transitions.TRANSFORM};

      left: 0;
      width: 100%;
      height: 2px;
      transform: scale3d(0, 1, 1);
    }

    &::before {
      top: 0;
      transform-origin: 0 50%;
    }

    &::after {
      bottom: 0;
      transform-origin: 100% 50%;
    }

    ${active &&
    css`
      &::before,
      &::after {
        transform: scale3d(1, 1, 1);
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 0.4s;
      }
    `}

    ${active &&
    css`
      &::before {
        transition-delay: 0.2s;
      }

      &::after {
        transition-delay: 0.2s;
      }
    `}
  `}
`;

export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
`;
