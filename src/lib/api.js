import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = (locale) => join(process.cwd(), `_posts/${locale}`);

export function getAllArticles(locales) {
  const articles = [];

  locales.forEach((locale) => {
    const slugs = fs.readdirSync(postsDirectory(locale));
    slugs.forEach((slug) => {
      articles.push(getArticleBySlug(slug, locale));
    });
  });

  return articles;
}

export function getArticleBySlug(slug, locale) {
  if (!slug) return null;

  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory(locale), `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { content, data } = matter(fileContents);

  return {
    slug: realSlug,
    locale: data.lang,
    permalink: `/articles/${realSlug}`,
    frontmatter: { ...data },
    content,
  };
}
