import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from './AppBar';
import Toolbar, { styles as toolbarStyles } from './Toolbar';
import {Slide} from "@material-ui/core";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
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
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
    underline: false,
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});


function TopMenu(props) {
  const { window } = props
  const { classes } = props;

  const trigger = useScrollTrigger({ target: window ? window() : undefined });


  return (
    <Slide appear={false} direction="down" in={!trigger}>
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              // href="/rsvp/"
              onClick = { () => alert('Es un poco pronto. Nosotros te avisamos') }
            >
              {'RSVP'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink)}
              href="/informacion#agenda"
            >
              {'AGENDA'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink)}
              // , classes.linkSecondary)}
              href="/informacion#hoteles"
            >
              {'HOTELES'}
            </Link>
          </div>
          <div className={classes.right}>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink)}
              // , classes.linkSecondary)}
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
              // , classes.linkSecondary)}
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

TopMenu.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopMenu);
