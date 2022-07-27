import styled, { css } from "styled-components";

import transitions from "styles/transitions";

export const ArticleWrapper = styled.article`
  ${({ theme }) => css`
    border: 3px solid ${theme.colors.secondary};
    
    display: flex;
    flex-direction: column;

    padding: ${theme.spacings.medium};

    top: 0;
    left: 0;
    position: relative;
    transition: ${transitions.ALL};

    &:hover {
      top: -5px;
      left: -5px;
    }
  `}
`;

export const ArticleTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
  `}
`;

export const ArticleLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-decoration: none;
    transition: ${transitions.COLOR};

    &:hover {
      color: ${theme.colors.darkSecondary};
    }
  `}
`;

export const ArticleDate = styled.time`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxsmall};
    margin-top: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.medium};
    text-decoration: none;
  `}
`;

export const ArticleDescription = styled.p`
  ${({ theme }) => css`
    flex: 1;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxsmall};
    line-height: ${theme.font.lineHeight.medium};
    margin-bottom: ${theme.spacings.large};
  `}
`;
