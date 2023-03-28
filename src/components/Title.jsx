import { Container, Typography } from "@mui/material";

const Title = () => {
    return (
        <div>
            <Container className="container" maxWidth="sm" style={{ marginTop: '50px' }}>
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>R. Luke Jumber</Typography>
            </Container>
        </div>
    )
};

export default Title;