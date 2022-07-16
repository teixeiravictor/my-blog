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

export const Content = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;

    ${media.tablet`
        width: 50%;
    `};
  `}
`;

export const Box = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    border-left: 2px solid ${theme.colors.secondary};
    padding-left: ${theme.spacings.small};
    margin-top: ${theme.spacings.large};

    ${media.tablet`
        padding-left: ${theme.spacings.large};
    `};
  `}
`;

export const BoxTitle = styled.h2`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
  `}
`;

export const BoxContent = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    margin: ${theme.spacings.small} 0;

    ${media.tablet`
        margin: ${theme.spacings.medium} 0;
        width: 30%;
    `};
  `}
`;

export const BoxLabel = styled.address`
  display: inline-block;
`;

export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxsmall};
    transition: ${transitions.ALL};

    &:hover {
      color: ${theme.colors.darkSecondary};
    }
  `}
`;
