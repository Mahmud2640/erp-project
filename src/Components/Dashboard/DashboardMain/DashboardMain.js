import * as React from "react";
import { Box } from "@mui/system";
import "./DashboardMain.css";
import { makeStyles } from "@mui/styles";
import { CssBaseline } from "@mui/material";

const drawerWidth = 240;
let activeStyle = {
  color: "red",
  textDecoration: "none",
};

import { DarkmodeEnable } from "../../../../src";

const useStyles = makeStyles({
  navbarLight: {
    background: "#282A36",
    color: "#282A36",
    fontSize: "14px",
    color: "#fff",
  },
  navbarDark: {
    background: "#282A36",
    color: "#fff",
    fontSize: "14px",
    color: "#fff",
  },
  leftSideLight: {
    background: "white",
    color: "#282A36",
    fontSize: "14px",
    color: "#fff",
  },
  leftSideDark: {
    background: "#282A36",
    color: "white",
    fontSize: "14px",
    color: "#fff",
  },

  selectTabDark: {
    background:
      "linear-gradient(90.07deg, rgba(26, 27, 36, 0.35) 0.57%, #000000 99.94%)",
    backdropFilter: "blur(100px)",
    borderRadius: "7px",
  },
  selectTabLight: {
    background:
      "linear-gradient(90.07deg, rgba(224, 236, 251, 0.35) 0.57%, #E0ECFB 99.94%)",

    borderRadius: "7px",
    color: "#003566",
  },
});

const DashboardMain = () => {
  const styles = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const refunds = ["Vendor Refund", "Client Refund", "Unsettled Transaction"];
  const { isDark } = React.useContext(DarkmodeEnable);
  //For Nested List
  const [open, setOpen] = React.useState(false);
  const [setup, setSetup] = React.useState(false);
  const [quotation, setQuotation] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleSetup = () => {
    setSetup(!setup);
  };
  const handleQuotation = () => {
    setQuotation(!quotation);
  };

  return (
    <Box
      sx={{ display: "flex", background: `${isDark ? "#282A36" : "white"}` }}
      className={styles.paperDark}
    >
      <CssBaseline />
    </Box>
  );
};

export default DashboardMain;
