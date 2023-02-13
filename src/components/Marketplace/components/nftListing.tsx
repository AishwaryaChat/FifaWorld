import NFTCard from "./nftCard";
import { Grid } from "@mui/material";
import styles from "./nftCard.module.css"
const NftListing = ({ listingData }) => {
  return (
    <Grid container spacing={4} className={styles["nft-listing-container"]}>
      {listingData.map((cardData) => {
        const { uniqueCode } = cardData;
        return (
          <Grid xs={12} sm={6} md={4} key={uniqueCode} >
            <NFTCard cardData={cardData} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default NftListing;
