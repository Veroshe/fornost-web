import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Sitemark from "./SitemarkIcon";
import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/stare.png";
import Menu from "@mui/material/Menu";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.8),
  boxShadow: theme.shadows[1],
  padding: "8px 20px"
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openNested = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <AppBar
        position="static"
        enableColorOnDark
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none"
          // mt: "calc(var(--template-frame-height, 0px) + 28px)"
        }}
      >
        <Container>
          <StyledToolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                px: 0,
                justifyContent: "space-between"
              }}
            >
              <Link to="/">
                <img src={logo} alt="Logo" style={{ height: 32 }} />
              </Link>
              <Box sx={{ display: { xs: "none", md: "flex", gap: "1rem" } }}>
                <Button
                  variant="outlined"
                  color="error"
                  size="large"
                  id="basic-button"
                  aria-controls={openNested ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openNested ? "true" : undefined}
                  onClick={handleClick}
                >
                  Fornost 2025
                </Button>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openNested}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button"
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <Link to="/info">Najważniejsze informacje</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/merch">Merch</Link>
                  </MenuItem>

                  <MenuItem onClick={handleClose}>
                    <Link to="/org">Organizacja</Link>
                  </MenuItem>
                </Menu>

                <Link to="/about">
                  <Button variant="outlined" color="error" size="large">
                    O konwencie
                  </Button>
                </Link>

                <Button
                  variant="outlined"
                  color="error"
                  size="large"
                  href="https://www.facebook.com/events/895237192729983"
                  target="_blank"
                >
                  Przeprawa Królów
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ minWidth: "fit-content" }}
                  href="https://forms.gle/HNEsudkPU7hbJMQVA"
                  target="_blank"
                >
                  Kup bilet
                </Button>
              </Box>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
              <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="top"
                open={open}
                onClose={toggleDrawer(false)}
                PaperProps={{
                  sx: {
                    top: "var(--template-frame-height, 0px)"
                  }
                }}
              >
                <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end"
                    }}
                  >
                    <IconButton onClick={toggleDrawer(false)}>
                      <CloseRoundedIcon />
                    </IconButton>
                  </Box>

                  <Link to="/info">
                    <MenuItem>Najważniejsze informacje</MenuItem>
                  </Link>

                  <Link to="/merch">
                    <MenuItem>Merch</MenuItem>
                  </Link>

                  <Link to="/about">
                    <MenuItem>O konwencie</MenuItem>
                  </Link>

                  <Link to="/org">
                    <MenuItem>Organizacja</MenuItem>
                  </Link>

                  <MenuItem
                    href=" https://www.facebook.com/events/895237192729983"
                    target="_blank"
                    component="a"
                  >
                    Przeprawa Królów
                  </MenuItem>

                  {/* <MenuItem>Testimonials</MenuItem>
                  <MenuItem>Highlights</MenuItem>
                  <MenuItem>Pricing</MenuItem>
                  <MenuItem>FAQ</MenuItem>
                  <MenuItem>Blog</MenuItem> */}
                </Box>
              </Drawer>
            </Box>
          </StyledToolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}
