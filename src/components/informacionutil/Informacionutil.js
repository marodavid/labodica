import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';

import {Accordion, AccordionDetails, AccordionSummary, Grid} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'; 

import climaMurcia from '../../images/informacionutil/MurciaClimaHistorico.png'


const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '1200px'
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: '33.33%',
		flexShrink: 0,
		fontWeight: 'bold',
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
	emails: {
		width: '100%',
		wordWrap:'break-word',
	},
	parrafoClima: {
		fontSize: '18px',
		paddingLeft: '20px',
		textAlign: 'center',
	},
	parrafo: {
		fontSize: '18px',
		paddingLeft: '20px',
		textAlign: 'justify',
	}
}));

const Informacionutil = () => {

	const classes = useStyles()
	const [expanded, setExpanded] = useState(false)
	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false)
	}
	
	const peluquerias = [
		{
			nombre: 'Massimo Virgolini',
			telefono: '+34-968248733  //  +34-610077306',
			web: 'https://massimovirgolini.com/',
			detalles: 'Al pedir cita nombrar el código "BODA LAURA Y DAVID"',
			direccion: 'CENTRO COMERCIAL CentroFama, C/ Puerta Nueva, 29, 30008 Murcia',
			googlemap: 'https://g.page/massimovirgolini?share'
		},
		{
			nombre: 'Salonissimo',
			telefono: '+34-968715077',
			web: 'http://salonissimo.es/',
			detalles: 'Al pedir cita nombrar el código "BODA LAURA Y DAVID"',
			direccion: 'C/ Puerta Nueva, 3, 30001 Murcia',
			googlemap: 'https://goo.gl/maps/TGi8t4Mm4v1vxBSy5'
		},
		{
			nombre: 'Alegría Peluqueros',
			telefono: '+34-968210241',
			web: 'https://www.alegriapeluqueros.com/',
			detalles: 'Al pedir cita nombrar el código "BODA LAURA Y DAVID"',
			direccion: 'Gran Vía del Escultor Francisco Salzillo, 1, 30004 Murcia.',
			googlemap: 'https://g.page/alegriapelu?share'
		},
		{
			nombre: 'Alegría Peluqueros (2da direccion)',
			telefono: '+34-968218895',
			web: 'https://www.alegriapeluqueros.com/',
			detalles: 'Al pedir cita nombrar el código "BODA LAURA Y DAVID"',
			direccion: 'C/ Puerta Nueva, 3, 30001 Murcia',
			googlemap: 'https://goo.gl/maps/TGi8t4Mm4v1vxBSy5'
		},
		{
			nombre: 'Arturo Molina Estilistas',
			telefono: '+34-968294629',
			web: 'http://arturomolina.es/',
			detalles: 'Al pedir cita nombrar el código "BODA LAURA Y DAVID"',
			direccion: 'Calle Actor Francisco Rabal, 2, 30009 Murcia (Justo detrás del hotel NH Amistad)',
			googlemap: 'https://www.google.com/maps/place/Arturo+Molina+stylists,+Calle+Actor+Francisco+Rabal,+2,+30009+Murcia,+Spain/@37.9901121,-1.1376426,17z/data=!4m2!3m1!1s0xd6381f5ce27a1ab:0x79da469596343b09'
		},
		
	]

	return(
		<div className={classes.root} style={{textTransform:'none', color: 'black'}}>
			<Accordion expanded={expanded === 'dressing'} onChange={handleChange('dressing')} style={{textTransform:'none', color: 'black', topPadding: '20px'}}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
				>
					<Typography className={classes.heading}>Código de vestimenta (Dress code)</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Grid item xs={12} sm={12} md={12} lg={12}>
						<p className={classes.parrafo}>
							Nos importa más su presencia, que su apariencia <InsertEmoticonIcon fontSize="medium" style={{paddingTop: '6px'}}/>. Sin embargo, para ayudarles a elegir
							su vestimenta y considerando que la boda es de día, les recomendamos el dress code conocido como <i>dressy casual - semi formal</i>.
						</p>
						<p className={classes.parrafo}>
							No se olviden revisar las temperaturas de esa época del año en la siguiente sección: <i>El tiempo en Murcia</i> 
						</p>
					</Grid>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'clima'} onChange={handleChange('clima')} style={{textTransform:'none', color: 'black', topPadding: '20px'}}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
				>
					<Typography className={classes.heading}>El tiempo en Murcia</Typography>
					{/*<Typography className={classes.secondaryHeading}>{cifras.traenNinos}</Typography>*/}
				</AccordionSummary>
				<AccordionDetails>
					<Grid container
								direction="row"
								justify="space-evenly"
								alignItems="flex-start"
								spacing={1}>

						<Grid item xs={12} sm={12} md={6} lg={6}>
							<img src={climaMurcia} alt="clima" height="auto" width="100%"/>
						</Grid>
						<Grid item xs={12} sm={12} md={6} lg={6}>
							<h3 style={{color: 'black', textAlign:'center'}}>Tiempo histórico en Murcia</h3>
							<p className={classes.parrafoClima}>Estas son las temperaturas históricas.<br/>Cuando se acerquen los días de La Bodica,<br/>actualizaremos esta sección con la previsión meteorológica.</p>
						</Grid>
					</Grid>
					{/*<div style={{width: '45%', color: 'black'}}>*/}
					{/*	<img src={climaMurcia} alt="clima" height="auto" width="100%"/>*/}
					{/*</div>*/}
					{/*<div style={{width: '55%', color: 'black'}}>*/}
					{/*	<h3 style={{color: 'black', textAlign:'center'}}>Tiempo histórico en Murcia</h3>*/}
					{/*	<p className={classes.parrafoClima}>Estas son las temperaturas históricas.<br/>Cuando se acerquen los días de La Bodica,<br/>actualizaremos esta sección con la previsión meteorológica.</p>*/}
					{/*</div>*/}
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'restaurantes'} onChange={handleChange('restaurantes')} style={{textTransform:'none', color: 'black', topPadding: '20px'}}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
				>
					<Typography className={classes.heading}>Restaurantes recomendados</Typography>
					{/*<Typography className={classes.secondaryHeading}>{cifras.traenNinos}</Typography>*/}
				</AccordionSummary>
				<AccordionDetails>
					<Grid container
								direction="row"
								justify="space-evenly"
								alignItems="flex-start"
								spacing={1}>
						<Grid item xs={12} sm={12} md={6} lg={6}>
							<p>Próximamente</p>
						</Grid>
					</Grid>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'salones'} onChange={handleChange('salones')} style={{textTransform:'none', color: 'black', topPadding: '20px'}}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
				>
					<Typography className={classes.heading}>Salones de belleza</Typography>
					{/*<Typography className={classes.secondaryHeading}>{cifras.traenNinos}</Typography>*/}
				</AccordionSummary>
				<AccordionDetails>
					<Grid container
								direction="row"
								justify="space-evenly"
								alignItems="flex-start"
								spacing={1}>
						<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
							<Typography variant="body1">
								<strong>Importante: </strong>Si además de peinado, deseas también servicio de maquillaje, recuerda mencionarlo al hacer tu cita con los salones de belleza.
							</Typography>
						</Grid>
						<Grid item xs={12} sm={12} md={12} lg={12} xl={12} />
					{peluquerias.map((peluqueria) => (
						<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
							<Typography variant="h5">{peluqueria.nombre}</Typography>
							<p>
								<span><strong>Teléfono: </strong>{peluqueria.telefono}</span><br/>
								<span><strong>Web: </strong>
									<a href={peluqueria.web} 
										 target='_blank'
										 rel="noopener noreferrer">{
										 	peluqueria.web}
									</a>
								</span><br/>
								<span><strong>Google Map: </strong>
									<a href={peluqueria.googlemap}
										 target='_blank'
										 rel="noopener noreferrer">
										Ver en Google Maps</a>
								</span><br/>
								<span><strong>Dirección: </strong>{peluqueria.direccion}</span><br/>
								<span><strong>Detalles: </strong>{peluqueria.detalles}</span>
							</p>
						</Grid>
					))}
					</Grid>
				</AccordionDetails>
			</Accordion>
		</div>
	)
}

export default Informacionutil
