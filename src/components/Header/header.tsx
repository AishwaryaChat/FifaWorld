import * as React from "react";
import {
  Button,
  Toolbar,
  Box,
  AppBar,
  Container,
  MenuItem,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import Drawer from "./sideNavigation";
const pages = [
  {
    id: "marketplace",
    label: "Marketplace",
    link: "/marketplace",
  },
  {
    id: "mycollection",
    label: "My Collection",
    link: "/mycollection",
  },
];

function ResponsiveAppBar() {
  return (
    <div>
      {/* For smaller screens */}
      <Box
        sx={{ flexGrow: 1, display: { xs: "flex", sm: "none", md: "none" } }}
      >
        <Drawer />
        <div className={styles.logo}>
          <Image src="/fifalogo.png" alt="logo" width={100} height={100} />
        </div>
      </Box>
      {/* For bigger screens */}

      <AppBar position="static" className={styles.appbar}>
        <Container maxWidth="xl">
          <Toolbar disableGutters className={styles.toolbar}>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "flex", md: "flex" },
                flex: "100"
              }}
            >
              <Image src="/fifalogo.png" alt="logo" width={200} height={200} />
              {pages.map(({ id, link, label }) => (
                <MenuItem key={id}>
                  <Link key={id} href={link} className={styles["header-links"]}>
                    {label}
                  </Link>
                </MenuItem>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Button
                variant="contained"
                color="primary"
                className={styles["join-now-button"]}
              >
                Join Now
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default ResponsiveAppBar;
