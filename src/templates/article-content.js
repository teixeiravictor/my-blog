import Prism from "prismjs";

import Link from "next/link";
import { useEffect } from "react";
import { NextSeo } from "next-seo";

import { prettyDate, timeToRead } from "lib/utils";

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
  useEffect(() => {
    Prism.highlightAll();
  }, [article]);

  return (
    <>
      <NextSeo
        title={`${article.frontmatter.title} - Victor Menezes`}
        description={article.frontmatter.excerpt}
        openGraph={{
          url: `https://victormenezes.com.br/${article.slug}`,
          title: `${article.frontmatter.title} - Victor Menezes`,
          description: article.frontmatter.excerpt,
        }}
      />
      <PostWrapper>
        <PostAside>
          <PostAuthor>{article.frontmatter.author}</PostAuthor>
          <PostDate>
            {prettyDate(article.frontmatter.createdAt)} •{" "}
            {timeToRead(article.content)}
          </PostDate>
          <Link href="/articles" passHref>
            <BackLink>← Voltar na listagem</BackLink>
          </Link>
        </PostAside>
        <PostContainer>
          <PostHeader>
            <PostTitle>{article.frontmatter.title}</PostTitle>
            <PostDescription>{article.frontmatter.excerpt}</PostDescription>
          </PostHeader>
          <MainContent>
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </MainContent>
        </PostContainer>
      </PostWrapper>
    </>
  );
};

export default ArticleContent;
