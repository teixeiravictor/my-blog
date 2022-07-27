import Image from "next/image";
import * as S from "./styled";

import SocialLinks from "components/SocialLinks";

const SectionHero = () => (
  <S.Wrapper>
    <S.Container>
      <S.Info>
        <S.Title>Hi. I'm Victor Menezes</S.Title>
        <S.Description>
          I'm a full-stack developer with a passion for building beautiful. I
          love to create things that make people's lives better. It's make me
          happy to be here. Also, I'm a big fan of the web.
        </S.Description>
        <SocialLinks />
      </S.Info>
      <S.Picture>
        <S.FloatAnimation>
          <Image
            alt="Foto de Perfil de Victor Menezes"
            src={`/assets/img/profile.jpeg`}
            width={420}
            height={420}
            layout="fixed"
            objectFit="cover"
          />
        </S.FloatAnimation>
        <S.Box />
      </S.Picture>
    </S.Container>
  </S.Wrapper>
);

export default SectionHero;
