import styled, { css } from "styled-components";

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
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarGroup = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavbarItem = styled.li`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.medium};
  `}
`;

export const NavbarLink = styled.a`
  ${({ theme, active }) => css`
    cursor: pointer;
    border: ${active ? `2px solid ${theme.colors.primary}` : "none"};
    color: ${active ? theme.colors.primary : theme.colors.black};
    font-weight: ${active ? theme.font.bold : "none"};
    text-decoration: none;
    padding: ${theme.spacings.xxsmall};
    transition: ${transitions.COLOR};

    &:hover {
      color: ${theme.colors.darkPrimary};
    }
  `}
`;

export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
`;
