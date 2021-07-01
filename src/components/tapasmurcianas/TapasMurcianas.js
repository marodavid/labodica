import React, {useState} from 'react'
import PropTypes from 'prop-types'

import styled from "styled-components";
import {
	Button,
	ButtonBase,
	Container,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Slide,
	Tooltip,
	Typography,
} from '@material-ui/core'
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
})

const TapasMurcianas = (props) => {

	const { classes } = props
	
	const [openPastelico, setOpenPastelico] = useState(false)
	const [openEstrella, setOpenEstrella] = useState(false)
	const [openPaparajote, setOpenPaparajote] = useState(false)
	const [openCaballitos, setOpenCaballitos] = useState(false)
	const [openMarinera, setOpenMarinera] = useState(false)
	const [openTigres, setOpenTigres] = useState(false)
	const [openZarangollo, setOpenZarangollo] = useState(false)
	const [openPulpo, setOpenPulpo] = useState(false)
	const [openEnsalada, setOpenEnsalada] = useState(false)
	const [openMichirones, setOpenMichirones] = useState(false)
	const [openPataticas, setOpenPataticas] = useState(false)
	const [openCaldero, setOpenCaldero] = useState(false)
	
	const openDialog = (tapa) => {
		switch (tapa) {
			case tapas[0]:
				return openPastelico
			case tapas[1]:
				return openEstrella
			case tapas[2]:
				return openPaparajote
			case tapas[3]:
				return openCaballitos
			case tapas[4]:
				return openMarinera
			case tapas[5]:
				return openTigres
			case tapas[6]:
				return openZarangollo
			case tapas[7]:
				return openPulpo
			case tapas[8]:
				return openEnsalada
			case tapas[9]:
				return openMichirones
			case tapas[10]:
				return openPataticas
			case tapas[11]:
				return openCaldero
			default:
				return false
		}
	}
	
	const onClickTapas = (tapa) => {
		switch(tapa) {
			case tapas[0]:
				setOpenPastelico(true)
				break;
			case tapas[1]:
				setOpenEstrella(true)
				break;
			case tapas[2]:
				setOpenPaparajote(true)
				break;
			case tapas[3]:
				setOpenCaballitos(true)
				break;
			case tapas[4]:
				setOpenMarinera(true)
				break;
			case tapas[5]:
				setOpenTigres(true)
				break;
			case tapas[6]:
				setOpenZarangollo(true)
				break;
			case tapas[7]:
				setOpenPulpo(true)
				break;
			case tapas[8]:
				setOpenEnsalada(true)
				break;
			case tapas[9]:
				setOpenMichirones(true)
				break;
			case tapas[10]:
				setOpenPataticas(true)
				break;
			case tapas[11]:
				setOpenCaldero(true)
				break;
			default:
				break;
		}
	}
	
	const tapas = ['pastelico', 'estrella', 'paparajote', 'caballitos', 'marinera', 'tigres', 'zarangollo', 'pulpo', 'ensalada', 'michirones', 'pataticas', 'caldero']

	const closeDialog = () => {
		setOpenPastelico(false)
		setOpenEstrella(false)
		setOpenPaparajote(false)
		setOpenCaballitos(false)
		setOpenMarinera(false)
		setOpenTigres(false)
		setOpenZarangollo(false)
		setOpenPulpo(false)
		setOpenEnsalada(false)
		setOpenMichirones(false)
		setOpenPataticas(false)
		setOpenCaldero(false)
	}
	
	const images = [
		{
			id: tapas[0],
			url: `${pastelcarne}`,
			title: 'Pastel de Carne',
			width: '33%',
			description: 'Pastel icónico de Murcia elaborado principalmente con hojaldre, relleno de ternera, chorizo, huevo y especias.',
			lugares: [
				{
					nombre: 'Pasteleria Zaher',
					googlemap: 'https://www.google.com/maps/place/Zaher+patisseries+Great+Pasteleros,+Calle+Riquelme,+13,+30005+Murcia,+Spain/@37.9850326,-1.1340044,17z/data=!4m2!3m1!1s0xd63821d3e7e7511:0xdfe2f923f99f11bc'
				},
				{
					nombre: 'Pasteleria Bonache',
					googlemap: 'https://www.google.com/maps/place/Pasteler%C3%ADa+Bonache,+Plaza+Flores,+8,+30004+Murcia,+Spain/@37.9847464,-1.1333667,21z/data=!4m2!3m1!1s0xd639dfa0cdf9087:0x82d378f5e5e90c8e'
				},
				{
					nombre: 'Pasteleria El Horno de la Fuensanta',
					googlemap: 'https://g.page/hornodelafuensanta?share'
				},
			],
		},
		{
			id: tapas[1],
			url: `${estrellalevante}`,
			title: 'Estrella de Levante',
			width: '33%',
			description: 'La cerveza de Murcia. Refrescante, rubia, con cuerpo. Tomar siempre bien fría.'
		},
		{
			id: tapas[2],
			url: `${paparajote}`,
			title: 'Paparajote',
			width: '33%',
			description: 'Dulce icónico de Murcia que usa masa de buñuelo para rebozar una hoja de limonero, dándole gran aroma. Cuidado! La hoja no se come, se saca antes de comer.',
			// lugares: 'La Tapa (Plaza Flores) o cualquier Mesón de gastronomía murciana.',
			lugares: [
				{
					nombre: 'Mesones de gastronomía murciana',
					googlemap: ''
				}]
		},
		{
			id: tapas[3],
			url: `${caballitos}`,
			title: 'Caballitos',
			width: '33%',
			description: '¿No sabes lo que son los caballitos? Gambas rebozadas en harina y fritas. Se suelen pedir por unidad o por raciones y tampoco les falta el limón para acompañarlos',
			lugares: [
				{
					nombre: 'Cualquier Bar de Murcia',
					googlemap: ''
				}
			]
		},
		{
			id: tapas[4],
			url: `${marinera}`,
			title: 'Marinera',
			width: '33%',
			description: 'Las marineras son la tapa murciana por excelencia. Compuestas por ensaladilla rusa, una crujiente rosquilla y una anchoa encima. Tiene 2 variaciones: marinero, con un boquerón encima en vez de una anchoa y bicicleta, sólo con la ensaladilla rusa',
			lugares: [
				{
					nombre: 'Cafe Bar GRAN VIA',
					googlemap: 'https://goo.gl/maps/RDmvmd99hxt5DJQa7'
				},
				{
					nombre: 'Fenix Cafe Bar',
					googlemap: 'https://goo.gl/maps/7i2qtc4sHSgLihZ79'
				},
				{
					nombre: 'La pequeña taberna (Restaurante)',
					googlemap: 'https://g.page/LaPequenaTabernaMurcia?share'
				},
				{
					nombre: 'Cualquier Bar de Murcia',
					googlemap: ''
				}
			]
		},
		{
			id: tapas[5],
			url: `${tigres}`,
			title: 'Tigres',
			width: '33%',
			description: 'Los tigres son deliciosos. Mejillones rellenos de bechamel y rebozados. Incluso si no comes marisco te enamorarán. Se suelen pedir por unidad o por raciones',
			lugares: [
				{
					nombre: 'Cafe Bar GRAN VIA',
					googlemap: 'https://goo.gl/maps/RDmvmd99hxt5DJQa7'
				},
				{
					nombre: 'Fenix Cafe Bar',
					googlemap: 'https://goo.gl/maps/7i2qtc4sHSgLihZ79'
				},
				{
					nombre: 'Mesones de gastronomía murciana',
					googlemap: ''
				}
			]
		},
		{
			id: tapas[6],
			url: `${zarangollo}`,
			title: 'Zarangollo',
			width: '33%',
			description: 'Patata, calabacín, cebolla y huevo son los ingredientes de este plato típico que se suele degustar mucho en las fiestas de la ciudad.',
			lugares: [
				{
					nombre: 'Mesones de gastronomía murciana',
					googlemap: ''
				}
			]
		},
		{
			id: tapas[7],
			url: `${pulpoalhorno}`,
			// 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80',
			title: 'Pulpo al horno',
			width: '33%',
			description: 'Tierno, crujiente y combinado con un “chorrico” de limón es otra de las tapas murcianas típicas.',
			lugares: [
				{
					nombre: 'Fenix Cafe Bar',
					googlemap: 'https://goo.gl/maps/7i2qtc4sHSgLihZ79'
				},
				{
					nombre: 'Mesones de gastronomía murciana',
					googlemap: ''
				}
			]
		},
		{
			id: tapas[8],
			url: `${ensaladamurciana}`,
			title: 'Ensalada murciana',
			width: '33%',
			description: 'La ensalada murciana con tomate, cebolla, atún, huevo duro y aceitunas negras es una tapa fresca para las altas temperaturas.',
			lugares: [
				{
					nombre: 'Mesones de gastronomía murciana',
					googlemap: ''
				}
			]
		},
		{
			id: tapas[9],
			url: `${michirones}`,
			title: 'Michirones',
			width: '33%',
			description: 'Es una tapa popular en invierno. Son un guiso de habas secas muy sabroso. Se sirve en pequeñas cazuelitas para tomar como tapa.',
			lugares: [
				{
					nombre: 'Mesones de gastronomía murciana',
					googlemap: ''
				}
			]
		},
		{
			id: tapas[10],
			url: `${patataspimienta}`,
			title: 'Patatas con limón, pimienta y aceitunas',
			width: '33%',
			description: 'Pedir una cerveza y unas patatas de bolsa con limón, pimienta y aceitunas pueden parecer una mezcla extraña, pero estás en Murcia.',
			lugares: [
				{
					nombre: 'Cualquier Bar de Murcia',
					googlemap: ''
				}
			]
		},
		{
			id: tapas[11],
			url: `${calderomarmenor}`,
			title: 'Caldero del Mar Menor',
			width: '33%',
			description: 'El caldero es un plato de arroz y pescado, de sabor intenso. Se cocina en una olla de fundición que empleaban los pescadores. Es más típico de la zona de Cartagena, pero se puede encontrar en Murcia.'
		},
	];

	const DivFrame = styled.div`
		width: 100%;
		height: auto;		
		background: #F6F6F6;
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

	const Transition = React.forwardRef(function Transition(props, ref) {
		return <Slide direction="up" ref={ref} {...props} />;
	});
	
	
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
								onClick={() => onClickTapas(image.id)}
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
												<span>Click para saber más</span>
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
							<Dialog
								open={openDialog(image.id)}
								TransitionComponent={Transition}
								onClose={closeDialog}
								aria-labelledby="alert-dialog-slide-title"
								aria-describedby="alert-dialog-slide-description"
							>
								<DialogTitle id="alert-dialog-slide-title">{image.title}</DialogTitle>
								<DialogContent>
									
									<DialogContentText id="alert-dialog-slide-description">
										<img style={{width: '100%', height: "auto"}} src={image.url} alt={image.title}/>
										{image.description}
										{ image.lugares ?
											<span><br/><strong>Lugar recomendados:</strong> 
												{image.lugares && image.lugares.map((lugar) => (
													lugar.googlemap === '' ?
														<i style={{paddingLeft: '1rem', color:"black"}}><br/>{lugar.nombre}</i>
													:
														<a href={lugar.googlemap} rel="noopener noreferrer" target="_blank">
															<i style={{paddingLeft: '1rem', color:"black"}}><br/>{lugar.nombre}</i>
														</a>
												))}
											</span>
											: null
										}
									</DialogContentText>
								</DialogContent>
								<DialogActions>
									<Button onClick={closeDialog} color="transparent">
										Ok
									</Button>
								</DialogActions>
							</Dialog>
							
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
