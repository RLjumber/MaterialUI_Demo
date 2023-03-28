import React from "react";
import "./App.css";
import { CssBaseline, Container, Grid } from "@mui/material";
import Header from "./components/Header";
import Title from "./components/Title";
import ContentCard from "./components/ContentCard";


const App = () => {

  return (
    <>

      <CssBaseline enableColorScheme />

      <header>
        <Header />
      </header>

      <main>
          <Title />
          <Container>
            <Grid className="grid" container spacing={2}>
              <ContentCard />
              <ContentCard />
              <ContentCard />
              <ContentCard />
            </Grid>
          </Container>
      </main>

    </>
    // end of return
  );

// end of App component
}

export default App;
