import * as React from "react";
import {
  Toolbar,
  CssBaseline,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Drawer, drawerWidth } from "../../atoms/drawer";
import { SearchBar } from "../searchBar";
import { MenuI } from "../../atoms/menu";
import { CustomModal } from "../../atoms/modal";
import { StyledButton } from "../../atoms/button";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
export const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
}));
const SandwichIcon = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const ButtonsBox = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,8em)",
  gap: "1em",
  width: "100%",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Navbar = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <CustomToolbar>
          <div
            style={{
              display: "flex",
              justifyContent: "space-betweeen",
              alignItems: "center",
            }}
          >
            <SandwichIcon
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </SandwichIcon>

            <Typography variant="h6" component="div">
              CTT
            </Typography>
          </div>
          <ButtonsBox>
            <StyledButton>Inicio</StyledButton>
            <StyledButton>Sua coleção</StyledButton>
            <StyledButton>Obras</StyledButton>
          </ButtonsBox>
          <CustomModal>
            <SearchBar />
          </CustomModal>
          <MenuI />
        </CustomToolbar>
      </AppBar>
      <Drawer open={open} handleDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
        <DrawerHeader />
        <div style={{ width: "100%" }}>{children}</div>
      </Box>
    </Box>
  );
};

export { Navbar };
