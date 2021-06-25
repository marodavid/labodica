import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from "@material-ui/core/styles";
import pastelcarne from '../../images/tapasmurcianas/pastelcarne.jpg'
import estrellalevante from '../../images/tapasmurcianas/estrella-levante-1280x720.jpg'
import paparajote from '../../images/tapasmurcianas/paparajote.jpg'
import tigres from '../../images/tapasmurcianas/tigres.jpg'
import marinera from '../../images/tapasmurcianas/marinera.jpeg'
import caballitos from '../../images/tapasmurcianas/caballitos.jpg'
import zarangollo from '../../images/tapasmurcianas/zarangollo.jpg'
import pulpoalhorno from '../../images/tapasmurcianas/pulpoalhorno.jpg'
import ensaladamurciana from '../../images/tapasmurcianas/ensaladamurciana.png'
import patataspimienta from '../../images/tapasmurcianas/patatas-olivas-pimienta-limon-murcia.jpg'
import michirones from '../../images/tapasmurcianas/michirones.jpg'
import calderomarmenor from '../../images/tapasmurcianas/calderomarmenor.jpg'
// import cartagena from "../../images/sugerencias/cartagena2.jpeg";
// import castillitos from "../../images/sugerencias/castillitos2.jpg";
// import murcia from "../../images/sugerencias/murcia.jpeg";
// import restaurantes from "../../images/sugerencias/restaurantes.png";
// import bares from "../../images/sugerencias/bares.png";
// import licor43 from "../../images/sugerencias/licor43-rec2.png";
// import laAzohia from "../../images/sugerencias/playa-de-la-azohia.jpg";
// import kayaks from "../../images/sugerencias/kayak.jpeg";
// import paseosBarco from "../../images/sugerencias/barcoTour.jpeg";
import styled from "styled-components";
import CurvyLines from "../../images/sugerencias/appCurvyLines.png";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Tooltip from "@material-ui/core/Tooltip";
// import Paper from '@material-ui/core/Paper'
// import {Popover} from "@material-ui/core";


const styles = (theme) => ({
	root: {
		marginTop: theme.spacing(8),
		marginBottom: theme.spacing(4),
	},
	images: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexWrap: 'wrap',
	},
	imageWrapper: {
		position: 'relative',
		display: 'block',
		padding: 0,
		borderRadius: 0,
		height: '40vh',
		[theme.breakpoints.down('md')]: {
			width: '100% !important',
			height: 100,
		},
		'&:hover': {
			zIndex: 1,
		},
		'&:hover $imageBackdrop': {
			opacity: 0,
		},
		'&:hover $imageMarked': {
			opacity: 0,
		},
		'&:hover $imageTitle': {
			border: '4px solid currentColor',
		},
	},
	imageButton: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: theme.palette.common.white,
	},
	imageSrc: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundSize: 'cover',
		backgroundPosition: 'center 40%',
	},
	imageBackdrop: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		background: theme.palette.common.black,
		opacity: 0.3,
		transition: theme.transitions.create('opacity'),
	},
	imageTitle: {
		position: 'relative',
		padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
	},
	imageMarked: {
		height: 3,
		width: 18,
		background: theme.palette.common.white,
		position: 'absolute',
		bottom: -2,
		left: 'calc(50% - 9px)',
		transition: theme.transitions.create('opacity'),
	},
	popover: {
		pointerEvents: 'none',
	},
	paper: {
		padding: theme.spacing(1),
	},
})

