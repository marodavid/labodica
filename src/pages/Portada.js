import React from 'react';
import PropTypes from 'prop-types';
import {useSpring, animated, config} from 'react-spring'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PortadaLayout from './PortadaLayout';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import losLoquitos from '../images/iglesia3.png'
// import losLoquitos from '../images/iglesiaIslaPlana.webp'
import laBodicaLogo from '../images/labodicaOriginal.webp'
import styled from 'styled-components'
import Separator from "../components/Separator";

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${losLoquitos})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
    alignItems: 'center',
    height: '100%',
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
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    // size: '150%',
    // paddingTop: '20px',
  },
  typography: {
    // fontFamily: 'Petit Formal Script',
    // fontFamily: 'Dancing Script',
    // fontStyle: 'italic',
    textTransform: 'none',
    opacity: '0.95',
  },
  typographyLauraDavid: {
    fontFamily: 'Dancing Script',
    // fontStyle: 'italic',
    textTransform: 'none',
    // fontSize: '70px',
    opacity: '0.95',
    transitionProperty: 'opacity',
    transitionDuration: '3s',
    transitionDelay: '1s',
  },
	// loquitos: {
  //   opacity: 0.15,
  // },
  bodicaLogo: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '30%',
  }

});

// eslint-disable-next-line react-hooks/rules-of-hooks
const delayTypo = ((milisec) => useSpring({opacity: 1, from: {opacity: 0}, delay: milisec, config: config.slow}))
const DivSeparator = styled.div`
  padding-top: 4em;
`;
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
      <animated.div style={delayTypo(1500)}>
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
      </animated.div>
      <animated.div style={delayTypo(2500)}>

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
      </animated.div>

      <animated.div style={delayTypo(1000)}>
      <img
        src={laBodicaLogo}
        alt='laBodica'
        className={classes.bodicaLogo}
      />
      </animated.div>
      <animated.div style={delayTypo(4000)}>
      {/*<animated.div style={typoProps4}>*/}
      <Typography
        color="inherit"
        align="center"
        variant="h1"
        component="h3"
        marked="center"
        // className={}
        className={classes.typographyLauraDavid}
      >
        Laura  y  David
      </Typography>
      </animated.div>

      <animated.div style={delayTypo(4500)}>
        <DivSeparator>
        <Separator/>
      </DivSeparator>
      </animated.div>
    </PortadaLayout>

    {/*<ExpandMoreIcon className={classes.arrow} />*/}
    </>
  );
}

Portada.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Portada);
