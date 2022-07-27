import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: ${theme.spacings.medium};
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    margin-bottom: ${theme.spacings.medium};
  `}
`;

export const Heading1 = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    margin: 1rem 0;
  `}
`;

export const Heading2 = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    margin: 1rem 0;
  `}
`;

export const Heading3 = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    margin: 1rem 0;
  `}
`;

export const Heading4 = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    margin: 1rem 0;
  `}
`;

export const Heading5 = styled.h5`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin: 1rem 0;
  `}
`;

export const Heading6 = styled.h6`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    margin: 1rem 0;
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    max-width: 50%;
    margin: 1rem 0;
  `}
`;

export const Small = styled.small`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxsmall};
    margin: 1rem 0;
  `}
`;
