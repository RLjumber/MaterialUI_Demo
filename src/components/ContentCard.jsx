import { Paper, Grid, Typography, Box } from "@mui/material";

const ContentCard = () => {
    return (
        <Grid item xs={3}>
            <Paper elevation={4}>
                <img src="https://picsum.photos/276/80"
                    alt="something here"
                    className="content_img"
                />
                <Box paddingX={1}>
                    <Typography variant="subtitle1" component="h1">
                        Project 1
                    </Typography>
                </Box>
            </Paper>
        </Grid>
    )
};

export default ContentCard;