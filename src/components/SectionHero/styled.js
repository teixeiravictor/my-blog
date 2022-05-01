import styled, { css } from "styled-components";

import transitions from "styles/transitions";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
    margin: 0 auto;
    max-width: ${theme.grid.container};
    width: 100%;
    height: calc(100vh - 85px);
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
`;

export const Picture = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: ${({ theme }) => theme.spacings.xxlarge};
  position: relative;
`;

export const Box = styled.div`
  width: 420px;
  height: 420px;
  border: 3px solid ${({ theme }) => theme.colors.secondary};
  margin: 0 auto;
  position: absolute;
  left: 1.25rem;
  top: 1.25rem;
  z-index: -1;
`;

export const FloatAnimation = styled.div`
  top: 0;
  left: 0;
  position: relative;
  transition: ${transitions.ALL};

  &:hover {
    top: -5px;
    left: -5px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
    margin-bottom: ${theme.spacings.medium};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.regular};
    margin-bottom: ${theme.spacings.medium};
  `}
`;
