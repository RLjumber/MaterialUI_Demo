import { Container, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cities from "../components/data.json";
import ImageCollage from "../components/ImageCollage";

const Tour = () => {

  const [tour, setTour] = useState("");

  const { id } = useParams();


  const matchedTour = () => {
    
    for (let i = 0; i < cities.length; ++i) {
          let tours = cities[i].tours;

        for (let j = 0; j < tours.length; ++j) {
            let finalTour = tours[j]

           if (id === finalTour.id.toString()) {
               setTour(finalTour);

               return;
            }
        }
    }

  };

useEffect(() => {
    
    matchedTour();
}, [])


//   const foundTour = toursData.find((tour) => tour.id === id);

  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" mt={3}>
        {tour.name}
      </Typography>
      <Box mt={3} sx={{ display: "flex"}}>
        <img src={tour.image} alt="" height={325}/>
      </Box>
      <ImageCollage />
    </Container>
  );
};

export default Tour;
