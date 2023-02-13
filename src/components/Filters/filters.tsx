import SearchFilter from "./components/Search/search";
import PriceRangeFilter from "./components/PriceRange/priceRange";
import Box from "@mui/material/Box";
const Filters = () => {
  return (
    <div>
      <Box>
        <SearchFilter />
      </Box>
      <Box
        sx={{ flexGrow: 1, display: { xs: "none", sm: "flex", md: "flex" } }}
      >
        <PriceRangeFilter />
      </Box>
    </div>
  );
};

export default Filters;
