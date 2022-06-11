import { getArticleBySlug, getAllArticles } from "lib/api";
import markdownToHtml from "lib/markdownToHtml";

import ArticleContent from "templates/article-content";

const Article = (article) => <ArticleContent article={article} />;

export default Article;

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const article = getArticleBySlug(slug);
  const content = await markdownToHtml(article.content || "");

  return {
    props: {
      ...article,
      content,
    },
  };
}

export async function getStaticPaths() {
  const articles = getAllArticles();
  const paths = articles.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}
