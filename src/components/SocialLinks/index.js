import * as S from "./styled";

import links from "./content";
import Icons from "./Icons";

const SocialLinks = () => (
  <S.SocialList>
    {links.map((link, i) => {
      const Icon = Icons[link.label];

      return (
        <S.SocialItem key={i}>
          <S.SocialLink
            href={link.url}
            title={link.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.IconWrapper>
              <Icon />
            </S.IconWrapper>
          </S.SocialLink>
        </S.SocialItem>
      );
    })}
  </S.SocialList>
);

export default SocialLinks;
