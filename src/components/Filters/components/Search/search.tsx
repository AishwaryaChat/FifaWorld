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

const options = [
  { id: "france", label: "France" },
  { id: "cameroon", label: "Cameroon" },
  { id: "egypt", label: "Egypt" },
  { id: "poland", label: "Poland" },
  { id: "england", label: "England" },
  { id: "australia", label: "Australia" },
  { id: "japan", label: "Japan" },
  { id: "argentina", label: "Argentina" },
  { id: "italy", label: "Italy" },
  { id: "usa", label: "USA" },
  { id: "portugal", label: "Portugal" },
  { id: "germany", label: "Germany" },
  { id: "sweden", label: "Sweden" },
  { id: "senegal", label: "Senegal" },
  { id: "south africa", label: "South Africa" },
  { id: "colombia", label: "Colombia" },
  { id: "nigeria", label: "Nigeria" },
  { id: "serbia", label: "Serbia" },
  { id: "netherlands", label: "Netherlands" },
  { id: "brazil", label: "Brazil" },
  { id: "morocco", label: "Morocco" },
  { id: "korea republic", label: "Korea Republic" },
];

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
