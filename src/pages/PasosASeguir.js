import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import HotelIcon from '@material-ui/icons/Hotel';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import EventIcon from '@material-ui/icons/Event';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'
import LiveHelpIcon from '@material-ui/icons/LiveHelp'
import RedeemIcon from '@material-ui/icons/Redeem'

import CurvyLines from '../images/sugerencias/appCurvyLines.png'
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import {Slide} from "@material-ui/core";


const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(14),
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 55,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    fontSize: 48,
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing(8),
    borderRadius: 0,
    fontWeight: theme.typography.fontWeightMedium,
    fontFamily: theme.typography.h1.fontFamily,
    padding: theme.spacing(2, 5),
    fontSize: theme.typography.pxToRem(16),
    boxShadow: 'none',
    '&:active, &:focus': {
      boxShadow: 'none',
    },
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function PasosASeguir(props) {
  const { classes } = props;

  //Dialog
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  
  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src={CurvyLines}
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography
          variant="h4"
          marked="center"
          className={classes.title}
          component="h2"
          underline="true"
        >
          Acompañanos a celebrar nuestro dia
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>1.</div>
                <AssignmentTurnedInIcon size="large" className={classes.image} />
                <Typography variant="h5" align="center">
                  Confirmanos tu asistencia usando el boton RSVP.
                </Typography>
                <Button
                  color="secondary"
                  variant="outlined"
                  className={classes.button}
                  component={ Link }
                  // onClick = { () => handleClickOpenDialog() }
                  to="/rsvp/"
                >
                  RSVP
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>2.</div>
                <EventIcon font="large" className={classes.image}/>
                <Typography variant="h5" align="center">
                  {'¿Quieres saber que te espera?. '}
                  {'¡¡Consulta la agenda completa!!.'}
                </Typography>
                <Button
                  color="secondary"
                  size="large"
                  variant="outlined"
                  className={classes.button}
                  component={ Link }
                  to="/informacion#agenda"
                >
                  Agenda
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
                <HotelIcon font="large" className={classes.image}/>
                <Typography variant="h5" align="center">
                  Mira las recomendaciones de alojamiento que tenemos para ti.
                </Typography>
                <Button
                  color="secondary"
                  size="large"
                  variant="outlined"
                  className={classes.button}
                  component={ Link }
                  to="/informacion#hoteles"
                >
                  Hoteles
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={12} />
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>4.</div>
                <FlightTakeoffIcon size="large" className={classes.image} />
                <Typography variant="h5" align="center">
                  Descubre cómo llegar a Murcia y disfrutar de La Bodica.
                </Typography>
                <Button
                  color="secondary"
                  variant="outlined"
                  className={classes.button}
                  component={ Link }
                  // onClick = { () => handleClickOpenDialog() }
                  to="/informacion#comollegar"
                >
                  COMO LLEGAR
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>5.</div>
                <LiveHelpIcon font="large" className={classes.image}/>
                <Typography variant="h5" align="center">
                  {'Todas tus dudas sobre La Bodica (clima, dress code, peluquerías, etc.)'}
                  {/*{'¡El clima, Dress code, Peluquerias, todo aquí!.'}*/}
                </Typography>
                <Button
                  color="secondary"
                  size="large"
                  variant="outlined"
                  className={classes.button}
                  component={ Link }
                  to="/informacion#informacion"
                >
                  {'Dudas Q&A'}
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>6.</div>
                <RedeemIcon font="large" className={classes.image}/>
                <Typography variant="h5" align="center">
                  {'Hemos preparado una lista de bodas diferente. Encuéntrala aquí'}
                </Typography>
                <Button
                  color="secondary"
                  size="large"
                  variant="outlined"
                  className={classes.button}
                  component={ Link }
                  to="/listaboda/"
                >
                  Lista de Boda
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
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
      </Container>
    </section>
  );
}

PasosASeguir.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PasosASeguir);
