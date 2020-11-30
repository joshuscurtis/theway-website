import React, { useState, useEffect } from "react";

//import ReactDOM from "react-dom";
import "./style.css";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import CakeIcon from "@material-ui/icons/Cake";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import FastfoodIcon from "@material-ui/icons/Fastfood";
//import NewReleasesIcon from "@material-ui/icons/NewReleases";
import InfoIcon from "@material-ui/icons/Info";
import Menu from "./Menu";

import axios from "axios";

//const menu = require("./menu.json");

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    marginBottom: 10,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: "#ffffff",
    color: "#00204e"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },

  back: {
    color: "white",
    backgroundColor: "#00204e",
    padding: 12
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  icons: {
    color: "black"
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState("cakes");
  const [menuData, setMenuData] = useState("loading");

  useEffect(() => {
    document.title = "Menu - The Way Coffee House - Dunstable";
    async function fetchData() {
      const request = await axios.get(
        "https://christchurchdunstable.org.uk/theway/json/menu.json"
      );
      const request2 = await axios.get(
        "https://christchurchdunstable.org.uk/wp-json/wp/v2/posts/?filter%5Bp%5D=7912"
      );
      console.log(request2.data);

      setMenuData(request.data.items);
      return request;
    }
    fetchData();
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const cakesTypeClick = () => {
    setType("cakes");
    handleDrawerClose();
    window.scrollTo(0, 0);
  };
  const drinksTypeClick = () => {
    setType("drinks");
    handleDrawerClose();
    window.scrollTo(0, 0);
  };
  const foodTypeClick = () => {
    setType("food");
    handleDrawerClose();
    window.scrollTo(0, 0);
  };
  /*const specialsTypeClick = () => {
    setType("specials");
    handleDrawerClose();
    window.scrollTo(0, 0);
  };
*/
  const infoClick = () => {
    handleDrawerClose();
    alert("Made by Josh :)");
  };

  return (
    <div className="menu">
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <div className="Nav">
            <Toolbar>
              <div className="Nav_cont">
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
                <div className="App__Title"></div>

                <Button className={classes.back} href="/" variant="contained">
                  Back
                </Button>
              </div>
            </Toolbar>
          </div>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List className={classes.icons}>
            <ListItem button onClick={cakesTypeClick}>
              <ListItemIcon>
                <CakeIcon style={{ fill: "#00204e" }} />
              </ListItemIcon>
              <ListItemText primary="Cakes" />
            </ListItem>
            <ListItem button onClick={drinksTypeClick}>
              <ListItemIcon>
                <LocalCafeIcon style={{ fill: "#00204e" }} />
              </ListItemIcon>
              <ListItemText primary="Drinks" />
            </ListItem>
            <ListItem button onClick={foodTypeClick}>
              <ListItemIcon>
                <FastfoodIcon style={{ fill: "#00204e" }} />
              </ListItemIcon>
              <ListItemText primary="Food" />
            </ListItem>
            {/*
            <ListItem button onClick={specialsTypeClick}>
              <ListItemIcon>
                <NewReleasesIcon style={{ fill: "#00204e" }} />
              </ListItemIcon>
              <ListItemText primary="Specials" />
            </ListItem>
           */}
            <Divider />
            <ListItem className="Drawer__info" button onClick={infoClick}>
              <ListItemIcon>
                <InfoIcon style={{ fill: "#00204e" }} />
              </ListItemIcon>
              <ListItemText primary="Info" />
            </ListItem>
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        ></main>
      </div>
      <Menu menu={menuData} type={type} />
    </div>
  );
}
