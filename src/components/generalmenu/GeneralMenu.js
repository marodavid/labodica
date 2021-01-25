import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Link,
  Slide,
  Typography
} from "@material-ui/core";

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';

import AppBar from './GeneralAppBar';
import Toolbar, { styles as toolbarStyles } from './GeneralToolbar';


const styles = (theme) => ({

  root: {
    flexGrow: 1,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  center: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  centerLink: {
    fontSize: 36,
    fontFamily: 'Dancing Script',
    color: theme.palette.common.white,
    underline: false,
  },
  derecha: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  derechaLink: {
    color: theme.palette.common.white,
    marginLeft: theme.spacing(1),
    underline: false,
  },
  izquierda: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
  },
  izquierdaLink: {
    color: theme.palette.common.white,
    underline: false,
  },
});


function GeneralMenu(props) {
  const { window } = props
  const { classes } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 70,
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
    <div className={classes.root}>
      <AppBar position="fixed" variant="scrollable">
        <Toolbar className={classes.toolbar}>
          <Grid container row justify="center" alignItems="center">
            <Grid item xs={2} sm={2} md={2} lg={2}>
            <div className={classes.izquierda}>
              <Link
                variant="h6"
                underline="none"
                style={{alignSelf: 'flex-start'}}
                className={clsx(classes.izquierdaLink)}
                href="/"
              >
                <HomeOutlinedIcon fontSize={'large'}/>
              </Link>
            </div>
            </Grid>
            <Grid item xs={8} sm={8} md={8} lg={8}>
            <div className={classes.center}>
              <Typography
                variant="h1"
                underline="none"
                className={clsx(classes.centerLink)}
              >
                {'La Bodica'}
              </Typography>
            </div>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2}>
              <div className={classes.derecha}>
                <Link
                  variant="h6"
                  underline="none"
                  className={clsx(classes.derechaLink)}
                  href="https://www.facebook.com/events/3730092333719587/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FacebookIcon/>
                </Link>
                <Link
                  variant="h6"
                  underline="none"
                  className={clsx(classes.derechaLink)}
                  href="https://wa.me/4917698623567"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <WhatsAppIcon />
                </Link>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  </Slide>
  );
}

GeneralMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GeneralMenu);
