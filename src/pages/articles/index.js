import fs from "fs";

import { generateRss } from "lib/generateRSS";
import { getAllArticles } from "lib/api";

import SectionArticles from "components/SectionArticles";

const Articles = ({ articles }) => <SectionArticles articles={articles} />;

export default Articles;

export async function getStaticProps({ locales }) {
  const articles = getAllArticles(locales);

  if (process.env.NODE_ENV !== "development") {
    const rss = await generateRss(articles);
    fs.writeFileSync("./public/feed.xml", rss);
  }

  return {
    props: {
      articles,
    },
  };
}
