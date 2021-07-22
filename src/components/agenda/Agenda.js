import React from 'react';
import { useHistory } from 'react-router-dom';

import cx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Card,
	CardContent,
	CardMedia,
	Grid
} from '@material-ui/core';
import {Typography, Button} from "@material-ui/core";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutlineSharp';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';

import preboda from '../../images/agenda/murciaGlorieta.jpg'
import dialibre from '../../images/agenda/erfahrung-in-cartagena-spanien-von-maria-dolores-ba6a2746c2128336426d85ad904f14c5.jpg'
import parroquia from '../../images/agenda/iglesia-santa-eulalia-murcia_2_large.webp'
import fincaHerencia from '../../images/agenda/fincaLaHerencia-jardin.jpg'


const useStyles = makeStyles(() => ({
	root: {
		margin: 'auto',
	},
	gridRoot: {
		overflowY: 'scroll',
		scrollbarWidth: 'thin',
		height: '1000px',
	},
	content: {
		padding: 24,
		align: 'center',
	},
	accordion: {
		padding: 0,
	},
	tabs: {
		flexGrow: 1,
		color: 'white',
	},
}));


export const Agenda = React.memo(function SingleCard() {
	const history = useHistory()
	const cardStyles = useStyles();
	const wideCardMediaStyles = useWideCardMediaStyles();
	const fadeShadowStyles = useFadedShadowStyles();
	const textCardContentStyles = useN01TextInfoContentStyles();

	const [botonPreboda, setBotonPreboda] = React.useState(true);
	const [botonDiaLibre, setBotonDiaLibre] = React.useState(true);
	const [botonBoda, setBotonBoda] = React.useState(true);
	const [botonCelebracion, setBotonCelebracion] = React.useState(true);

	return (
		<Grid
			container
			direction="row"
			justify="space-evenly"
			alignItems="flex-start"
			spacing={1}
			className={cardStyles.gridRoot}
			// style={{overflowY: 'scroll', scrollbarWidth: 'thin', height: '1000px'}}
		>
			<Grid item xs={12} md={6} lg={3}>
				<Accordion className={cardStyles.accordion}>
					<AccordionSummary
						onClick = {() => setBotonPreboda(!botonPreboda)}
						id="panel1a-header"
					>
						<Card className={cx(cardStyles.root, fadeShadowStyles.root)}>
									<CardContent>
									<Typography variant="h5"><strong>Tarde de Tapeo Murciano</strong></Typography>
									<Typography variant="caption"><strong>Jueves 30 Septiembre 18.30h</strong></Typography>
								</CardContent>
								<CardMedia
									classes={wideCardMediaStyles}
									image={preboda}
								/>
								<CardContent className={cardStyles.content}>
									<TextInfoContent
										classes={textCardContentStyles}
										body={
											'Solo en Murcia escucharás “póngame un tigre, una marinera y un caballito”. '+
											'Conoce Murcia con nosotros mientras recorremos el centro y disfrutamos de unas cañas.'
										}
									/>
									<br/>
									<div align="center">
										{ botonPreboda &&	<AddCircleOutlineIcon /> }
										{ !botonPreboda &&	<RemoveCircleOutlineIcon /> }
									</div>
								</CardContent>
						</Card>
					</AccordionSummary>
					<AccordionDetails>
						<Card>
							<CardContent>
								<Typography variant="caption"><strong>Lugar: </strong>Murcia</Typography>
							</CardContent>
							<CardContent>
								<Box px={3} pb={3}>
									{/*<iframe*/}
									{/*	src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.7331261839518!2d-1.1326411843892645!3d37.98335697972195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6382035392c7eb%3A0xca762e4b1ced702e!2sGlorieta%20de%20Espa%C3%B1a%2C%2030004%20Murcia%2C%20Spain!5e0!3m2!1sen!2sde!4v1621610310192!5m2!1sen!2sde"*/}
									{/*	style={{width:"800", height:"650", frameBorder:"0", allowFullScreen:"", ariaHidden:"true"}}*/}
									{/*	tabIndex="0"*/}
									{/*	title="preboda-map"*/}
									{/*/>*/}
									<Button
										onClick={() => {
											history.push('/informacion#tapas')
											window.location.reload();
										}}
									>
										Ver Tapas Murcianas
									</Button>
								</Box>
							</CardContent>
						</Card>
					</AccordionDetails>
				</Accordion>
			</Grid>

			<Grid item xs={12} md={6} lg={3}>
				<Accordion className={cardStyles.accordion}>
					<AccordionSummary
						onClick = {() => setBotonDiaLibre(!botonDiaLibre)}
						id="panel1a-header"
					>
						<Card className={cx(cardStyles.root, fadeShadowStyles.root)}>
							<CardContent>
								<Typography variant="h5"><strong>Día libre</strong></Typography>
								<Typography variant="caption"><strong>Viernes 1 Octubre</strong></Typography>
							</CardContent>
							<CardMedia
								classes={wideCardMediaStyles}
								image={dialibre}
							/>
							<CardContent className={cardStyles.content}>
								<TextInfoContent
									classes={textCardContentStyles}
									body={
										'Relájate, disfruta de la ciudad de Murcia, aprovecha para visitar Cartagena. ¡Tú decides!. Tenemos ' +
										'sugerencias para que explores la zona y disfrutes de este día.'
									}
								/>
								<br/>
								<div align="center">
									{ botonDiaLibre &&	<AddCircleOutlineIcon /> }
									{ !botonDiaLibre &&	<RemoveCircleOutlineIcon /> }
								</div>
							</CardContent>
						</Card>
					</AccordionSummary>
					<AccordionDetails>
						<Card>
							<CardContent>
								<div style={{alignContent: "center"}}>
									<Box px={3} pb={3} alignContent="center">
										<Button
											onClick={() => {
												history.push('/informacion#turismo')
												window.location.reload();
											}}
										>
											Ver posibles actividades
										</Button>
								</Box>
							</div>
							</CardContent>
						</Card>
					</AccordionDetails>
				</Accordion>
			</Grid>

			<Grid item xs={12} md={6} lg={3}>
				<Accordion className={cardStyles.accordion}>
					<AccordionSummary
						onClick = {() => setBotonBoda(!botonBoda)}
						id="panel1a-header"
					>
						<Card className={cx(cardStyles.root, fadeShadowStyles.root)}>
							<CardContent>
								<Typography variant="h5"><strong>Ceremonia religiosa</strong></Typography>
								<Typography variant="caption"><strong>Sabado 2 Octubre 12h</strong></Typography>
							</CardContent>
							<CardMedia
								classes={wideCardMediaStyles}
								image={parroquia}
							/>
							<CardContent className={cardStyles.content}>
								<TextInfoContent
									classes={textCardContentStyles}
									body={
										'Después de muchas emociones, nervios y hasta una pandemia, llega el gran dia. Los esperamos a ' +
										'todos para vernos dar el "Si quiero". '
									}
								/>
								<br/>
								<div align="center">
									{ botonBoda &&	<AddCircleOutlineIcon /> }
									{ !botonBoda &&	<RemoveCircleOutlineIcon /> }
								</div>
							</CardContent>
						</Card>
					</AccordionSummary>
					<AccordionDetails>
						<Card>
							<CardContent>
								<Typography variant="caption"><strong>Lugar: </strong>Parroquia Santa Eulalia, Murcia</Typography>
							</CardContent>
							<CardContent>
								<Box px={3} pb={3}>
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.6539096415954!2d-1.1270789843892257!3d37.98520537972172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63821012b3f9f7%3A0x2451ae7aace83ef3!2sParroquia%20Santa%20Eulalia!5e0!3m2!1sen!2sde!4v1621609794730!5m2!1sen!2sde"
										style={{width:"800", height:"650", frameBorder:"0",allowFullScreen:"", ariaHidden:"true"}}
										tabIndex="0"
										title="boda-map"
									/>
								</Box>
							</CardContent>
						</Card>
					</AccordionDetails>
				</Accordion>
			</Grid>

			<Grid item xs={12} md={6} lg={3}>
				<Accordion className={cardStyles.accordion}>
					<AccordionSummary
						onClick = {() => setBotonCelebracion(!botonCelebracion)}
						id="panel1a-header"
					>
						<Card className={cx(cardStyles.root, fadeShadowStyles.root)}>
							<CardContent>
								<Typography variant="h5"><strong>Fiesta celebración</strong></Typography>
								<Typography variant="caption"><strong>Sábado 2 Octubre 14.30h</strong></Typography>
							</CardContent>
							<CardMedia
								classes={wideCardMediaStyles}
								image={fincaHerencia}
							/>
							<CardContent className={cardStyles.content}>
								<TextInfoContent
									classes={textCardContentStyles}
								body={
										'Después de la ceremonia llegó la hora de festejar a lo grande y crear momentos únicos.' +
										' ¡Los esperamos con la mejor actitud y ganas de bailar!'
										// 'Hemos puesto mucho esfuerzo en crear un gran ambiente donde crearemos momentos unicos!!'
									}
								/>
								<br/>
								<div align="center">
									{ botonCelebracion&&	<AddCircleOutlineIcon /> }
									{ !botonCelebracion &&	<RemoveCircleOutlineIcon /> }
								</div>
							</CardContent>
						</Card>
					</AccordionSummary>
					<AccordionDetails>
						<Card>
							<CardContent>
								<Typography variant="caption"><strong>Lugar: </strong>Finca La Herencia</Typography>
							</CardContent>
							<CardContent>
								<Box px={3} pb={3}>
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.5905811341736!2d-1.013250684403909!3d37.75274822119889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd636efabd373eef%3A0x5b5a7af82502917e!2sLa%20Herencia%20Celebraciones!5e0!3m2!1sen!2ses!4v1622916481254!5m2!1sen!2ses"
										style={{width:"800", height:"650", frameBorder:"0", allowFullScreen:"", ariaHidden:"true"}}
										tabIndex="0"
										title="fiesta-map"
									/>
								</Box>
							</CardContent>
						</Card>
					</AccordionDetails>
				</Accordion>
			</Grid>
		</Grid>
	// AIzaSyCqxA57F_YusDsYyi_BDSQGC73OUn2xp-E
	);
});

export default Agenda
