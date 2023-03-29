import React from "react";
import "./App.css";
import { CssBaseline, Container, Grid, Typography } from "@mui/material";
import Header from "./components/Header";
import Title from "./components/Title";
import ContentCard from "./components/ContentCard";
import cities from "./components/data.json";


const App = () => {

  return (
    <>

      <CssBaseline enableColorScheme />

      <header className="header">
        <Header />
      </header>

      <main className="main">
          <Title />
          <Container>
            {cities.map((city) => (
              <>
                <Typography 
                variant="h4"
                component="h2"
                mt={5}
                mb={5}
                >
                  Top {city.name} Tours
                </Typography>
                <Grid className="grid" container spacing={2}>
                  {city.tours.map((tour, index) => <ContentCard tour={tour} key={index}/>)}
                </Grid>
              </>
            ))}
            {/* <Grid className="grid" container spacing={2}>
              <ContentCard />
              <ContentCard />
              <ContentCard />
              <ContentCard />
            </Grid> */}
          </Container>
      </main>

    </>
    // end of return
  );

// end of App component
}

export default App;
