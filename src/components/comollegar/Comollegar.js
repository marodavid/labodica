import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Grid } from "@material-ui/core";
// import {Icon, SvgIcon} from "@material-ui/core";

// import GoogleMapIcon from '../../images/pendientes_de_usar/googleMapIcon.svg'

const styles = (theme) => ({
	root: {
		marginLeft: theme.spacing(4),
		margin: 'auto',
	},
	content: {
		marginLeft: theme.spacing(4),
		fontSize: '16px',
	},
})

const Comollegar = (props) => {
	const { classes } = props;

	return(
		<Grid container className={classes.root}>
			<Grid item xs={12} sm={12} md={12} lg={12}>
				<h3>Los aeropuertos mas cercanos son los siguientes </h3>
			</Grid>
			<Grid item xs={12} sm={12} md={12} lg={12} >
				<h4>Aeropuerto de Alicante</h4>
				<p className={classes.content}>
					Se encuentra a 1 hora y 20 minutos de los lugares de la boda<br/>
					Dispone de muchas conexiones y mucho trafico aereo
				</p>
			</Grid>
			<Grid item xs={12} sm={12} md={12} lg={12}>
				<h4>Aeropuerto de Murcia-Corvera</h4>
				<p className={classes.content}>
					Se encuentra a 40 minutos de los lugares de la boda<br/>
					Es un aeropuerto inaugurado hace solo 2 años. El numero de vuelos es muy limitado
				</p>
			</Grid>
			<Grid item xs={12} sm={12} md={12} lg={12}>
				<h4>Aeropuerto de Madrid-Barajas (Adolfo Suarez)</h4>
				<p className={classes.content}>
					Se encuentra a 450 kms de los lugares de la boda<br/>
					Se tarda 4 horas y media en coche o autobus hasta los lugares de la boda. En tren 4 horas hasta la ciudad de Murcia.<br/>
					Es una buena opcion solo si la conexion final para volar a Alicante o Murcia encarece muchisimo el precio final del billete de avion
				</p>
			</Grid>
			<Grid item xs={12} sm={12} md={12} lg={12}>
				<h3><b>Mas informacion y mas detalles proximamente. </b></h3>
			</Grid>
		</Grid>

	)
}

Comollegar.propTypes = {
	classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Comollegar)
