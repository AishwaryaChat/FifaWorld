import { useCallback, useContext, useState } from "react";
import Box from "@mui/material/Box";
import {
  TextField,
  IconButton,
  InputAdornment,
  Autocomplete,
} from "@mui/material";
import styles from "./search.module.css";
import { FilterContext } from "src/contexts/filterContext";
import SearchIcon from "@mui/icons-material/Search";

const options = ["netherland", "england"];

const SearchFilter = () => {
  const { setFilter } = useContext(FilterContext);
  const [searchText, setSearchText] = useState<string | undefined>("");
  const [selectedSearchText, setSelectedSearchText] = useState<string | null>(
    ""
  );
  const handleChange = useCallback(
    (e: React.SyntheticEvent<Element, Event>, value: string | undefined) => {
      setSearchText(value);
    },
    []
  );
  const handleSearch = () => {
    setFilter({ type: "UPDATE_SEARCH", data: searchText });
  };
  const handleValueChange = (
    e: React.SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    setSelectedSearchText(value);
  };
  return (
    <div>
      <Autocomplete
        value={selectedSearchText}
        onChange={handleValueChange}
        inputValue={searchText}
        onInputChange={handleChange}
        freeSolo
        id="combo-box-demo"
        classes={{
          inputRoot: styles["search-box"],
          groupLabel: styles["search-box"],
        }}
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="eg: Netherland, USA"
            classes={{ root: styles["search-box"] }}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <InputAdornment position="end">
                  {" "}
                  <IconButton
                    aria-label="search nft"
                    onClick={handleSearch}
                    onMouseDown={handleSearch}
                    edge="end"
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </div>
  );
};

export default SearchFilter;
