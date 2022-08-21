import styled, { css } from "styled-components";

import media from "styles/media";
import transitions from "styles/transitions";

export const Box = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    position: relative;
    background: ${theme.colors.primary};

    ${media.tablet`
      margin-left: ${theme.spacings.medium};
    `}
  `}
`;

export const List = styled.ul`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};

    flex: 1;
  `}
`;

export const LocaleLink = styled.a`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.secondary};
    font-weight: ${theme.font.bold};
    text-decoration: none;
    transition: ${transitions.COLOR};
    text-align: center;
    display: block;

    &:hover {
      color: ${theme.colors.darkSecondary};
    }
  `}
`;
