import styled, { css } from "styled-components";
import transitions from "styles/transitions";

export const Button = styled.button`
  ${({ theme, visible }) => css`
    position: fixed;
    bottom: ${theme.spacings.medium};
    right: ${theme.spacings.medium};
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 1px solid ${theme.colors.secondary};
    background: transparent;
    color: ${theme.colors.secondary};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${visible ? "1" : "0"};
    pointer-events: ${visible ? "auto" : "none"};
    transition: opacity ${transitions.ALL}, color ${transitions.ALL},
      background ${transitions.ALL};
    z-index: 10;

    &:hover {
      background: ${theme.colors.secondary};
      color: ${theme.colors.black};
    }
  `}
`;
