import styled, { css } from "styled-components";
import transitions from "styles/transitions";

export const PostWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    /* grid-template-columns: 1fr; mobile */
    grid-template-columns: 1fr 50ch 1fr;
    gap: 3rem;
    margin: 0 auto;
    max-width: ${theme.grid.container};
    padding: ${theme.spacings.medium};
    width: 100%;
  `}
`;

export const PostContainer = styled.div`
  grid-column: 2/3;
`;

export const PostHeader = styled.header`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall} auto;
    padding-bottom: ${theme.spacings.xsmall};
  `}
`;

export const PostAside = styled.aside`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall} auto;
    align-self: start;
    position: sticky;
    top: ${theme.spacings.xsmall};
  `}
`;

export const PostTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 4rem;
    font-weight: 700;
    padding: 0 ${theme.spacings.xsmall};
    margin-bottom: 1rem;
  `}
`;

export const PostDescription = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 2rem;
    font-weight: 200;
    padding: 0 ${theme.spacings.xsmall};
  `}
`;

export const BackLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxsmall};
    margin: ${theme.spacings.medium} 0;
    transition: ${transitions.COLOR};
    text-decoration: none;
    display: block;

    &:hover {
      color: ${theme.colors.darkSecondary};
    }
  `}
`;

export const PostDate = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxsmall};
  `}
`;

export const PostAuthor = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: ${theme.font.bold};
    margin-bottom: ${theme.spacings.xxsmall};
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
      line-height: ${theme.font.lineHeight.xlarge};
      padding: 0 ${theme.spacings.xsmall};
    }

    p {
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

    p,
    li {
      code {
        word-wrap: break-word;
      }
    }

    code {
      background: #2d2d2d;
      color: white;
      padding: 0.1em;
      border-radius: 0.3em;
      white-space: normal;
      overflow-wrap: break-word;
      font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
    }

    pre > code {
      white-space: pre;
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
  `}
`;
