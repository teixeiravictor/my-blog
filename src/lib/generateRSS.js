import { BLOG_URL, BLOG_TITLE, BLOG_SUBTITLE } from "lib/constants";

import markdownToHtml from "lib/markdownToHtml";

export async function generateRssItem(article) {
  const content = await markdownToHtml(article.content || "");

  return `
    <item>
      <guid>${BLOG_URL}/${article.frontmatter.lang}/articles/${article.slug}</guid>
      <title>${article.frontmatter.title}</title>
      <description>${article.frontmatter.excerpt}</description>
      <link>${BLOG_URL}/${article.frontmatter.lang}/articles/${article.slug}</link>
      <pubDate>${new Date(article.frontmatter.createdAt).toUTCString()}</pubDate>
      <content:encoded><![CDATA[${content}]]></content:encoded>
    </item>
  `;
}

export async function generateRss(articles) {
  const itemsList = await Promise.all(articles.map(generateRssItem));

  return `
    <rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" version="2.0">
      <channel>
        <title>${BLOG_TITLE}</title>
        <link>${BLOG_URL}</link>
        <description>${BLOG_SUBTITLE}</description>
        <language>en</language>
        <lastBuildDate>${new Date(articles[0].frontmatter.createdAt).toUTCString()}</lastBuildDate>
        <atom:link href="${BLOG_URL}" rel="self" type="application/rss+xml"/>
        ${itemsList.join("")}
      </channel>
    </rss>
  `;
}
