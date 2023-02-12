import { Grid } from "@mui/material";
import styles from "./marketplace.module.css";
import Filters from "src/components/Filters/filters";
import { Container } from "@mui/system";
import NftListing from "./components/nftListing";
import { useState } from "react";
import DATA from "./data.json";

const MarketPlace = () => {
  const [listings, setListingData] = useState(DATA.listings);
  const filterListingData = () => {
    return listings;
  };
  return (
    <div>
      <h1 className={styles.title}>Marketplace</h1>
      <Container className={styles.container}>
        <Grid container spacing={2}>
          <Grid xs={3}>
            <Filters />
          </Grid>
          <Grid xs={9}>
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
