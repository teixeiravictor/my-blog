import content from "./content";
import * as S from "./styled";

const Colors = () => {
  const primary = content.find((item) => item.name === "Primary");
  const secondary = content.find((item) => item.name === "Secondary");
  const system = content.find((item) => item.name === "System");
  const text = content.find((item) => item.name === "Text");

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>UI / Colors</S.Title>
        <S.ColorWrapper>
          {primary.colors.map((color) => (
            <S.ColorBox key={color.name}>
              <S.Color hex={color.hex} />
              <S.ColorName>{color.name}</S.ColorName>
              <S.ColorHex>{color.hex}</S.ColorHex>
            </S.ColorBox>
          ))}
        </S.ColorWrapper>
        <S.ColorWrapper>
          {secondary.colors.map((color) => (
            <S.ColorBox key={color.name}>
              <S.Color hex={color.hex} />
              <S.ColorName>{color.name}</S.ColorName>
              <S.ColorHex>{color.hex}</S.ColorHex>
            </S.ColorBox>
          ))}
        </S.ColorWrapper>
        <S.ColorWrapper>
          {system.colors.map((color) => (
            <S.ColorBox key={color.name}>
              <S.Color hex={color.hex} />
              <S.ColorName>{color.name}</S.ColorName>
              <S.ColorHex>{color.hex}</S.ColorHex>
            </S.ColorBox>
          ))}
        </S.ColorWrapper>
        <S.ColorWrapper>
          {text.colors.map((color) => (
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
