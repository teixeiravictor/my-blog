import styled, { css } from "styled-components";
import transitions from "styles/transitions";

import media from "styles/media";
import prism from "styles/prism";

export const PostWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    margin: 0 auto;
    max-width: ${theme.grid.container};
    padding: ${theme.spacings.small};
    width: 100%;

    ${media.desktop`
      padding: ${theme.spacings.medium};
      grid-template-columns: 1fr 50ch 1fr;
    `};
  `}
`;

export const PostContainer = styled.div`
  grid-column: 1;

  ${media.desktop`
    grid-column: 2/3;
  `};
`;

export const PostHeader = styled.header`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall} auto;
    padding-bottom: ${theme.spacings.xsmall};
  `}
`;

export const PostAside = styled.aside`
  ${({ theme }) => css`
    margin: 0 ${theme.spacings.xsmall};
    align-self: start;

    ${media.desktop`
      margin: ${theme.spacings.xsmall} auto;
      position: sticky;
      top: ${theme.spacings.xsmall};
    `};
  `}
`;

export const PostTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 4rem;
    font-weight: 700;
    padding: 0 ${theme.spacings.xsmall};
    margin-bottom: 2rem;
  `}
`;

export const PostDescription = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 2rem;
    font-weight: 200;
    line-height: ${theme.spacings.small};
    padding: 0 ${theme.spacings.xsmall};
    border-left: solid ${theme.colors.secondary};
  `}
`;

export const BackLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    margin: ${theme.spacings.medium} 0;
    transition: ${transitions.COLOR};
    text-decoration: none;
    display: block;

    &:hover {
      color: ${theme.colors.darkSecondary};
    }

    ${media.desktop`
      font-size: ${theme.font.sizes.xxsmall};
    `};
  `}
`;

export const PostDate = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};

    ${media.desktop`
      font-size: ${theme.font.sizes.xxxsmall};
    `};
  `}
`;

export const PostAuthor = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    margin-bottom: ${theme.spacings.xxsmall};

    ${media.desktop`
      font-size: ${theme.font.sizes.xxsmall};
    `};
  `}
`;

export const MainContent = styled.section`
  ${({ theme }) => css`
    margin: auto;
    max-width: ${theme.grid.container};

    p,
    h1,
    h2,
    h3,
    h4,
    ul,
    ol,
    .tags,
    iframe,
    .button-post {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xxsmall};
      font-weight: 400;
      line-height: ${theme.font.lineHeight.large};
      padding: 0 ${theme.spacings.xsmall};

      ${media.desktop`
        line-height: ${theme.font.lineHeight.xlarge};
      `};
    }

    p {
      hyphens: auto;
      text-align: justify;
      margin: 0 auto ${theme.spacings.xsmall};
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
      margin: 2.4rem auto 1rem;
    }

    ul,
    ol {
      list-style: disc;
      padding-left: 2.5rem;
      margin: 0 auto 1.6rem;
    }

    li {
      padding: 0.625rem 0;

      & > ul {
        margin-bottom: 0;
      }
    }

    img {
      display: block;
      width: auto;
      max-width: 100%;
      margin: 1.875rem auto;
    }

    iframe {
      padding: 0 1.6rem 1.6rem;
      width: 100%;
    }

    blockquote {
      color: ${theme.colors.white};
      border-left: 0.3rem solid ${theme.colors.secondary};
      padding: 0 1.875rem;
      margin: 3.125rem auto;
    }

    hr {
      border: 1px solid ${theme.colors.secondary};
      margin: 3rem auto;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
      font-weight: 800;
      letter-spacing: 0.069rem;
      line-height: 1.4;
    }

    h1 {
      font-size: 2.8rem;
    }

    h2 {
      font-size: 2.1rem;
    }

    h3 {
      font-size: 1.6rem;
    }

    h4 {
      font-size: 1.4rem;
    }

    h5 {
      font-size: 1.2rem;
    }

    strong {
      font-weight: 700;
    }

    a {
      border-bottom: 1px dashed ${theme.colors.secondary};
      color: ${theme.colors.white};
      text-decoration: none;
      transition: opacity 0.5s;

      svg {
        color: ${theme.colors.secondary};
      }

      &:hover {
        opacity: 0.8;
      }
    }

    ${prism}
  `}
`;
