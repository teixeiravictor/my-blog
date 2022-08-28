import styled, { css } from "styled-components";

import transitions from "styles/transitions";
import media from "styles/media";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
    margin: 0 auto;
    max-width: ${theme.grid.container};
    width: 100%;

    ${media.tablet`    
      height: calc(100vh - 101px);
    `};
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
  flex: 100%;
  position: relative;
  margin-top: ${({ theme }) => theme.spacings.xlarge};
  margin-bottom: ${({ theme }) => theme.spacings.medium};

  ${media.tablet`
    flex: 40%;
  `};
  
  ${media.desktop`
    flex: 35%;	
  `}
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
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
  flex: 100%;

  ${media.tablet`
    padding-right: ${({ theme }) => theme.spacings.large};
    flex: 60%;
  `};

  ${media.desktop`
    padding-right: ${({ theme }) => theme.spacings.xlarge};
    flex: 65%;	
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    margin-bottom: ${theme.spacings.medium};

    ${media.tablet`
      font-size: ${theme.font.sizes.xlarge};
    `};

    ${media.desktop`
      font-size: ${theme.font.sizes.xxlarge};
    `};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: ${theme.font.regular};
    margin-bottom: ${theme.spacings.medium};

    ${media.tablet`
      font-size: ${theme.font.sizes.xsmall};
    `};
  `}
`;
