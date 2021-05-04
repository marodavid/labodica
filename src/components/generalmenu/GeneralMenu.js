import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Link,
  Slide,
  Typography,
  SvgIcon,
  Tooltip
} from "@material-ui/core";

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';

import AppBar from './GeneralAppBar';
import Toolbar, { styles as toolbarStyles } from './GeneralToolbar';
import { IconFlagUK } from 'material-ui-flags';
// import {ReactComponent as sos} from '../../images/piedepagina/sosIcon.svg'
import {ReactComponent as sos} from '../../images/piedepagina/sos2.svg'
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";


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
  whatsappLink: {
    color: 'green',
    marginLeft: theme.spacing(1),
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function GeneralMenu(props) {
  const { window } = props
  const { classes } = props;

  const [openSos, setOpenSos] = React.useState(false)

  const handleClickOpenSos = () => {
    setOpenSos(true);
  };
  
  const handleCloseSos = () => {
    setOpenSos(false);
  };
  
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
                <Tooltip title={'Inicio'}>
                  <HomeOutlinedIcon fontSize={'large'}/>
                </Tooltip>
              </Link>
              <Link
                variant="h6"
                underline="none"
                className={clsx(classes.derechaLink)}
                // href="https://wa.me/34665898440"
                rel="noopener noreferrer"
                target="_blank"
                onClick = { () => handleClickOpenSos() }
              >
                <Tooltip title={'Preguntas y Emergencias'}>
                  <SvgIcon fontSize={'large'} color={"secondary"} component={sos} viewBox="0 0 600 476.6" alt={'Emergencia'}/>
                </Tooltip>
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
                  // href="https://www.facebook.com/events/3730092333719587/"
                  rel="noopener noreferrer"
                  target="_blank"
                  onClick = { () => alert('Próximamente')}
                >
                  <Tooltip title={'Evento Facebook'}>
                    <FacebookIcon fontSize={'large'}/>
                  </Tooltip>
                </Link>
                <Tooltip title={'Translate'}>
                  <Link
                    variant="h6"
                    underline="none"
                    className={clsx(classes.derechaLink)}
                    href="https://translate.google.com/translate?sl=es&tl=en&u=https://labodica.es/informacion%23agenda"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <IconFlagUK fontSize={'large'}/>
                  </Link>
                </Tooltip>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
      <div>
        <Dialog
          open={openSos}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleCloseSos}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{"Preguntas y Emergencias"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Si tienes cualquier pregunta sobre la boda: ceremonia, protocolo, código de vestimenta, horarios, alojamiento, peluquerías, ¡lo que sea!.<br/>
              No dudes en contactar con nuestra Wedding planner. Ella te ayudará y te resolverá todas las preguntas y/o emergencias que puedas tener.<br/>
              <b>Arancha Núñez</b>
              <Link
                variant="h6"
                underline="none"
                className={clsx(classes.whatsappLink)}
                href="https://wa.me/34665898440"
                rel="noopener noreferrer"
                target="_blank"
              >
                <WhatsAppIcon/><br/>+34 665 89 84 40
              </Link>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseSos} color="transparent">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  </Slide>
  );
}

GeneralMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GeneralMenu);
