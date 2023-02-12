import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import Image from "next/image";
import styles from "./nftCard.module.css";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const CardImage = ({ src }: { src: string }) => {
  return (
    <CardMedia component="img" height="194" image={src} alt="card image" />
  );
};

export default function NFTCard({ cardData }) {
  const {
    image: src,
    title,
    subtitle,
    rarity: { name: rarityName, color: rarityColor },
    lowestPrice,
  } = cardData;
  return (
    <Card
      variant="outlined"
      sx={{ maxWidth: 345, minHeight: 400 }}
      classes={{ root: styles["card-container"] }}
    >
      <CardImage src={src} />
      <CardContent className={styles["card-content-upper"]}>
        <Typography variant="h5" gutterBottom component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span className={styles["card-secondary-text"]}>{subtitle}</span>
        </Typography>
      </CardContent>
      <CardContent className={styles["card-content-lower"]}>
        <Typography style={{ color: rarityColor }}>{rarityName}</Typography>
        <Typography>Starting At: ${lowestPrice}</Typography>
      </CardContent>
    </Card>
  );
}
