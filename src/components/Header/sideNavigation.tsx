import * as React from "react";
import {
  IconButton,
  ListItemText,
  ListItemButton,
  ListItem,
  Divider,
  List,
  Drawer,
  Box,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import styles from "./header.module.css";
const menuItems = ["Marketplace", "My Collection"];

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };

  const DrawerList = () => (
    <Box
      sx={{ width: 250, height: "90vh" }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {menuItems.map((text) => (
          <>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={text}
                  classes={{ primary: styles["list-item"] }}
                />
              </ListItemButton>
            </ListItem>
            <Divider classes={{ root: styles.divider }} />
          </>
        ))}
      </List>
      <List style={{ position: "absolute", bottom: "0" }}>
        <ListItem
          key={"joinnow"}
          disablePadding
          className={styles["sidebar-join-now-button"]}
        >
          <ListItemButton>
            <ListItemText
              primary="Join Now"
              classes={{ primary: styles["list-item"] }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <React.Fragment key={"left"}>
      <div className={styles.sidebar}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={toggleDrawer}
          color="primary"
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="left"
          open={open}
          onClose={toggleDrawer}
          classes={{ paper: styles.drawer }}
        >
          <div>
            <IconButton onClick={toggleDrawer}>
              <CloseIcon
                className={styles["sidebar-close-button"]}
                fontSize="large"
                color="primary"
              />
            </IconButton>
            <DrawerList />
          </div>
        </Drawer>
      </div>
    </React.Fragment>
  );
}
