import styled, { css } from "styled-components";

import transitions from "styles/transitions";
import media from "styles/media";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: ${theme.grid.container};
    padding: ${theme.spacings.medium};
    width: 100%;
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
  `}
`;

export const CategoryList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: ${theme.spacings.medium} 0;
  `}
`;

export const Category = styled.li`
  ${({ theme, active }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    background-color: ${active ? theme.colors.secondary : "none"};
    color: ${active ? theme.colors.primary : theme.colors.white};

    border: 1px solid ${theme.colors.secondary};
    border-radius: ${theme.spacings.xsmall};

    font-size: ${theme.font.sizes.xxsmall};
    font-weight: ${theme.font.bold};

    margin-right: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.xsmall};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};

    transition: ${transitions.COLOR};

    &:focus {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.secondary};
    }

    ${media.desktop`
      &:hover {
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.primary};
      }
    `}
  `}
`;

export const ArticlesWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-row-gap: ${theme.spacings.xsmall};

    ${media.tablet`
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-column-gap: ${theme.spacings.medium};
      grid-row-gap: ${theme.spacings.medium};
    `};
  `}
`;
