import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from './GeneralAppBar';
import Toolbar, { styles as toolbarStyles } from './GeneralToolbar';
import {Slide, Typography} from "@material-ui/core";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 36,
    fontFamily: 'Yellowtail',
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
    underline: false,
  },
  center: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  centerLink: {
    fontSize: 50,
    fontFamily: 'Yellowtail',
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
    underline: false,
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
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
    <div>
      <AppBar position="fixed" variant="scrollable">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left}>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink)}
              href="/"
            >
              <HomeOutlinedIcon/>
            </Link>
          </div>
          <div className={classes.center}>
            <Typography
              variant="h1"
              underline="none"
              className={clsx(classes.rightLink)}
            >
              {'La Bodica'}
            </Typography>
          </div>
          <div className={classes.right}>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink)}
              href="https://wa.me/4917698623567"
              rel="noopener noreferrer"
              target="_blank"
            >
              <WhatsAppIcon />
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink)}
              href="http://m.me/david.b.pedreno"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FacebookIcon/>
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink)}
              // , classes.linkSecondary)}
              href=" http://www.instagram.com/loquitos"
              rel="noopener noreferrer"
              target="_blank"
            >
              <InstagramIcon/>
            </Link>

          </div>
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
