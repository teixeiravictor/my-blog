import Image from "next/image";
import { FormattedMessage, useIntl } from "react-intl";

import * as S from "./styled";

import SocialLinks from "components/SocialLinks";

const SectionHero = () => {
  const { formatMessage: f } = useIntl();

  return (
    <S.Wrapper>
      <S.Container>
        <S.Info>
          <S.Title>
            <FormattedMessage id="heroTitle" />
          </S.Title>
          <S.Description>
            <FormattedMessage id="heroDescription" />
          </S.Description>
          <SocialLinks />
        </S.Info>
        <S.Picture>
          <S.FloatAnimation>
            <Image
              alt={`${f({ id: "heroCaption" })}`}
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
};

export default SectionHero;
