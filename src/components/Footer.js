import React, { Component } from 'react'
import '../App.css';
import Typography from '@material-ui/core/Typography';
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
        </Typography>
        <ul className="">
                                    <li><Link to='/'>Facebook </Link></li>
                                   <li><Link to='/'>Instagram </Link></li>
                                </ul>
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