import styled, { css } from "styled-components";

import transitions from "styles/transitions";

export const SocialList = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SocialItem = styled.div`
  margin-right: ${({ theme }) => theme.spacings.small};
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  transition: ${transitions.ALL};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const IconWrapper = styled.div`
  height: 35px;
  width: 35px;
`;
