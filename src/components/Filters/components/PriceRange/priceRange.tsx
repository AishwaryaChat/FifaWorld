import { useCallback, useContext, useState } from "react";
import {
  TextField,
  Button,
  Divider,
  InputLabel,
  InputAdornment,
} from "@mui/material";
import styles from "./pricerange.module.css";
import { FilterContext } from "src/contexts/filterContext";
import SearchIcon from "@mui/icons-material/Search";
const PriceRangeFilter = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100000);
  console.log("filter", filter);
  const handleApplyClick = useCallback(() => {
    setFilter({ type: "UPDATE_RANGE", data: { low, high } });
  }, [low, high, setFilter]);

  return (
    <div className={styles["price-range-container"]}>
      <h3>Price range</h3>
      <Divider />
      <div className={styles["price-range-filter-container"]}>
        <div>
          <InputLabel className={styles["text-box-label"]}>Low</InputLabel>
          <TextField
            sx={{ m: 1, width: "35ch", input: { color: "white" } }}
            value={low}
            onChange={(e) => setLow(Number(e.target.value))}
            className={styles["text-box"]}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  classes={{ root: styles["dollar-adornment"] }}
                >
                  $
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div>
          <InputLabel className={styles["text-box-label"]}>High</InputLabel>
          <TextField
            sx={{ m: 1, width: "35ch", input: { color: "white" } }}
            value={high}
            onChange={(e) => setHigh(Number(e.target.value))}
            className={styles["text-box"]}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                >
                  $
                </InputAdornment>
              ),
            }}
          />
        </div>
        <Button onClick={handleApplyClick} className={styles["apply-button"]}>
          Apply
        </Button>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
