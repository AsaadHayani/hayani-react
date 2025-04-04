import { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";
import { Context } from "./Context";
import { Brightness4, WbSunny } from "@mui/icons-material";
import { navItems } from "./assets";

const drawerWidth: number = 240;

export default function DrawerAppBar(props: { window?: () => Window }) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Typography variant="h6" color="initial">
          Hayani
        </Typography>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Box key={item.text}>
            <Link
              to={`/${item.link}`}
              style={{
                textDecoration: "none",
                color: "unset",
              }}
            >
              <ListItem disablePadding>
                <ListItemText
                  primary={item.text}
                  sx={{ textAlign: "center" }}
                />
              </ListItem>
            </Link>
            <Divider />
          </Box>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const theme = useTheme();

  const { mode, setMode }: any = useContext(Context);

  return (
    <Box display="flex">
      <CssBaseline />
      <AppBar
        component="nav"
        position="static"
        sx={{ bgcolor: theme.palette.primary.main }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, textAlign: { xs: "center", sm: "start" } }}
          >
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Hayani
            </Link>
          </Typography>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: 3,
              mr: 1,
            }}
          >
            {navItems.map((item) => (
              <Link
                to={`/${item.link}`}
                key={item.text}
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                {item.text}
              </Link>
            ))}
          </Box>
          <IconButton
            size="large"
            onClick={() => {
              localStorage.setItem("mode", mode === "dark" ? "light" : "dark");
              setMode(mode === "dark" ? "light" : "dark");
            }}
          >
            {mode === "dark" ? (
              <WbSunny fontSize="inherit" />
            ) : (
              <Brightness4 fontSize="inherit" sx={{ color: "white" }} />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