const TapasMurcianas = (props) => {

	const { classes } = props
	
	const images = [
		{
			url: `${pastelcarne}`,
			title: 'Pastel de Carne',
			width: '33%',
			href: 'https://turismo.cartagena.es/',
			description: 'Pastel icónico de Murcia elaborado principalmente con hojaldre, relleno de ternera, chorizo, huevo y especias.',
			lugares: 'Pasteleria Zaher, Pasteleria Roses, Pasteleria El Horno de la Fuensanta'
		},
		{
			url: `${estrellalevante}`,
			title: 'Estrella de Levante',
			width: '33%',
			href: 'https://es.wikipedia.org/wiki/Bater%C3%ADa_de_Castillitos',
			description: 'La cerveza de Murcia. Refrescante, rubia, con cuerpo. Tomar siempre bien fría.'
		},
		{
			url: `${paparajote}`,
			title: 'Paparajote',
			width: '33%',
			href: 'https://www.datemurcia.es/es/inicio.html',
			description: 'Dulce icónico de Murcia que usa masa de buñuelo para rebozar una hoja de limonero, dándole gran aroma. Cuidado! La hoja no se come, se saca antes de comer.',
			lugares: 'La Tapa (Plaza Flores) o cualquier Mesón de gastronomía murciana.'
		},
		{
			url: `${caballitos}`,
			title: 'Caballitos',
			width: '33%',
			href: 'https://turismo.cartagena.es/',
			description: '¿No sabes lo que son los caballitos? Gambas rebozadas en harina y fritas. Se suelen pedir por unidad o por raciones y tampoco les falta el limón para acompañarlos'
		},
		{
			url: `${marinera}`,
			title: 'Marinera',
			width: '33%',
			// width: '24%',
			href: 'https://es.wikipedia.org/wiki/Bater%C3%ADa_de_Castillitos',
			description: 'Las marineras son la tapa murciana por excelencia. Compuestas por ensaladilla rusa, una crujiente rosquilla y una anchoa encima. Tiene 2 variaciones: marinero, con un boquerón encima en vez de una anchoa y bicicleta, sólo con la ensaladilla rusa'
		},
		{
			url: `${tigres}`,
			title: 'Tigres',
			width: '33%',
			href: 'https://www.datemurcia.es/es/inicio.html',
			description: 'Los tigres son deliciosos. Mejillones rellenos de bechamel y rebozados. Incluso si no comes marisco te enamorarán. Se suelen pedir por unidad o por raciones'
		},
		{
			url: `${zarangollo}`,
			title: 'Zarangollo',
			// width: '38%',
			width: '33%',
			href: 'https://turismo.cartagena.es/',
			description: 'Patata, calabacín, cebolla y huevo son los ingredientes de este plato típico que se suele degustar mucho en las fiestas de la ciudad.',
			lugares: 'Mesones de gastronomía murciana'
		},
		{
			url: `${pulpoalhorno}`,
			// 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80',
			title: 'Pulpo al horno',
			width: '33%',
			href: 'https://es.wikipedia.org/wiki/Bater%C3%ADa_de_Castillitos',
			description: 'Tierno, crujiente y combinado con un “chorrico” de limón es otra de las tapas murcianas típicas.'
		},
		{
			url: `${ensaladamurciana}`,
			title: 'Ensalada murciana',
			width: '33%',
			href: 'https://www.datemurcia.es/es/inicio.html',
			description: 'La ensalada murciana con tomate, cebolla, atún, huevo duro y aceitunas negras es una tapa fresca para las altas temperaturas.'
		},
		{
			url: `${michirones}`,
			title: 'Michirones',
			width: '33%',
			href: 'https://turismo.cartagena.es/',
			description: 'Es una tapa popular en invierno. Son un guiso de habas secas muy sabroso. Se sirve en pequeñas cazuelitas para tomar como tapa.'
		},
		{
			url: `${patataspimienta}`,
			title: 'Patatas con limón, pimienta y aceitunas',
			width: '33%',
			// width: '24%',
			href: 'https://es.wikipedia.org/wiki/Bater%C3%ADa_de_Castillitos',
			description: 'Pedir una cerveza y unas patatas de bolsa con limón, pimienta y aceitunas pueden parecer una mezcla extraña, pero estás en Murcia.'
		},
		{
			url: `${calderomarmenor}`,
			title: 'Caldero del Mar Menor',
			width: '33%',
			// width: '38%',
			href: 'https://www.datemurcia.es/es/inicio.html',
			description: 'El caldero es un plato de arroz y pescado, de sabor intenso. Se cocina en una olla de fundición que empleaban los pescadores. Es más típico de la zona de Cartagena, pero se puede encontrar en Murcia.'
		},
	];

	const DivFrame = styled.div`
		width: 100%;
		height: auto;		
		background: #F6F6F6;
		// background: #FFF;
		// background: #bdcebe;
		// background-image: url(${CurvyLines});
		background-position: 'center';
		background-repeat: no-repeat;
		background-size: cover;
		padding-top: 0.05em;
		padding-bottom: 1em;
		text-transform: uppercase;
	`;

	const LightTooltip = withStyles((theme) => ({
		tooltip: {
			backgroundColor: theme.palette.common.white,
			color: "rgba(0, 0, 0, 0.87)",
			boxShadow: theme.shadows[10],
			fontSize: 14
		}
	}))(Tooltip);
	
	return (
		<DivFrame>
			<Container className={classes.root} component="section">
				<Typography variant="h4" marked="center" align="center" component="h2">
					Las tapas murcianas
				</Typography>
				<div className={classes.images}>
					{images.map((image) => (
						<>
						
							<ButtonBase
								key={image.title}
								className={classes.imageWrapper}
								style={{
									width: image.width,
								}}
							>
								<div
									className={classes.imageSrc}
									style={{
										backgroundImage: `url(${image.url})`,
									}}
								/>
								<div className={classes.imageBackdrop} />
								<div className={classes.imageButton}>
									{/*<Tooltip*/}
										<LightTooltip arrow
										title={
											// image.description
											<React.Fragment>
												<span>{image.description}</span><br/><br/>
												{ image.lugares ? 
														<span>Lugar recomendados: {image.lugares}</span>
													: null
												}
											
											</React.Fragment>
										}
									>
									<Typography
										component="h3"
										variant="h6"
										color="inherit"
										className={classes.imageTitle}
									>
										{image.title}
										
										<div className={classes.imageMarked} />
									</Typography>
									</LightTooltip>
								</div>
								
							</ButtonBase>
						</>
					))}
				</div>
			</Container>
		</DivFrame>
	)
}

TapasMurcianas.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TapasMurcianas)
