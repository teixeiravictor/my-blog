import styled, { css, keyframes } from "styled-components";

import media from "styles/media";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(2.4rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const expandX = keyframes`
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
`;

export const Wrapper = styled.section`
  ${({ theme }) => css`
    min-height: calc(100vh - 8rem);
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background-image: radial-gradient(
        circle,
        ${theme.colors.lightPrimary}44 1px,
        transparent 1px
      );
      background-size: 3.2rem 3.2rem;
      pointer-events: none;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.medium};
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.large};
    position: relative;
    z-index: 1;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.font.family.secondary};
    font-size: clamp(3.8rem, 7vw, ${theme.font.sizes.xxlarge});
    font-weight: 300;
    font-style: italic;
    line-height: 1.1;
    color: ${theme.colors.white};
    animation: ${fadeUp} 0.7s ease both;

    em {
      font-style: normal;
      color: ${theme.colors.secondary};
    }
  `}
`;

export const Divider = styled.span`
  ${({ theme }) => css`
    display: block;
    width: 5.6rem;
    height: 2px;
    background: ${theme.colors.secondary};
    transform-origin: left center;
    animation: ${expandX} 0.6s 0.2s ease both;
  `}
`;

export const Content = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    color: ${theme.colors.white};
    opacity: 0.6;
    line-height: ${theme.font.lineHeight.xlarge};
    animation: ${fadeUp} 0.7s 0.2s ease both;

    ${media.tablet`
      max-width: 48rem;
    `}
  `}
`;

export const Box = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    animation: ${fadeUp} 0.7s 0.35s ease both;
  `}
`;

export const BoxTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxsmall};
    font-weight: ${theme.font.bold};
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: ${theme.colors.secondary};
    opacity: 0.75;
  `}
`;

export const BoxContent = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    color: ${theme.colors.white};
    opacity: 0.5;
    line-height: ${theme.font.lineHeight.large};

    ${media.tablet`
      max-width: 38rem;
    `}
  `}
`;

export const BoxLabel = styled.address`
  font-style: normal;
`;

export const Link = styled.a`
  ${({ theme }) => css`
    display: inline-block;
    font-family: ${theme.font.family.secondary};
    font-size: clamp(2.4rem, 4.5vw, ${theme.font.sizes.large});
    font-style: italic;
    color: ${theme.colors.white};
    text-decoration: none;
    position: relative;
    line-height: 1.2;
    transition: color 0.35s ease;

    &::after {
      content: "";
      position: absolute;
      bottom: -0.3rem;
      left: 0;
      width: 100%;
      height: 1px;
      background: ${theme.colors.secondary};
      transform: scaleX(0);
      transform-origin: left center;
      transition: transform 0.4s ease;
    }

    &:hover {
      color: ${theme.colors.secondary};
    }

    &:hover::after {
      transform: scaleX(1);
    }
  `}
`;
