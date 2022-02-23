export function FiltreCrowdfunding(data, filter) {
  const filteredData = data.filter((item) => item.categorie === filter);
  return filteredData;
}
export function FiltreCategory(data, filter) {
  const filteredData = data[filter];
  return filteredData;
}
