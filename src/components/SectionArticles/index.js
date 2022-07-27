import { useState, useMemo } from "react";
import { unique } from "lib/utils";

import * as S from "./styled";
import Article from "components/Article";

const SectionArticles = ({ articles }) => {
  const [currentCategory, setCurrentCategory] = useState("");

  const handleCategory = (category) => {
    setCurrentCategory(category);
  };

  articles.sort(
    (article1, article2) =>
      new Date(article2.frontmatter.createdAt) -
      new Date(article1.frontmatter.createdAt)
  );

  const articleList = articles.filter(
    (article) => article.frontmatter.categories !== null
  );

  const categories = articleList
    .map((article) => article.frontmatter.categories)
    .filter(unique);

  const getArticlesByCategory = (category) =>
    articleList.filter(
      (article) => article.frontmatter.categories === category
    );

  const filteredArticles = useMemo(
    () =>
      currentCategory ? getArticlesByCategory(currentCategory) : articleList,
    [currentCategory]
  );

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Articles</S.Title>
        <S.CategoryList>
          <S.Category
            active={currentCategory === ""}
            onClick={() => handleCategory("")}
          >
            Todos
          </S.Category>
          {categories.map((category, i) => (
            <S.Category
              key={i}
              active={category === currentCategory}
              onClick={() => handleCategory(category)}
            >
              {category}
            </S.Category>
          ))}
        </S.CategoryList>
        <S.ArticlesWrapper>
          {filteredArticles.map((article, i) => (
            <Article
              key={i}
              slug={article.slug}
              permalink={article.permalink}
              title={article.frontmatter.title}
              date={article.frontmatter.createdAt}
              description={article.frontmatter.excerpt}
              content={article.content}
            />
          ))}
        </S.ArticlesWrapper>
      </S.Container>
    </S.Wrapper>
  );
};

export default SectionArticles;
