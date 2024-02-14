import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import React from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography>Navbar</Typography>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
