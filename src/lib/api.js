import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");

export function getAllArticles() {
  const slugs = fs.readdirSync(postsDirectory);
  const articles = slugs.map((slug) => getArticleBySlug(slug));

  return articles;
}

export function getArticleBySlug(slug) {
  if (!slug) return null;

  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { content, data } = matter(fileContents);

  return {
    slug: realSlug,
    permalink: `/articles/${realSlug}`,
    frontmatter: { ...data },
    content,
  };
}
