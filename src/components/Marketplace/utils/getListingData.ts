import LISTING_DATA from "./data.json";

const getListingData = ({
  pageNumber,
  pageSize,
}: {
  pageNumber: Number;
  pageSize: Number;
}) => {
  const { total, listings } = LISTING_DATA;
  const totalPages = Math.floor(total / pageSize);

  const listingsData = pageNumber > totalPages
  ? []
  : listings.splice(pageSize * (pageNumber-1), pageSize);
  return {listingsData, totalPages}
};

export default getListingData;
