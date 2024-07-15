import {
  AppBar,
  Button,
  Divider,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const NavBar = () => {
  return (
    <AppBar position="fixed">
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        divider={<Divider orientation="vertical" flexItem variant="middle" />}
      >
        <Typography color="white">Owen Badgley</Typography>
        <Button color="secondary">My Video Games</Button>
        <Button color="secondary">Stuff I've Made</Button>
        <Button color="secondary">Class Projects</Button>
        <Button color="info">Contact Me</Button>
      </Stack>
    </AppBar>
  );
};

export default NavBar;
