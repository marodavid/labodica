import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PortadaLayout from './PortadaLayout';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import losLoquitos from '../images/iglesia3.png'
// import losLoquitos from '../images/iglesiaIslaPlana.webp'
import laBodicaLogo from '../images/labodicaOriginal.webp'

const styles = (theme) => ({

  background: {
    backgroundImage: `url(${losLoquitos})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
    alignItems: 'center',
    height: '130%',
  },
  button: {
    minWidth: 150,
    align: 'right',
    position: 'absolute',
    top: theme.spacing(4),
    right: theme.spacing(10),
  },
  arrow: {
    color: theme.palette.common.white,
    bottom: theme.spacing(1),
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    // size: '150%',
    // paddingTop: '20px',
  },
  typography: {
    textTransform: 'none',
    opacity: '0.95',
  },
  typographyLauraDavid: {
    fontFamily: 'Great Vibes',
    fontStyle: 'italic',
    textTransform: 'none',
    opacity: '0.95',
  },
	loquitos: {
    opacity: 0.15,
  },
  bodicaLogo: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '30%',
  }

});

function Portada(props) {
  const { classes } = props;

  return (
<>
    <PortadaLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none'}}
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
      <div style={{maxWidth: '100%', height: '13.5em'}} />
      <Typography
        color="inherit"
        align="center"
        variant="h1"
        component="h2"
        marked="center"
        className={classes.typography}
      >
        Bienvenidos a
      </Typography>

      <Typography
        color="inherit"
        align="center"
        variant="h1"
        component="h2"
        marked="center"
        className={classes.typography}
      >
        La Bodica
      </Typography>

      <img
        src={laBodicaLogo}
        alt='laBodica'
        className={classes.bodicaLogo}
      />

      <Typography
        color="inherit"
        align="center"
        variant="h2"
        component="h3"
        marked="center"
        className={classes.typographyLauraDavid}
      >
        Laura  y  David
      </Typography>

    </PortadaLayout>

    <ExpandMoreIcon className={classes.arrow} />
    </>
  );
}

Portada.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Portada);
