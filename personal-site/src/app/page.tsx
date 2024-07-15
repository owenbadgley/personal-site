import { Grid, Button } from "@mui/material";

export default function Home() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Button>Click Me</Button>
      </Grid>
      <Grid item xs={1} color="red">
        <Button>Click Me</Button>
      </Grid>
      <Grid item xs={11} color="green">
        <Button>Click Me</Button>
      </Grid>
    </Grid>
  );
}
