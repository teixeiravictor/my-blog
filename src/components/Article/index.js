import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";

import { prettyDate, timeToRead } from "lib/utils";

import * as S from "./styled";

const Article = ({ slug, permalink, date, title, description, content }) => {
  const { formatMessage: f } = useIntl();
  const router = useRouter();
  const { locale } = router;

  return (
    <S.ArticleWrapper>
      <S.ArticleTitle>
        <Link href={permalink} passHref>
          <S.ArticleLink>{title}</S.ArticleLink>
        </Link>
      </S.ArticleTitle>
      <S.ArticleDate dateTime={date}>
        {prettyDate(date, locale)} - {timeToRead(content)}{" "}
        {f({ id: "timeToRead" })}
      </S.ArticleDate>
      <S.ArticleDescription>{description}</S.ArticleDescription>
      <Link href={permalink} passHref>
        <S.ArticleLink>
          <FormattedMessage id="readMore" />
        </S.ArticleLink>
      </Link>
    </S.ArticleWrapper>
  );
};

export default Article;
