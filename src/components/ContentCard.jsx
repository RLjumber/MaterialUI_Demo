import { Paper, Typography, Box, Rating, createTheme, ThemeProvider } from "@mui/material";
import { TripOrigin } from "@mui/icons-material";
import "../App.css";

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2"
                    },
                    style: {
                        fontSize: 11,
                    }
                },
                {
                    props: {
                        variant: "body3"
                    },
                    style: {
                        fontSize: 9,
                        
                    }
                }
            ]
        }
    }
})

const ContentCard = ({tour}) => {
    return (
            <ThemeProvider theme={theme}>
            <div className="tour-card-container">
                <Paper elevation={4} className="tour-card">
                    <img src={tour.image}
                        alt="something here"
                        className="content_img"
                    />
                    <Box paddingX={1}>
                        <Typography variant="subtitle1" component="h2" mb={1} fontSize={20}>
                            {tour.name}
                        </Typography>
                        <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            paddingBottom: "5px"
                        }}
                        >
                        <TripOrigin fontSize="small"/>
                        <Typography
                            variant="body1" 
                            component="p"
                            ml={1}
                        >{tour.duration} hours</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                marginTop: "3vh"
                            }}
                        >
                            <Rating name="read-only" value={tour.rating} precision={.5} readOnly size="small"/>
                            <Typography variant="body2" ml={1}>{tour.rating}</Typography>
                            <Typography variant="body2" ml={1}>({tour.numberOfReviews} reviews)</Typography>
                        </Box>
                        <Box>
                        <Typography variant="h6" component="h3" mt={0}>Price: ${tour.price}</Typography>
                        </Box>
                    </Box>
                </Paper>
            </div>
            </ThemeProvider>
    )
};

export default ContentCard;
