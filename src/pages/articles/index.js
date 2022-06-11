import { getAllArticles } from "lib/api";
import SectionArticles from "components/SectionArticles";

const Articles = ({ articles }) => <SectionArticles articles={articles} />;

export default Articles;

export async function getStaticProps() {
  const articles = getAllArticles();

  return {
    props: {
      articles,
    },
  };
}
