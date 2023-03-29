import { Container, Typography } from "@mui/material";

const Title = () => {
    return (
        <div>
            <Container className="container" maxWidth="sm" style={{ marginTop: '50px' }}>
                <Typography variant="h3" component="h1" align="center" color="textPrimary" gutterBottom>R. Luke Jumber</Typography>
            </Container>
        </div>
    )
};

export default Title;