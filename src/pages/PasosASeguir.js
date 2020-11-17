import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import Button from '../modules/components/Button';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import HotelIcon from '@material-ui/icons/Hotel';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import EventIcon from '@material-ui/icons/Event';
import CurvyLines from '../themes/appCurvyLines.png'

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
    // padding: theme.spacing(2, 4),
    // fontSize: theme.typography.pxToRem(14),
    boxShadow: 'none',
    '&:active, &:focus': {
      boxShadow: 'none',
    },

    // sizeSmall: {
    //   padding: theme.spacing(1, 3),
    //   fontSize: theme.typography.pxToRem(13),
    // },
    // sizeLarge: {
      padding: theme.spacing(2, 5),
      fontSize: theme.typography.pxToRem(16),
    // },
  },
});

function PasosASeguir(props) {
  const { classes } = props;

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
          underline
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
                  // size="large"
                  variant="outlined"
                  className={classes.button}
                  // startIcon={<CloudUploadIcon />}
                  component="a"
                  href="/premium-themes/onepirate/sign-up/"
                >
                  RSVP
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>2.</div>
                {/*<img*/}
                {/*  src="/static/themes/onepirate/productHowItWorks2.svg"*/}
                {/*  alt="graph"*/}
                {/*  className={classes.image}*/}
                {/*/>*/}
                <HotelIcon font="large" className={classes.image}/>
                <Typography variant="h5" align="center">
                  Mira las recomendaciones de alojamiento que tenemos para ti.
                </Typography>
                <Button
                  color="secondary"
                  size="large"
                  variant="outlined"
                  className={classes.button}
                  // startIcon={<CloudUploadIcon />}
                  component="a"
                  // href="/premium-themes/onepirate/sign-up/"
                >
                  Opciones
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
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
                  // startIcon={<CloudUploadIcon />}
                  component="a"
                  // href="/premium-themes/onepirate/sign-up/"
                >
                  Agenda
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
        {/*<Button*/}
        {/*  color="secondary"*/}
        {/*  size="large"*/}
        {/*  variant="contained"*/}
        {/*  className={classes.button}*/}
        {/*  // startIcon={<CloudUploadIcon />}*/}
        {/*  component="a"*/}
        {/*  href="/premium-themes/onepirate/sign-up/"*/}
        {/*>*/}
        {/*  Empieza hoy mismo*/}
        {/*</Button>*/}
      </Container>
    </section>
  );
}

PasosASeguir.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PasosASeguir);
