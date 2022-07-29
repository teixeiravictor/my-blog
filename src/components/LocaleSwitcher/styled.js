import styled, { css } from "styled-components";

import transitions from "styles/transitions";

export const Box = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-left: ${theme.spacings.large};
    position: relative;
    background: ${theme.colors.primary};
  `}
`;

export const List = styled.ul`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
  `}
`;

export const LocaleLink = styled.a`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.secondary};
    font-weight: ${theme.font.bold};
    text-decoration: none;
    padding: ${theme.spacings.xxsmall};
    transition: ${transitions.COLOR};

    &:hover {
      color: ${theme.colors.darkSecondary};
    }
  `}
`;
