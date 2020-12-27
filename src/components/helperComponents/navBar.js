import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
import logo1 from "../../assets/img/logo.png";
import styles from "../../constant/navBarStyles.js";
import LoginUserMenu from "../common/header-component/loginUserMenu";
import {List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import {Link} from "react-router-dom";

// const styles = theme => ({
//   appBar: {
//     boxShadow: theme.shadows[6],
//     backgroundColor: theme.palette.background.paper,
//   },
//   toolbar: {
//     display: "flex",
//     justifyContent: "space-between"
//   },
//   menuButtonText: {
//     fontSize: theme.typography.body1.fontSize,
//     fontWeight: theme.typography.h5.fontWeight
//   },
//   brandText: {
//     fontFamily: "sans-serif, cursive",
//     fontWeight: 400
//   },
//   noDecoration: {
//     textDecoration: "none !important"
//   }
// });

const useStyles = makeStyles(styles);

function NavBar(props) {
  const classes = useStyles();
  const {
    color,
    absolute,
    fixed,
  } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const menuItems = [
    {
      link: "/",
      name: "Home"
    },
    {
      link: "#about",
      name: "About"
    },
    {
      link: "/services",
      name: "Services"
    },
    {
      link: "/blog",
      name: "Blog"
    },
    {
      link: "/panel",
      name: "Panel"
    },
    {
      link: "/rules",
      name: "Rules"
    },
    {
      link: "/faq",
      name: "FAQ/HELP"
    },
    {
      link: "#contact",
      name: "Contact"
    }
  ];
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        <img src={logo1} height="100px" alt="logo"/>
        <Hidden smDown implementation="css">
          <div className="center flex ttu tracked fw6">
          <span><a className="link dim dark-gray mr3 tr pr2 w-100" href="/" title="Home">
                                Home</a></span>
          <span><a className="link dim dark-gray dib mr3 tr w-100 pr2" href="#about"
                   title="About">About</a></span>
          <span><a className="link dim dark-gray dib mr3 tr pr2 w-100" href="/services"
                   title="Services">Services</a></span>
          <span><a className="link dim dark-gray dib mr3 tr w-100 pr2" href="/blog"
                   title="Blog">Blog</a></span>
          <span><a className="link dim dark-gray dib mr3 tr w-100 pr2" href="/panel"
                   title="Panel">Panel</a></span>
          <span><a className="link dim dark-gray dib mr3 tr w-100 pr2" href="/rules"
                   title="Rules">Rules</a></span>
          <span><a className="link dim dark-gray dib mr3 tr w-100 pr2" href="/faq"
                   title="FAQ">FAQ/HELP</a></span>
          <span><a className="link dim dark-gray dib mr3 tr w-100 pr2" href="#contact"
                   title="Contact">Contact</a></span>
          <LoginUserMenu/>
        </div>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          <Toolbar>
            <ListItem
              style={{
                height: "100%",
                justifyContent: "flex-end"
              }}
              disableGutters
            >
              <ListItemIcon className={classes.closeIcon}>
                <IconButton onClick={handleDrawerToggle} aria-label="Close Navigation">
                  <CloseIcon color="primary" />
                </IconButton>
              </ListItemIcon>
            </ListItem>
          </Toolbar>
          <List className={classes.list}>
            {menuItems.map(element =>
                  <Link
                    key={element.name}
                    to={element.link}
                    className={classes.noDecoration}
                    onClick={handleDrawerToggle}
                  >
                    <ListItem
                      button
                      disableRipple
                      disableTouchRipple
                    >
                      <ListItemText
                        primary={
                          <Typography variant="subtitle1" align="center">
                            {element.name}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </Link>)}
            <LoginUserMenu/>
          </List>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

NavBar.defaultProp = {
  color: "white"
};

NavBar.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};
export default React.memo(NavBar);
