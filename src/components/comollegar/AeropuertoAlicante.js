import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import {Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";


const styles = (theme) => ({
	titulo: {
		fontSize: '18px',
	},
	content: {
		fontSize: '16px',
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
})


const AeropuertoAlicante = (props) => {
	const { classes } = props;

	const [expanded, setExpanded] = useState(false)
	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false)
	}
	
	return (
<>
	 <h4 className={classes.titulo} ><b>Aeropuerto de Alicante-Elche (ALC)</b></h4>
		
		 <p className={classes.content}>
		 	Se encuentra a 75 kms de la ciudad de Murcia.<br/>
		 	Como se puede llegar desde Alicante a Murcia?<br/>
		 	<br/>
		 	<Accordion expanded={expanded === 'busAlicante'} onChange={handleChange('busAlicante')} style={{textTransform:'none', color: 'black', topPadding: '20px'}}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
				>
					<Typography className={classes.heading}>Autobús Aeropuerto Alicante - Murcia</Typography>
					<Typography className={classes.secondaryHeading}>55 Minutos</Typography>
				</AccordionSummary>
				<AccordionDetails>
						<p className={classes.content}>
							La compañía de autobuses Alsa tiene una ruta que conecta directamente el Aeropuerto de Alicante con la ciudad de Murcia.&nbsp;
							<a href="https://www.alsa.es/" target='_blank' rel="noopener noreferrer">(Web de Alsa)</a><br/>
						</p>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'cocheAlicante'} onChange={handleChange('cocheAlicante')} style={{textTransform:'none', color: 'black', topPadding: '20px'}}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
				>
					<Typography className={classes.heading}>Coche de alquiler -Aeropuerto Alicante-</Typography>
					<Typography className={classes.secondaryHeading}>45 Minutos</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div>
						<p className={classes.content}>
							Alquilar un coche en el mismo aeropuerto es una buena opción si desean hacer visitas turísticas a la ciudad de Cartagena o a las playas de la región.
						</p>
						<p>
							<a href="https://www.rentalcars.com"><b>Rentalcars.com</b></a> es una web que funciona muy bien comparando los mejores precios de las muchas empresas que operan en el Aeropuerto de Alicante.<br/>
						</p>
					</div>
				</AccordionDetails>
			</Accordion>
		</p>
	</>
	)
		
	
}

AeropuertoAlicante.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AeropuertoAlicante)
