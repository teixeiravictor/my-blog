import { FormattedMessage } from "react-intl";

import * as S from "./styled";

const Typography = () => (
  <S.Wrapper>
    <S.Title>
      <FormattedMessage id="uiTypography" />
    </S.Title>
    <S.Heading1>Heading 1</S.Heading1>
    <S.Heading2>Heading 2</S.Heading2>
    <S.Heading3>Heading 3</S.Heading3>
    <S.Heading4>Heading 4</S.Heading4>
    <S.Heading5>Heading 5</S.Heading5>
    <S.Heading6>Heading 6</S.Heading6>
    <S.Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
      euismod, urna eu tincidunt consectetur, nisi nisl tincidunt nisi, eget
      consectetur nisl nisi vitae nisl.
    </S.Paragraph>
    <S.Small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</S.Small>
  </S.Wrapper>
);

export default Typography;
