import React from 'react';
import PropTypes from 'prop-types';
import {useSpring, animated, config} from 'react-spring'

import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import PortadaLayout from './PortadaLayout';
import losLoquitos from '../images/portada/parroquiaAnchura.png'
import laBodicaLogo from '../images/portada/labodicaOriginal.webp'
import Separator from "../components/Separator";
import CountDown from "../components/CountDown";
import TopMenu from "../components/topMenu/TopMenu";


const styles = (theme) => ({
  background: {
    backgroundImage: `url(${losLoquitos})`,
    // backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
    alignItems: 'center',
    height: '100%',
  },
  typographyWelcome: {
    textTransform: 'none',
    opacity: '0.95',
    paddingTop: '2em',
  },
  typographyLauraDavid: {
    fontFamily: 'Dancing Script',
    textTransform: 'none',
    opacity: '0.95',
    transitionProperty: 'opacity',
    transitionDuration: '3s',
    transitionDelay: '1s',
  },
  bodicaLogo: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '30%',
    [theme.breakpoints.down('md')]: {
      width: '50%',
    },
  },
  welcomeHide: {
    display: 'inherit',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },

  }
});

// eslint-disable-next-line react-hooks/rules-of-hooks
const delayTypo = ((milisec) => useSpring({opacity: 1, from: {opacity: 0}, delay: milisec, config: config.slow}))
const DivSeparator = styled.div`
  padding-top: 4em;
`;
const DivCountdown = styled.div`
  padding-top: 2em;
`;

function Portada(props) {
  const { classes } = props;

  return (
    <PortadaLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none'}}
        src={losLoquitos}
        alt="increase priority"
      />
      <TopMenu />
      <animated.div style={delayTypo(1500)}>
      <Typography
        color="inherit"
        align="center"
        variant="h1"
        component="h2"
        marked="center"
        className={classes.typographyWelcome}
      >
        <span className={classes.welcomeHide}>Bienvenidos a <br /></span> La Bodica
      </Typography>
      </animated.div>

      <animated.div style={delayTypo(1000)}>
      <img
        src={laBodicaLogo}
        alt='laBodica'
        className={classes.bodicaLogo}
      />
      </animated.div>
      <animated.div style={delayTypo(2500)}>
      <Typography
        color="inherit"
        align="center"
        variant="h1"
        component="h3"
        marked="center"
        className={classes.typographyLauraDavid}
      >
        Laura  y  David
      </Typography>
      </animated.div>

      <animated.div style={delayTypo(3000)}>
        <DivSeparator>
        <Separator/>
      </DivSeparator>
      </animated.div>
      <DivCountdown>
        <CountDown/>
      </DivCountdown>
    </PortadaLayout>
  );
}

Portada.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Portada);
