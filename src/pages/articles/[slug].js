import { getArticleBySlug, getAllArticles } from "lib/api";
import markdownToHtml from "lib/markdownToHtml";

import ArticleContent from "templates/article-content";

const Article = (article) => <ArticleContent article={article} />;

export default Article;

export async function getStaticProps({ params, locale }) {
  const slug = params.slug;
  const article = getArticleBySlug(slug, locale);
  const content = await markdownToHtml(article.content || "");

  return {
    props: {
      ...article,
      content,
    },
  };
}

export async function getStaticPaths({ locales }) {
  const articles = getAllArticles(locales);
  const paths = articles.map(({ slug, locale }) => ({
    params: { slug },
    locale,
  }));

  return {
    paths,
    fallback: false,
  };
}
