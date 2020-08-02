const formatDate = (date) => {
  return `${new Date(date).getMonth() + 1}/${new Date(
    date
  ).getDate()}/${new Date(date).getFullYear()}`;
};

const formatPlural = (word, amount) => {
  if (amount !== 1) {
    return `${word}s`;
  }
  return word;
};

const formatUrl = (url) => {
  return url
    .replace()
    .replace("https://", "")
    .replace("www.", "")
    .split("/")[0]
    .split("?")[0];
};
