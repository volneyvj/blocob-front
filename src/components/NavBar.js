import React from "react";
import api from '../utils/api.util'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "76px"
  },

  appStyle: {
background:  '#E4E6DC',
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
    width: "100px",
    // height: "100px"
  },

  link: {
    margin: "0",
    padding: "0"
  },

  buttom: {
    background: "#2A4654",
    borderRadius: 2,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(9, 92, 95, .3)',
    marginTop: "8px",
    '&:hover': {
      backgroundColor: '#e57373',
      color: '#fff',
  },
  },

  form: {
    width: '100%', 
    marginTop: "1px"
  },
  
  submit: {
    margin: "3px",
    marginTop: "15px",
    background: "#2A4654",
    '&:hover': {
      backgroundColor: '#e57373',
      color: '#fff',
  },
  },

  field: {
    marginTop: "4px",
    color: "white"
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

  const logoutFunction = async (event) => {
    try {
      await api.logout();
      props.history.push('/')
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className={classes.root}>
      <AppBar className={classes.appStyle} position="fixed">
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

            {localStorage.getItem("user") ?  (
            <form className={classes.form} noValidate>
              <TextField
                id="query"
                label="Buscar Classificado"
                name="query"
                autoFocus
                className={classes.field}
                inputProps={{ style: { fontFamily: 'nunito', color: 'gray'}}}
                // onChange={this.handleInput}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => handleButtonClick("/allclassifieds/")}
              >Buscar
              {/* <Link href={`./allclassifieds/${this.state.query}`}></Link>
                Buscar */}
          </Button>
          {/* <Button
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Busca Avançada
          </Button> */}
            </form>
            ) : (
              <div>
              </div>
           )
              }
          

              <Button
                variant="contained" className={classes.buttom}
                onClick={() => handleButtonClick("/#comofunciona")}
              >
                Como Funciona
              </Button>
              <Button
                variant="contained" className={classes.buttom}
                onClick={() => handleButtonClick("/#singup")}
              >
                Buscar um Classificado
              </Button>



              {localStorage.getItem("user") ?  (
                <Button
                variant="contained" className={classes.buttom}
                onClick={() => logoutFunction()}
              >
                LogOut   
             </Button>
              ) : (
              <Button
                variant="contained" className={classes.buttom}
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



