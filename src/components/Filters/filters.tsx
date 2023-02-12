import SearchFilter from "./components/Search/search";
import PriceRangeFilter from "./components/PriceRange/priceRange";
const Filters = () => {
  return (
    <div>
        <SearchFilter />
        <PriceRangeFilter />
    </div>
  );
};

export default Filters;
