import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import {useSpring, animated, config} from 'react-spring'
import { withStyles } from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";
// import Button from '../modules/components/Button';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PortadaLayout from './PortadaLayout';
import losLoquitos from '../images/iglesia3.png'
import laBodicaLogo from '../images/labodicaOriginal.webp'
import styled from 'styled-components'
import Separator from "../components/Separator";
import CountDown from "../components/CountDown";

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${losLoquitos})`,
    // backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
    alignItems: 'center',
    height: '100%',
  },
  button: {
    minWidth: 150,
    align: 'right',
    position: 'absolute',
    // position: 'flex-right',
    top: '4em',
    // top: theme.spacing(4),
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
  typographyWelcome: {
    // fontFamily: 'Petit Formal Script',
    // fontFamily: 'Dancing Script',
    // fontStyle: 'italic',
    textTransform: 'none',
    opacity: '0.95',
    paddingTop: '2em',
  },
  typography: {
    // fontFamily: 'Petit Formal Script',
    // fontFamily: 'Dancing Script',
    // fontStyle: 'italic',
    textTransform: 'none',
    opacity: '0.95',
    // paddingTop: '2em',
  },
  // @media screen and (max-width: 860px) {
  //   .typographyLauraDavid { opacity: 0; width: 0; }}
  // }
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
const DivCountdown = styled.div`
  padding-top: 2em;
`;


function Portada(props) {
  const { classes } = props;
  const matches = useMediaQuery('(width: 600px)')

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
        component={Link}
        to={"/rsvp/"}
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
        className={classes.typographyWelcome}
      >
        Bienvenidos a <br /> La Bodica
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

    {/*<ExpandMoreIcon className={classes.arrow} />*/}
    </>
  );
}

Portada.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Portada);
