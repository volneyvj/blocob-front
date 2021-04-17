import React from "react";
import api from '../utils/api.util'
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardMedia from "@material-ui/core/CardMedia";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    paddingTop: "20px",
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
      justifyContent: "flex-start",
    }
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end"
  },

  logo: {
    margin: "8px",
    width: "5%",
    // height: "100px"
  },

  link: {
    margin: "0",
    padding: "0"
  }
}));

const NavBar = props => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = pageURL => {
    history.push(pageURL);
  };

  const menuItems = [
    {
      menuTitle: "Como Funciona",
      pageURL: "/#comofunciona"
    },
    {
      menuTitle: "Buscar um Classificado",
      pageURL: "/signup"
    },
    {
      menuTitle: "About",
      pageURL: "/#comofunciona",
    }
  ];


  const handleSubmit2 = async (event) => {
    try {
      await api.logout();
      props.history.push('/')
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
  
        {/* <CardMedia
        className={classes.logo}
        image="https://www.gratispng.com/png-880i1b/download.html"
        title="BlocoB logo"
      /> */}
      <img onClick={() => handleMenuClick("/main")} className={classes.logo} src="/images/blogo.png" alt="logo" />
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map(menuItem => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
            <div className={classes.headerOptions}>
              <Button
                variant="contained" color="primary"
                onClick={() => handleButtonClick("/#comofunciona")}
              >
                Como Funciona
              </Button>
              <Button
                variant="contained" color="primary"
                onClick={() => handleButtonClick("/#singup")}
              >
                Buscar um Classificado
              </Button>



              {localStorage.getItem("user") ?  (
                <Button
                variant="contained" color="primary"
                onClick={() => handleSubmit2()}
              >
                LogOut   
             </Button>
              ) : (
              <Button
                variant="contained" color="primary"
                onClick={() => handleButtonClick("/#comofunciona")}
              >
                ABOUT   
             </Button>
              )
              }
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(NavBar);



