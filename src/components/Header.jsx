import { Typography, AppBar, Toolbar } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

const Header = () => {
    return (
        <div>
            <AppBar position="relative">
                <Toolbar>
                <PhotoCamera />
                <Typography variant="h6">
                    My Projects
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default Header;
