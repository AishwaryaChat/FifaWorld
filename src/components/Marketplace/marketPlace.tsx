import { Grid } from "@mui/material";
import styles from "./marketplace.module.css";
import Filters from "src/components/Filters/filters";
import { Container } from "@mui/system";
import NftListing from "./components/nftListing";
import DATA from "./data.json";
import { FilterContext } from "src/contexts/filterContext";
import { useCallback, useContext, useEffect, useState } from "react";
import {Pagination} from "@mui/material"

const MarketPlace = () => {
  const { filter: { search, range } } = useContext(FilterContext);
  const [listings, setListingData] = useState(DATA.listings)

  const filterListingData = useCallback(
    (filterKey: "search" | "range") => {
      let newData = []
      switch (filterKey) {
        case "search":
          newData = search !== ""
            ? listings.filter(({ title }) => title.toLowerCase() == search)
            : listings;
          break
        case "range":
          const { low, high } = range;
          newData = listings.filter(
            ({ lowestPrice }) => lowestPrice >= low && lowestPrice <= high
          );
          break
        default:
          newData = listings;
          break
      }
      return newData
    },
    [search, range]
  );


  useEffect(() => {
    const newListings = filterListingData("search")
    setListingData(newListings)
  }, [search]);

  useEffect(() => {
    const newListings = filterListingData("range")
    
    setListingData(newListings)
  }, [range.low, range.high]);
  return (
    <div>
      <h1 className={styles.title}>Marketplace</h1>
      <Container className={styles.container}>
        <Grid container spacing={1}>
          <Grid xs={4}>
            <Filters />
          </Grid>
          <Grid xs={8}>
            <div>
              <NftListing listingData={listings} />
              <Pagination count={10} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MarketPlace;
