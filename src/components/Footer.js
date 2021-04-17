import React, { Component } from 'react'
import '../App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

class Footer extends Component {
    render() {
        return (

        <div>
         

         <footer style={footer}>
        <Typography variant="h6" align="center" gutterBottom>
          BlocoB - Seu Bairro mais seu
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        <ul className="">
                                    <li><Link to='/'>Facebook </Link></li>
                                   <li><Link to='/'>Instagram </Link></li>
                                </ul>
        </Typography>
      </footer>

          </div>

        )
    }
}

 
      const footer = {
        backgroundColor: "gray",
        padding: "6px"
      }



export default Footer