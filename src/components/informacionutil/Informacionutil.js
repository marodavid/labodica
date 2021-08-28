import React, {useState} from 'react'
import { Link } from "react-router-dom";

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
	// secondaryHeading: {
	// 	fontSize: theme.typography.pxToRem(15),
	// 	color: theme.palette.text.secondary,
	// },
	// emails: {
	// 	width: '100%',
	// 	wordWrap:'break-word',
	// },
	parrafoClima: {
		fontSize: '18px',
		paddingLeft: '20px',
		textAlign: 'center',
		[theme.breakpoints.down('md')]: {
			paddingLeft: '0px',
			fontSize: '16px',
		},
	},
	parrafo: {
		fontSize: '18px',
		paddingLeft: '20px',
		textAlign: 'justify',
		[theme.breakpoints.down('md')]: {
			paddingLeft: '0px',
			fontSize: '16px',
		},
	},
	listaItem: {
		fontSize: '18px',
		textAlign: 'justify',
		textTransform: 'none',
		color: 'black',
		[theme.breakpoints.down('md')]: {
			fontSize: '16px',
		},
	},
}));

const Informacionutil = () => {

	const classes = useStyles()
	const [expanded, setExpanded] = useState(false)
	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false)
	}
	
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
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'restaurantes'} onChange={handleChange('restaurantes')} style={{textTransform:'none', color: 'black', topPadding: '20px'}}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
				>
					<Typography className={classes.heading}>Restaurantes recomendados</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Grid container
								direction="row"
								justify="space-evenly"
								alignItems="flex-start"
								spacing={1}>
						<Grid item xs={12} sm={12} md={12} lg={12}>
							<p className={classes.parrafo}>
								Consulte nuestra sección de restaurantes en nuestra sección de turismo <i>"Descubre Murcia"</i>.<br/>
								Haga click en el siguiente enlace:&nbsp;
								<Link to={'/turismo#restaurantes'}><i>Restaurantes Murcia</i></Link>
							</p>
						</Grid>
					</Grid>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'emergencias'} onChange={handleChange('emergencias')} style={{textTransform:'none', color: 'black', topPadding: '20px'}}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
				>
					<Typography className={classes.heading}>Emergencias 112</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Grid container
								direction="row"
								justify="space-evenly"
								alignItems="flex-start"
								spacing={1}>
						<Grid item xs={12} sm={12} md={12} lg={12}>
							<p className={classes.parrafo}>
								En España el número a marcar para emergencias es el 112. Desde ese número se contacta con policia, bomberos o una ambulancia.
								<br/>
								<br/>
								Si su emergencia es relacionada con <i>La Bodica</i>, nuestra Wedding Planner (Arancha) 
								le soluciona todo lo que pueda necesitar. Pueden marcarle o escribirle por Whatsapp al 
								número <a href="https://wa.me/34665898440" target='_blank' rel="noopener noreferrer">+34 665 898 440 </a>. 
							</p>
						</Grid>
					</Grid>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'testcorona'} onChange={handleChange('testcorona')} style={{textTransform:'none', color: 'black', topPadding: '20px'}}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
				>
					<Typography className={classes.heading}>Tests Coronavirus</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Grid container
								direction="row"
								justify="space-evenly"
								alignItems="flex-start"
								spacing={1}>
						<Grid item xs={12} sm={12} md={12} lg={12}>
							<p className={classes.parrafo}>
								En el siguiente enlace de una clínica muy cercana a los hoteles de La Bodica, podrán encontrar información
								para realizarse los distintos tests, en caso de que lo necesiten para regresar a sus destinos.<br/>
								<a href="https://www.quironsalud.es/en/informacion-pruebas-covid#PCR" target='_blank' rel="noopener noreferrer"><i>Enlace a Web de la Clínica</i></a>.
								<br/>
								Dirección: <a href="https://g.page/HQuironsaludMurcia?share" target='_blank' rel="noopener noreferrer">Calle Miguel Hernández, 12, 30011 Murcia</a>.
							</p>
						</Grid>
					</Grid>
				</AccordionDetails>
			</Accordion>
		</div>
	)
}

export default Informacionutil
