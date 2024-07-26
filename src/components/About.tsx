import { Divider, Stack, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent="space-evenly"
      alignItems="center"
      divider={<Divider orientation="vertical" flexItem variant="middle" />}
      spacing={3}
    >
      <Typography variant="h3" color="white">
        About Me
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore
        neque, atque laboriosam non, animi nobis at reiciendis similique
        necessitatibus, consectetur perferendis? Assumenda voluptatem cum id
        aperiam ipsam aut iure?
      </Typography>
    </Stack>
  );
};

export default About;
