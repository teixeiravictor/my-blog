export const timeToRead = (text) => {
  const words = text.split(" ");
  const minutes = Math.ceil(words.length / 200);
  return minutes;
};

export const prettyDate = (date, locale) =>
  new Date(date).toLocaleString(locale, {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

export const unique = (val, index, self) => {
  return self.indexOf(val) === index;
};

export const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const mapHeadingElement = (h) => ({
  id: h.id,
  text: h.textContent,
  level: parseInt(h.tagName[1]),
});

export const getActiveHeadingId = (headingElements, scrollY, offset = 120) => {
  const scrollTop = scrollY + offset;
  let current = headingElements[0]?.id || "";
  for (const heading of headingElements) {
    if (heading.offsetTop <= scrollTop) {
      current = heading.id;
    }
  }
  return current;
};
