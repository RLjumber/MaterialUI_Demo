import React from "react";
import "../App.css";
import { Container, Grid, Typography } from "@mui/material";
import ContentCard from "../components/ContentCard";
import cities from "../components/data.json";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>

        <main className="main">
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
                    {city.tours.map((tour, index) => (
                        <Grid item xs={3} key={index}>
                            <Link to={`/${tour.id}`}>
                                <ContentCard tour={tour} />
                            </Link>
                        </Grid>
                    ))}
                    </Grid>
                </>
                ))}
            </Container>
        </main>

    </>
    )
}

export default Home;
