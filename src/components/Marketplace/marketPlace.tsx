import { Grid } from "@mui/material";
import styles from "./marketplace.module.css";
import Filters from "src/components/Filters/filters";
import { Container } from "@mui/system";
import NftListing from "./components/nftListing";
import { FilterContext } from "src/contexts/filterContext";
import { useCallback, useContext, useEffect, useState } from "react";
import ErrorComponent from "src/common/components/ErrorSnackbar/errorSnackbar";
import Pagination from "src/common/components/Pagination/pagination";

const MarketPlace = () => {
  const {
    filter: { search, range },
  } = useContext(FilterContext);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0) 
  const [listings, setListingData] = useState([]);

  const fetchListingData = async () => {
    const response = await fetch("/api/marketplace", {
      method: "POST",
      body: JSON.stringify({ pageNumber, pageSize: 9, search, range }),
      headers: {
        "Content-type": "application/json"
      }
    })


    const { listings: listingsData, totalPages } = await response.json()
    setListingData(listingsData)
    setTotalPages(totalPages)
  }
  useEffect(() => {
    fetchListingData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, search, range.low, range.high])

  const handlePageChange = (e, pageNumber) => {
    setPageNumber(pageNumber);
  };
  return (
    <div>
      <h1 className={styles.title}>Marketplace</h1>
      <Container className={styles.container}>
        <Grid container spacing={1}>
          <Grid xs={12} sm={4} md={4}>
            <Filters />
          </Grid>
          <Grid
            xs={12}
            sm={8}
            md={8}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div className={styles["listings-container"]}>
              {listings.length > 0 ? (
                <NftListing listingData={listings} />
              ) : (
                <ErrorComponent />
              )}
            </div>
            <div>
              <Pagination
                count={totalPages}
                pageNumber={pageNumber}
                handleChange={handlePageChange}
                size="large"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MarketPlace;
