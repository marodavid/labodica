import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from './TopAppBar';
import Toolbar, { styles as toolbarStyles } from './TopToolbar';
import {Slide} from "@material-ui/core";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
// import InstagramIcon from '@material-ui/icons/Instagram';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";


const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    position: 'relative',
    display: 'flex',
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
    // fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
    // underline: false,
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function TopMenu(props) {
  const { window } = props
  const { classes } = props;

  //Dialog
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {/*<div className={classes.left}>*/}
          <div className={classes.left}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              // className={classes.rightLink}
              // href="/rsvp/"
              onClick = { () => handleClickOpenDialog() }
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
              href="https://www.facebook.com/events/3730092333719587/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FacebookIcon/>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
      <div>
        <Dialog
          open={openDialog}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleCloseDialog}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{"No nos confirmeis la asistencia todavia"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Debido a la pandemia, entendemos que no nos podeis confirmar la asistencia todavia.
              Mas adelante, te avisaremos para que nos confirmes y puedas acompañarnos.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="transparent">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
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
