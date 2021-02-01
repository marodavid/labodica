import * as React from 'react'
import PropTypes from 'prop-types'
// import { useSelector } from 'react-redux'
// import Interpolate from '@trendmicro/react-interpolate'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
// import Container from '@material-ui/core/Container'
// import Divider from '@material-ui/core/Divider'
import Link from '@material-ui/core/Link'

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import InstagramIcon from '@material-ui/icons/Instagram';

import greenheart from '../../images/piedepagina/greenHeart.png'

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(2),
    backgroundColor: '#b1cbbb',
    '& a': {
      '& hover': {
        color: 'red',
      }
    },
  },
 footer: {
    padding: theme.spacing(3, 0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8, 0),
    },


  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
      width: 40,
      height: 31,
      marginRight: theme.spacing(1.5),
      marginLeft: theme.spacing(1.5),
    },

    fontFamily: 'Dancing Script',
    fontSize: 70,
    [theme.breakpoints.down('sm')]: {
      fontSize: 50,
    },

  },
  list: {
    '& h3': {
      fontWeight: theme.typography.fontWeightMedium,
    },
    '& ul': {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    '& li': {
      padding: '6px 0',
      color: theme.palette.text.secondary,
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  listElement: {
    textTransform: 'none',
  },
  facebook: {
    padding: '6px 0',
  },
  version: {
    paddingRight: '2rem',
    paddingBottom: '1rem',
    paddingTop: '0rem',
    [theme.breakpoints.down('md')]: {
      paddingTop: '1rem',
    }
  },
  gridCenter: {
    justifyContent: 'center',
    fontFamily: 'Dancing Script',
    fontSize: 70,
  }
});

function PiePagina(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
          <Grid container
                row
                justify="center"
                alignItems="center"
          >
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography
                component="h2"
                gutterBottom
                className={classes.logo}
                >
                <img src={greenheart} alt="" />
                {'La Bodica'}
                <img src={greenheart} alt=""/>
               </Typography>
            </Grid>
            <Grid item xs={8} sm={3} className={classes.list}>
              <Typography component="h2" gutterBottom>
                {'Contacta con nosotros'}
              </Typography>
              <ul>
                <li  className={classes.listElement} >
                  <Link color="inherit" variant="body2" href="https://wa.me/4915759649209">
                    <WhatsAppIcon fontSize="inherit"/>
                    {' Laura: +49-15759649209'}
                  </Link>
                </li>
                <br/>
                <li  className={classes.listElement} >
                  <Link color="inherit" variant="body2" href="https://wa.me/4917698623567">
                  <WhatsAppIcon fontSize="inherit"/>
                  {' David: +49-17698623567'}
                  </Link>
                </li>
              </ul>
             </Grid>
          </Grid>
          <div align="right" className={classes.version}>
            <Typography  color="textSecondary" variant="body2">
              {' Copyright © '}<b>
              {new Date().getFullYear()}
              {' La Bodica. '}
              </b>
            </Typography>
          </div>
    </div>
  );
}

PiePagina.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PiePagina);
