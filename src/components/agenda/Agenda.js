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

import preboda from '../../images/agenda/Rockola.jpg'
import hoteldosplayas from '../../images/agenda/hotel-dos-playas.jpg'
import ermita from '../../images/agenda/Ermita_Isla_Plana.jpg'
import hotelArbol from '../../images/agenda/hotelArbol.jpg'


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
									<Typography variant="h5"><strong>Bienvenida</strong></Typography>
									<Typography variant="caption"><strong>Jueves 30 Septiembre 18.30h</strong></Typography>
								</CardContent>
								<CardMedia
									classes={wideCardMediaStyles}
									image={preboda}
								/>
								<CardContent className={cardStyles.content}>
									{/*<TextInfoContent*/}
									{/*	classes={textCardContentStyles}*/}
									{/*	body={*/}
									{/*		'Acompañanos el jueves a celebrar una preboda sencilla a la orilla de la playa donde ' +*/}
									{/*		'podras conocer a los otros invitados y disfrutaremos juntos de grandes momentos.'*/}
									{/*	}*/}
									{/*/>*/}
									<TextInfoContent
										classes={textCardContentStyles}
										body={
											'El jueves iniciamos las celebraciones recibiendo a los invitados. Acompáñanos  ' +
											'a disfrutar a la orilla de la playa y conocer a los otros invitados.'
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
								<Typography variant="caption"><strong>Etiqueta: </strong>Vestimenta casual tarde-noche<br/></Typography>
								<Typography variant="caption"><strong>Lugar: </strong>Chiringuito Rockola, La Azohia</Typography>
							</CardContent>
							<CardContent>
								<Box px={3} pb={3}>
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.948499448361!2d-1.1708922844079164!3d37.556277132472864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd635ed0d241c069%3A0x1377573f8c96b01b!2sRockola%20Summer%20Club%20La%20Azoh%C3%ADa!5e0!3m2!1sen!2sde!4v1610791343439!5m2!1sen!2sde"
										style={{width:"800", height:"650", frameBorder:"0", allowFullScreen:"", ariaHidden:"true"}}
										tabIndex="0"
										title="preboda-map"
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
									image={hoteldosplayas}
								/>
								<CardContent className={cardStyles.content}>
									<TextInfoContent
										classes={textCardContentStyles}
										body={
											'Relájate, disfruta de las playas, visita Cartagena o Murcia. ¡Tú decides!. Tenemos ' +
											'sugerencias para que explores la zona. Haz click para saber más'
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
									<Typography variant="caption"><strong>Sabado 2 Octubre 17h</strong></Typography>
								</CardContent>
								<CardMedia
									classes={wideCardMediaStyles}
									image={ermita}
								/>
								<CardContent className={cardStyles.content}>
									<TextInfoContent
										classes={textCardContentStyles}
										body={
											'Después de muchas emociones, nervios y hasta una pandemia, llega el gran dia. Los esperamos a ' +
											'todos para vernos dar el Si quiero junto al mar. '
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
								<Typography variant="caption"><strong>Etiqueta: </strong>Vestimenta formal<br/></Typography>
								<Typography variant="caption"><strong>Lugar: </strong>Ermita Nuestra Señora del Carmen, Isla Plana</Typography>
							</CardContent>
							<CardContent>
								<Box px={3} pb={3}>
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.220655257853!2d-1.21133358439948!3d37.57342147979659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd635f617ab04b05%3A0xbcab64f7fec6ffe1!2sHermitage%20of%20Nuestra%20Se%C3%B1ora%20del%20Carmen!5e0!3m2!1sen!2sde!4v1610810517999!5m2!1sen!2sde"
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
									<Typography variant="caption"><strong>Sábado 2 Octubre 20h</strong></Typography>
								</CardContent>
								<CardMedia
									classes={wideCardMediaStyles}
									image={hotelArbol}
								/>
								<CardContent className={cardStyles.content}>
									<TextInfoContent
										classes={textCardContentStyles}
										// body={
										// 	'Os esperamos a todos para celebrar este dia tan importante con nosotros.' +
										// 	' Hemos puesto mucho esfuerzo en crear un gran ambiente donde crearemos momentos unicos!!'
										// }
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
								<Typography variant="caption"><strong>Etiqueta: </strong>Vestimenta formal<br/></Typography>
								<Typography variant="caption"><strong>Lugar: </strong>Hotel Executive Sport, Totana</Typography>
							</CardContent>
							<CardContent>
								<Box px={3} pb={3}>
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.6442828677423!2d-1.455882184394478!3d37.77493817975947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd64923cc8b6ccef%3A0xb04daeea46e9a7c2!2sHotel%20Executive%20Sport%20Totana!5e0!3m2!1sen!2sde!4v1610810173605!5m2!1sen!2sde"
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
