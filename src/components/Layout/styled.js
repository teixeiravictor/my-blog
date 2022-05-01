import styled, { css } from "styled-components";

export const LayoutWrapper = styled.section`
  display: flex;
`;

export const LayoutMain = styled.main`
  ${({ theme }) => css`
    /* padding: ${theme.spacings.medium}; */
    margin: 0 auto;
    width: 100%;
  `}
`;
