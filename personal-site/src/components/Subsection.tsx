import { Divider, Stack, Typography } from "@mui/material";
import React from "react";

interface Props {
  children: string;
  id: number;
}

const Subsection = ({ children, id }: Props) => {
  return (
    <Stack>
      <Typography variant="h3" color="secondary" align="right">
        {children}
      </Typography>
    </Stack>
  );
};

export default Subsection;
