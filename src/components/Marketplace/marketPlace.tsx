import { Grid } from "@mui/material";
import styles from "./marketplace.module.css";
import Filters from "src/components/Filters/filters";
import { Container } from "@mui/system";
import NftListing from "./components/nftListing";
import DATA from "./data.json";
import { FilterContext } from "src/contexts/filterContext";
import { useCallback, useContext, useEffect, useState } from "react";

const MarketPlace = () => {
  const { filter } = useContext(FilterContext);

  const [listings, setListingData] = useState(DATA.listings);
  const filterListingData = useCallback(() => {
    const { search } = filter;
    return search !== ""
      ? listings.filter(({ title }) => title.toLowerCase() === search)
      : listings;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter.search, filter.range, filter, listings]);
  useEffect(() => {
    const newListings = filterListingData();
    setListingData(newListings);
  }, [filter.search, filter.range, filterListingData]);
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
              <NftListing listingData={filterListingData()} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MarketPlace;
