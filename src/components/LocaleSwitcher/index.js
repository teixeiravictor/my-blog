import Link from "next/link";
import { useRouter } from "next/router";

import * as S from "./styled";

const LocaleSwitcher = () => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales.filter((locale) => locale !== activeLocale);

  return (
    <S.Box>
      <S.List>
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router;
          return (
            <li key={locale}>
              <Link href={{ pathname, query }} as={asPath} locale={locale}>
                <S.LocaleLink>{locale}</S.LocaleLink>
              </Link>
            </li>
          );
        })}
      </S.List>
    </S.Box>
  );
};

export default LocaleSwitcher;
