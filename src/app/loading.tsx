import { CircularProgress, Grid } from '@mui/material';
import React from 'react';

export default function Loading() {
  return (
    <Grid container height="100vh" alignItems="center" justifyContent="center" direction="column">
      <CircularProgress />
    </Grid>
  );
}
