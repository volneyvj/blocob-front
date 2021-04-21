import React, { Component } from 'react'
import '../App.css';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

class Footer extends Component {
    render() {
        return (

        <div>
         

         <footer style={footer}>
         <Grid container alignContent="space-between">
        <Grid item>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Copyright @ 2021 BlocoB Project
        </Typography>
        </Grid>
        <Grid style={ficons} item>
        <FacebookIcon /> <InstagramIcon /> <GitHubIcon />
        </Grid>
       </Grid>
      </footer>

          </div>

        )
    }
}

 
      const footer = {
        backgroundColor: "#cdd1cf",
        padding: "6px",
      }

      const ficons = {
        marginLeft: "1040px"
      }
  



export default Footer