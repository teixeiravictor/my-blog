import * as S from "./styled";

const SectionContact = () => (
  <S.Wrapper>
    <S.Container>
      <S.Title>Contact</S.Title>
      <S.Content>
        Sinta-se à vontade para me perguntar o que quiser. Qualquer dúvida serei
        grato em ajudar. Se estiver procurando por algo específico, ou se tiver
        alguma dificuldade.
      </S.Content>
      <S.Box>
        <S.BoxTitle>Só quer dizer oi?</S.BoxTitle>
        <S.BoxContent>
          Se houver alguma dúvida, basta escrever para mim. Ou, caso queira
          tratar de outro assunto.
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
