import styled, { css } from "styled-components";

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
`;

export const ColorBox = styled.div`
  width: 128px;
  margin-right: ${({ theme }) => theme.spacings.small};
`;

export const Color = styled.div`
  ${({ hex }) => css`
    background-color: ${hex};
    height: 128px;
    width: 100%;
    border: 1px solid;
  `}
`;

export const ColorName = styled.h5`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin: 1rem 0;
  `}
`;

export const ColorHex = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    margin: 1rem 0;
  `}
`;
