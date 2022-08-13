import { FormattedMessage } from "react-intl";

import content from "./content";
import * as S from "./styled";

const Colors = () => {
  const findByNameColor = (name) => content.find((item) => item.name === name);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>
          <FormattedMessage id="uiColors" />
        </S.Title>
        <S.ColorWrapper>
          {findByNameColor("Primary").colors.map((color) => (
            <S.ColorBox key={color.name}>
              <S.Color hex={color.hex} />
              <S.ColorName>{color.name}</S.ColorName>
              <S.ColorHex>{color.hex}</S.ColorHex>
            </S.ColorBox>
          ))}
        </S.ColorWrapper>
        <S.ColorWrapper>
          {findByNameColor("Secondary").colors.map((color) => (
            <S.ColorBox key={color.name}>
              <S.Color hex={color.hex} />
              <S.ColorName>{color.name}</S.ColorName>
              <S.ColorHex>{color.hex}</S.ColorHex>
            </S.ColorBox>
          ))}
        </S.ColorWrapper>
        <S.ColorWrapper>
          {findByNameColor("System").colors.map((color) => (
            <S.ColorBox key={color.name}>
              <S.Color hex={color.hex} />
              <S.ColorName>{color.name}</S.ColorName>
              <S.ColorHex>{color.hex}</S.ColorHex>
            </S.ColorBox>
          ))}
        </S.ColorWrapper>
        <S.ColorWrapper>
          {findByNameColor("Text").colors.map((color) => (
            <S.ColorBox key={color.name}>
              <S.Color hex={color.hex} />
              <S.ColorName>{color.name}</S.ColorName>
              <S.ColorHex>{color.hex}</S.ColorHex>
            </S.ColorBox>
          ))}
        </S.ColorWrapper>
      </S.Container>
    </S.Wrapper>
  );
};

export default Colors;
