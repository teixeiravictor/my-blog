import styled, { css } from "styled-components";

import media from "styles/media";
import transitions from "styles/transitions";

export const Burger = styled.button`
  ${({ open }) => css`
    position: ${open ? "fixed" : "relative"};
    top: ${open ? "31px" : "0"};
    right: ${open ? "30px" : "0"};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 3rem;
    height: 3rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    margin-left: 2rem;

    &:focus {
      outline: none;
    }

    ${media.tablet`
      display: none;
    `};
  `}
`;

export const BurgerLine = styled.div`
  ${({ theme, open }) => css`
    width: 3rem;
    height: 0.25rem;
    background: ${theme.colors.primary};
    border-radius: 10px;
    transition: ${transitions.TRANSFORM};
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${open ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${open ? "0" : "1"};
      transform: ${open ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${open ? "rotate(-45deg)" : "rotate(0)"};
    }
  `}
`;
