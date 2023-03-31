import { Container, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cities from "../components/data.json";
import ImageCollage from "../components/ImageCollage";
import ControlledAccordions from "../components/Accordion";
import SimpleBottomNavigation from "../components/BottomNav";

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
        <img src={tour.image} alt="" height={325} width={500}/>
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h6">About this tour</Typography>
        <Typography variant="paragraph" component="p" mt={2}>
            {tour.description}
        </Typography>
      </Box>
      <Box mb={10} mt={2}>
        <Typography variant="h6" component="h6" mt={2}>Frequently asked questions</Typography>
        <ControlledAccordions />
      </Box>
      <SimpleBottomNavigation />
    </Container>
  );
};

export default Tour;
