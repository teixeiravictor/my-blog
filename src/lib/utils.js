export const timeToRead = (text) => {
  const words = text.split(" ");
  const minutes = Math.ceil(words.length / 200);
  return `${minutes} min de leitura`;
};

export const prettyDate = (date) =>
  new Date(date).toLocaleString("pt-BR", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

export const unique = (val, index, self) => {
  return self.indexOf(val) === index;
};
