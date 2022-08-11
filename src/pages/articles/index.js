import { getAllArticles } from "lib/api";
import SectionArticles from "components/SectionArticles";

const Articles = ({ articles }) => <SectionArticles articles={articles} />;

export default Articles;

export async function getStaticProps({ locales }) {
  const articles = getAllArticles(locales);

  return {
    props: {
      articles,
    },
  };
}
