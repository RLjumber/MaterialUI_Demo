import React from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { makeStyles } from "@material"


const App = () => {

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm" style={{ marginTop: '50px' }}>
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Poopy Pants I pooped in them...</Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Whats going on guyss!!! Ali pooped her pants and then wiped it all over the ground while yelling "WHATS OBAMAS LAST NAME HUH KYLE" and then she bit a young child and blamed it on OBAMA too? At least thats what I heard.
            </Typography>
          </Container>
          <div>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                  <Button variant="contained" color="primary">
                    See the Smear
                  </Button>
              </Grid>
              <Grid item>
                  <Button variant="contained" color="primary">
                    Secondary Angle
                  </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </main>
    </>
  );

// end of App component
}

export default App;
