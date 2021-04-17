import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = {
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    icon: {
        marginRight: '10px',
      },
      heroContent: {
        backgroundColor: 'white',
        padding: '8px',
      },
      heroButtons: {
        marginTop: '4px',
      },
      cardGrid: {
        paddingTop: '8px',
        paddingBottom: '8px',
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
      footer: {
        backgroundColor: 'white',
        padding: '6px',
      },

  };
  
  function HigherOrderComponent(props) {
    const { classes } = props;
    return <Button className={classes.root}>Higher-order component</Button>;
  }
  
  HigherOrderComponent.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(HigherOrderComponent);

