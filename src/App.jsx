import React from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";


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
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Photo Album</Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Whats going on guyss!!! How does this look like? I hope this is long enough because this needs to be a paragraph element!
            </Typography>
          </Container>
        </div>
      </main>
    </>
  );

// end of App component
}

export default App;
