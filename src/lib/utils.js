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
