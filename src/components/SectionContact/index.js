import { FormattedMessage } from "react-intl";

import * as S from "./styled";

const SectionContact = () => (
  <S.Wrapper>
    <S.Container>
      <S.Title>
        <FormattedMessage id="contactTitle" />
      </S.Title>
      <S.Content>
        <FormattedMessage id="contactContent" />
      </S.Content>
      <S.Box>
        <S.BoxTitle>
          <FormattedMessage id="contactBoxTitle" />
        </S.BoxTitle>
        <S.BoxContent>
          <FormattedMessage id="contactBoxContent" />
        </S.BoxContent>
        <S.BoxLabel>
          <S.Link href="mailto:victormenezes8990@gmail.com">
            victormenezes8990@gmail.com
          </S.Link>
        </S.BoxLabel>
      </S.Box>
    </S.Container>
  </S.Wrapper>
);

export default SectionContact;
