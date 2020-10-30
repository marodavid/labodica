import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../modules/components/Button';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PortadaLayout from './PortadaLayout';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import losLoquitos from '../images/iglesiaIslaPlana.webp'

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${losLoquitos})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 150,
    align: 'right',
    position: 'absolute',
    top: theme.spacing(4),
    right: theme.spacing(10),
  },
  more: {
    marginTop: theme.spacing(10),
    textTransform: 'none',
    opacity: '0.85'
  },
  arrow: {
    position: 'absolute',
    align: 'center',
    bottom: theme.spacing(4),
  },
  typography: {
    textTransform: 'none',
    opacity: '0.95',
    // fontFamily: {fontHead},
    // top: theme.spacing(4),

  },
	loquitos: {
    opacity: 0.15,
  }

});

function Portada(props) {
  const { classes } = props;

  return (

    <PortadaLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={losLoquitos}
        alt="increase priority"
      />
      <Button
        color="secondary"
        variant="contained"
        size="small"
        className={classes.button}
        component="a"
        // href="/premium-themes/onepirate/sign-up/"
      >
        RSVP
      </Button>

      <Typography
        color="inherit"
        align="center"
        variant="h1"
        component="h2"
        marked="center"
        className={classes.typography}
        // fontFamily={fontHead}
      >
        Bienvenidos a
      </Typography>

      <Typography
        color="inherit"
        align="center"
        variant="h1"
        marked="center"
        className={classes.typography}
      >
        La Bodica
      </Typography>

      <Typography variant="h4" align="center" color="inherit" className={classes.more}>
        ¡¡Laura y David se casan!!
      </Typography>

      <ExpandMoreIcon className={classes.arrow} />

    </PortadaLayout>
  );
}

Portada.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Portada);
