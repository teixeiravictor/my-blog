import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import { NextSeo } from "next-seo";

import { prettyDate, timeToRead } from "lib/utils";
import { BLOG_AUTHOR, BLOG_URL } from "lib/constants";
import { usePrismHighlight, useHeadings } from "lib/hooks";
import TableOfContents from "components/TableOfContents";
import ScrollToTop from "components/ScrollToTop";

import {
  PostWrapper,
  PostContainer,
  PostHeader,
  PostAside,
  PostTitle,
  PostAuthor,
  PostDescription,
  PostDate,
  MainContent,
  BackLink,
} from "styles/base";

const ArticleContent = ({ article }) => {
  const { title, excerpt, createdAt, author } = article.frontmatter;
  const pageTitle = `${title} - ${BLOG_AUTHOR}`;

  const { formatMessage: f } = useIntl();
  const { locale } = useRouter();

  usePrismHighlight(article);
  const { headings, activeId } = useHeadings(article);

  return (
    <>
      <NextSeo
        title={pageTitle}
        description={excerpt}
        openGraph={{
          url: `${BLOG_URL}/${article.slug}`,
          title: pageTitle,
          description: excerpt,
        }}
      />
      <PostWrapper>
        <PostAside>
          <PostAuthor>{author}</PostAuthor>
          <PostDate>
            {prettyDate(createdAt, locale)} -{" "}
            {timeToRead(article.content)} {f({ id: "timeToRead" })}
          </PostDate>
          <Link href="/articles" passHref>
            <BackLink>
              <FormattedMessage id="backToArticles" />
            </BackLink>
          </Link>
        </PostAside>
        <PostContainer>
          <PostHeader>
            <PostTitle>{title}</PostTitle>
            <PostDescription>{excerpt}</PostDescription>
          </PostHeader>
          <MainContent>
            <div
              data-article-content
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </MainContent>
        </PostContainer>
        <TableOfContents headings={headings} activeId={activeId} />
      </PostWrapper>
      <ScrollToTop />
    </>
  );
};

export default ArticleContent;
