import SearchFilter from "./components/Search/search";
import FilterContextProvider from "src/contexts/filterContext";

const Filters = () => {
  return (
    <div>
      <FilterContextProvider>
        <SearchFilter />
      </FilterContextProvider>
    </div>
  );
};

export default Filters;
