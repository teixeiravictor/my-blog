import styled, { css } from "styled-components";
import media from "styles/media";

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    display: none;

    ${media.desktop`
      display: flex;
      flex-direction: column;
      gap: ${theme.spacings.xsmall};
      grid-column: 3;
      position: sticky;
      top: ${theme.spacings.xsmall};
      align-self: start;
      padding-top: ${theme.spacings.xsmall};
    `}
  `}
`;

export const Label = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxxsmall};
    font-weight: ${theme.font.bold};
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: ${theme.colors.secondary};
    opacity: 0.65;
  `}
`;

export const List = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  border-left: 1px solid rgba(180, 255, 254, 0.15);
`;

export const Link = styled.a`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.xxxsmall};
    color: ${theme.colors.white};
    text-decoration: none;
    opacity: 0.4;
    line-height: 1.45;
    padding: 0.35rem 0 0.35rem 1.2rem;
    border-left: 2px solid transparent;
    margin-left: -1px;
    transition: color 0.2s ease, opacity 0.2s ease, border-left-color 0.2s ease;

    &[data-level="2"] {
      padding-left: 2rem;
    }

    &[data-level="3"] {
      padding-left: 2.8rem;
    }

    &[data-active="true"] {
      color: ${theme.colors.secondary};
      opacity: 1;
      border-left-color: ${theme.colors.secondary};
    }

    &:hover {
      opacity: 0.75;
      color: ${theme.colors.secondary};
    }
  `}
`;
