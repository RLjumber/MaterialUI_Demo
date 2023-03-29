import { Paper, Grid, Typography, Box, Rating } from "@mui/material";
import { TripOrigin } from "@mui/icons-material";

const ContentCard = () => {
    return (
        <Grid item xs={3}>
            <Paper elevation={4}>
                <img src="https://picsum.photos/276/80"
                    alt="something here"
                    className="content_img"
                />
                <Box paddingX={1}>
                    <Typography variant="subtitle1" component="h2" mb={1} fontSize={20}>
                        This thing
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
                        variant="body2" 
                        component="p"
                        ml={1}
                    >Book Cellar</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            marginTop: "3vh"
                        }}
                    >
                        <Rating name="read-only" value={4.5} precision={.25} readOnly size="small"/>
                        <Typography variant="body2" fontSize={14} ml={1}>4.5</Typography>
                        <Typography variant="body2" fontSize={14} ml={1}>(256 reviews)</Typography>
                    </Box>
                    <Box>
                    <Typography variant="h6" component="h3" mt={0}>Price: $399</Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    )
};

export default ContentCard;