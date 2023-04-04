import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";

export function Dashbaord() {
  const navigate = useNavigate();
  const [mode, setMode] = useState(true);
  const darkTheme = createTheme({
    palette: {
      mode: mode ? "light" : "dark",
    },
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const token = localStorage.getItem("token");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function logOut() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <ThemeProvider theme={darkTheme}>
      {/* <Paper
        sx={{
          borderRadius: "0px",
          minHeight: "100vh",
        }}
        elevation={5}
      > */}
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar color="secondary" position="static">
            <Toolbar>
              <Typography
                id="website-name"
                variant="h4"
                component="div"
                sx={{ flexGrow: 1, cursor: "pointer" }}
                onClick={() => navigate("/daily-color")}
              >
                Daily<span>Color</span>
                <small>.in</small>
              </Typography>
              <Button
                onClick={() => setMode(!mode)}
                color="inherit"
                startIcon={mode ? <DarkModeIcon /> : <LightModeIcon />}
              ></Button>
              <h3
                onClick={() => navigate("/more-colors")}
                className="nav-more-colors"
              >
                More colors
              </h3>
              <Button
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <IconButton
                  size="large"
                  edge="start"
                  aria-label="menu"
                  sx={{ mr: 2, color: "White", justifyContent: "center" }}
                >
                  <MenuIcon />
                </IconButton>
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={() => navigate("/profile")}>
                  <IconButton>
                    <AccountCircleIcon />
                  </IconButton>
                  Profile
                </MenuItem>
                {token ? (
                  <MenuItem onClick={logOut}>
                    <IconButton>
                      <LogoutIcon />
                    </IconButton>
                    Logout
                  </MenuItem>
                ) : (
                  <MenuItem onClick={() => navigate("/")}>
                    <IconButton>
                      <LoginIcon />
                    </IconButton>
                    Login
                  </MenuItem>
                )}
              </Menu>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      {/* </Paper> */}
    </ThemeProvider>
  );
}
