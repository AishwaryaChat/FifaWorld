import { useCallback, useContext, useState } from "react";
import {
  TextField,
  IconButton,
  InputAdornment,
  Autocomplete,
} from "@mui/material";
import styles from "./search.module.css";
import { FilterContext } from "src/contexts/filterContext";
import SearchIcon from "@mui/icons-material/Search";
import {options as filterOptions} from "./contants"


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
    setFilter({ type: "UPDATE_SEARCH", data: searchText?.toLowerCase() });
  };
  const handleValueChange = (
    e: React.SyntheticEvent<Element, Event>,
    value: { id: string; label: string } | string | null
  ) => {
    setSelectedSearchText(value as string);
  };
  return (
    <div>
      <Autocomplete
        value={selectedSearchText}
        onChange={handleValueChange}
        inputValue={searchText}
        onInputChange={handleChange}
        id="combo-box-demo"

        classes={{
          inputRoot: styles["search-box"],
        }}
        options={filterOptions}
        sx={{ width: "80%" }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="eg: Netherland, USA"
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
