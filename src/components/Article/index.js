import Link from "next/link";

import { prettyDate, timeToRead } from "lib/utils";

import * as S from "./styled";

const Article = ({ slug, permalink, date, title, description, content }) => (
  <S.ArticleWrapper>
    <S.ArticleTitle>
      <Link href={permalink} passHref>
        <S.ArticleLink>{title}</S.ArticleLink>
      </Link>
    </S.ArticleTitle>
    <S.ArticleDate dateTime={date}>
      {prettyDate(date)} - {timeToRead(content)}
    </S.ArticleDate>
    <S.ArticleDescription>{description}</S.ArticleDescription>
    <Link href={permalink} passHref>
      <S.ArticleLink>Leia mais →</S.ArticleLink>
    </Link>
  </S.ArticleWrapper>
);

export default Article;
