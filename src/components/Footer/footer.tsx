import * as React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import styles from "./footer.module.css";
import { Grid } from "@mui/material";
export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%" }}>
      <div className={styles.footer}>
        <div className={styles["footer-content"]}>
          <Image
            src="/fifalogo.png"
            alt="logo"
            width={100}
            height={100}
            className={styles.logo}
          />
          <div className={styles["footer-section-container"]}>
            <div className={styles["footer-links-container"]}>
              <div>Terms of Service</div>
              <div>Privacy Policy</div>
              <div>Cookie Settings</div>
              <div>Copyrights@aishchat.dev</div>
            </div>
            <div>Powered By: @Aishwarya</div>
          </div>
        </div>
      </div>
    </Box>
  );
}
