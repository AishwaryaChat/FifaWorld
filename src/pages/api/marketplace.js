import DATA from "src/data/data.json";

function filterByRange(data, low, high) {
  return data.filter(
    ({ lowestPrice }) => lowestPrice >= low && lowestPrice <= high
  );
}

function filterBySearch(data, search) {
  return data.filter(({ title }) => title.toLowerCase() == search);
}

export default function getMarketplaceData(req, res) {
  const {
    pageNumber,
    pageSize,
    search,
    range: { low, high },
  } = req.body;
  const { listings } = DATA;
  let filteredData = listings;
  if (search) {
    filteredData = filterBySearch(filteredData, search);
  }
  filteredData = filterByRange(filteredData, low, high);
  const totalPages = Math.ceil(filteredData.length / pageSize);
  const listingsData =
    pageNumber > totalPages
      ? []
      : filteredData.splice(pageSize * (pageNumber - 1), pageSize);
  return res.status(200).send({ listings: listingsData, totalPages });
}
