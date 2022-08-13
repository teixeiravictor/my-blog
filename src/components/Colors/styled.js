import styled, { css } from "styled-components";
import media from "styles/media";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: ${theme.spacings.medium};
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    margin-bottom: ${theme.spacings.medium};
    flex: 0 0 100%;
  `}
`;

export const ColorWrapper = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  flex-wrap: wrap;
`;

export const ColorBox = styled.div`
  margin-right: ${({ theme }) => theme.spacings.small};
  flex: 0 0 33%;

  ${media.tablet`    
    width: 128px;
    flex: none;
  `};
`;

export const Color = styled.div`
  ${({ hex }) => css`
    background-color: ${hex};
    height: 5em;
    border: 1px solid;

    ${media.tablet`    
      height: 128px;
      width: 100%;
    `};
  `}
`;

export const ColorName = styled.h5`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    margin: 1rem 0;

    ${media.tablet`    
      font-size: ${theme.font.sizes.small};
    `};
  `}
`;

export const ColorHex = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    margin: 1rem 0;
  `}
`;
