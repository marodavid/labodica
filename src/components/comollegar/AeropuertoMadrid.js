import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import {Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";
import Image from 'material-ui-image'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import busAeropuertoMadrid from "../../images/comollegar/busAeropuertoMadrid.png";
// import busMadridMurcia from "../../images/comollegar/busMadridMurcia.png";
import trenesMadridMurcia from "../../images/comollegar/trenesMadridMurcia.png";


const styles = (theme) => ({
	titulo: {
		fontSize: '18px',
	},
	content: {
		fontSize: '16px',
		whiteSpace: 'normal',
	},
	heading: {
		// fontSize: theme.typography.pxToRem(12),
		fontSize: '14px',
		flexBasis: '80.66%',
		flexShrink: 0,
	},
	secondaryHeading: {
		// fontSize: theme.typography.pxToRem(12),
		fontSize: '14px',
		color: theme.palette.text.secondary,
	},
	busMadridMurcia: {
		width: '100%',
	},
})


const AeropuertoMadrid = (props) => {
	const { classes } = props;

	const [expanded, setExpanded] = useState(false)
	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false)
	}
	
	return (
	<>
		<h4 className={classes.titulo}><b>Aeropuerto de Madrid-Barajas (Adolfo Suarez)</b></h4>
		<p className={classes.content}>
		Se encuentra a 400 kms de la ciudad de Murcia.<br/>
		Como se puede llegar desde Madrid a Murcia?<br/>
		<br/>
		<Accordion expanded={expanded === 'trenMadrid'} onChange={handleChange('trenMadrid')} style={{textTransform:'none', color: 'black', topPadding: '20px'}}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1bh-content"
				id="panel1bh-header"
			>
				<Typography className={classes.heading}>Tren Madrid-Murcia (todos los pasos)</Typography>
				<Typography className={classes.secondaryHeading}>3 horas (+ 30 Minutos Bus)</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<div>
					<p className={classes.content}>
						<b>Paso 1.</b><br/>
						Tomar el autobús 24 horas que conecta el Aeropuerto de Madrid con la Estación de tren de Atocha.&nbsp;
						<a href="https://www.emtmadrid.es/Aeropuerto.aspx">(Web del Bus)</a><br/>
						<Image src={busAeropuertoMadrid} styles={{width: 'auto', height: 'auto'}}/>
					</p>
					
					{/*<img src={busAeropuertoMadrid} alt={'Bus Aeropuerto Madrid'} style={{width: 'auto', height: 'auto'}}/><br/>*/}
					<p className={classes.content}>
						<b>Paso 2.</b><br/>
						Tomar el tren de RENFE de la ruta Madrid - Murcia<br/>
						<a href="http://www.renfe.com/es/es" target="_blank" rel="noopener noreferrer">
							Web de RENFE
						</a>
					</p>
					<img src={trenesMadridMurcia} alt={'Tren Madrid-Murcia'} style={{width: '100%', height: 'auto'}}/><br/>
					<p className={classes.content}>
						<b>Paso 3.</b><br/>
						Tomar un taxi desde la Estación de tren de Murcia al hotel (trayecto 15 minutos, precio 10-15 Euros)
						<br/>
					</p>
				</div>
			</AccordionDetails>
		</Accordion>
		<Accordion expanded={expanded === 'busMadrid'} onChange={handleChange('busMadrid')} style={{textTransform:'none', color: 'black', topPadding: '20px'}}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1bh-content"
				id="panel1bh-header"
			>
				<Typography className={classes.heading}>Bus Aeropuerto Madrid - Murcia</Typography>
				<Typography className={classes.secondaryHeading}>5 horas</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<div className={classes.busMadridMurcia}>
					<p className={classes.content}>
						La compañía de autobuses ALSA tiene una ruta que conecta directamente el Aeropuerto de Madrid con la ciudad de Murcia.<br/>
						<a href="http://www.alsa.es/" target="_blank" rel="noopener noreferrer">
							Web de ALSA
						</a>
					</p>
					<p className={classes.content}>
						Personalmente, recomendamos el viaje en tren por comodidad, pero queríamos darles a conocer esta opción.
					</p>
				</div>
				{/*<div className={classes.busMadridMurcia}>*/}
				{/*	<img src={busMadridMurcia} alt="" style={{width: '90%', height: 'auto'}}/>*/}
				{/*</div>*/}
			</AccordionDetails>
		</Accordion>
		<Accordion expanded={expanded === 'cocheMadrid'} onChange={handleChange('cocheMadrid')} style={{textTransform:'none', color: 'black', topPadding: '20px'}}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1bh-content"
				id="panel1bh-header"
			>
				<Typography className={classes.heading}>Coche de Alquiler - Aeropuerto Madrid</Typography>
				<Typography className={classes.secondaryHeading}>5 horas</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<p className={classes.content}>
					Alquilar un coche en el mismo aeropuerto es una buena opción si desean viajar con más libertad y aprovechar los días antes y después de la boda para hacer turismo.<br/><br/>
					<a href="https://www.rentalcars.com"><b>Rentalcars.com</b></a> es una web que funciona muy bien comparando los mejores precios de las muchas empresas que operan en el Aeropuerto de Madrid.<br/>
				</p>
			</AccordionDetails>
		</Accordion>

		<br/>
	</p>
		</>
	)
}

AeropuertoMadrid.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AeropuertoMadrid)
