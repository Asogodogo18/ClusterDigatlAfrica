export function FiltreCrowdfunding(data, filter) {
  const filteredData = data.filter((item) => item.categorie === filter);
  return filteredData;
}
