import React, {useEffect, useState} from 'react'
import {useFormik } from 'formik'
import * as yup from 'yup'
import emailjs, {init as initEmailjs} from 'emailjs-com';
// import{ init as initEmailjs } from 'emailjs-com';

import {
	Box,
	Typography,
	Grid,
	TextField,
	Checkbox,
	Fade,
	FormControl,
	FormControlLabel,
	FormGroup,
	Radio,
	RadioGroup,
	Slide,
	withStyles
} from "@material-ui/core"
import MuiPhoneNumber from 'material-ui-phone-number'
import styled from "styled-components"

import noTeLoPierdas from "../images/rsvp/sinoVienesTeArrepentiras.jpg"
import fiestabackground from "../images/rsvp/wallpaperBlancoColores.jpg"
import siAsistes from '../images/rsvp/si_asistes_(arturo).JPG'

import firebase from "firebase"
import "firebase/database"
// import 'firebase.json'

// import './RSVP.css'
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";


	// eslint-disable-next-line no-unused-vars
	const app = firebase.initializeApp({
		// apiKey: "AIza....",                             // Auth / General Use
		// appId: "1:27992087142:web:ce....",      // General Use
		projectId: "bodica",               // General Use
		authDomain: "bodica.firebaseapp.com",         // Auth with popup/redirect
		databaseURL: "https://bodica.firebaseio.com", // Realtime Database
		storageBucket: "bodica.appspot.com",          // Storage
		messagingSenderId: "907413848828",                  // Cloud Messaging
		measurementId: "G-825XJ1C7DN"                        // Analytics
	})
// const getDBRef = () => (firebase.initializeApp('firebase.json'))

	const styles = () => ({
		box: {
			backgroundImage: `url(${fiestabackground})`,
			// backgroundColor: '#7fc7d9', // Average color of the background image.
			backgroundPosition: 'center',
			backgroundSize: '100%',
			alignItems: 'center',
			height: '100%',
		},
		container: {
			display: 'flex',
			flexGrow: '0',
			alignContent: 'center'
		},
		textField: {
			width: '90%'
		},
		select: {
			width: '90%'
		}
	})

	const GridSmallItem = styled(Grid)`
	@media only screen and (min-width: 960px) {
		display: none
	} 
	`;

	const ImagesRSVP = styled.img`
	@media only screen and (max-width: 960px) {
		 display: none;  
	}
	`;

	const Transition = React.forwardRef(function Transition(props, ref) {
		return <Slide direction="up" ref={ref} {...props} />;
	});

	const regexEmail = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
// const regexEmail = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

	const errorMessages = {
		nombre: ['Cuentanos quien eres', 'Nombre completo, por favor'],
		asistir: '¿Podrás venir a la boda?',
		email: 'Un email valido, por favor',
		celular: `Revisa el numero del celular`,
		menu: 'Elige que tipo de menu quieres',
		intolerancias_str: 'Escribenos cuales son las intolerancias, por favor',
		acompanante: '¿No nos vas a contar si traes a alguien?',
		acompanante_nombre: ['¡Cuentanos quien es esa persona misteriosa!', 'Dinos su nombre completo, por favor'],
		acompanante_menu: 'Elige un tipo de menu para tu acompanante',
		ninos: 'Dificil decision, lo sabemos',
	}
	const testFullName = (value) => (value) && (value.split(' ').length > 1)
	const validationSchemaYup = yup.object({
		//Form inicial
		nombre: yup
			.string(errorMessages.nombre[0])
			.required(errorMessages.nombre[0])
			.test('test-fullname', errorMessages.nombre[1],
				function(value) {
					return testFullName(value)
				}
			),
		asistir: yup.string().oneOf(['si', 'no'], errorMessages.asistir).required(errorMessages.asistir),

		//Asiste si
		email: yup.string().ensure().when('asistir', {
			is: 'si',
			then: yup.string().matches(regexEmail, errorMessages.email).required(errorMessages.email)
		}),

		celular: yup.string().ensure().when('asistir', {
			is: 'si',
			then: yup.string()
				.test('test-phone', errorMessages.celular,
					function(value) {
						return (value) && (value.length > 6)
					})
		}),

		menu: yup.string().ensure().when('asistir', {
			is: 'si',
			then: yup.string()
				.oneOf(['normal', 'vegetariano', 'vegano'], errorMessages.menu),
		}),

		intolerancias_str: yup.string().ensure().when('intolerancia_otras', {
			is: true,
			then: yup.string().required(errorMessages.intolerancias_str),
		}),

		acompanante: yup.string().ensure().when('asistir', {
			is: 'si',
			then: yup.string()
				.oneOf(['si', 'no'], errorMessages.acompanante),
		}),

		ninos: yup.string().ensure().when('asistir', {
			is: 'si',
			then: yup.string()
				.oneOf(['si', 'no', 'nose'], errorMessages.ninos),
		}),

		//Acompanante SI
		acompanante_nombre: yup.string().when('acompanante', {
			is: 'si',
			then: yup.string()
				.required(errorMessages.acompanante_nombre[0])
				.test('test-fullname', errorMessages.acompanante_nombre[1],
					function(value) {
						return testFullName(value)
					}
				),
		}),
		acompanante_menu: yup.string().ensure().when('acompanante', {
			is: 'si',
			then: yup.string()
				.oneOf(['normal', 'vegetariano', 'vegano', 'nose'], errorMessages.acompanante_menu),
		}),
		acompanante_intolerancias_str: yup.string().ensure().when('acompanante_intolerancia_otras', {
			is: true,
			then: yup.string().required(errorMessages.intolerancias_str),
		}),

	})

	const separator = () => (<div style={{height: '20px'}} />)

	const displayErrorMessage = (errorValue, touchValue) => (errorValue && touchValue ? (
		<p style={{color: 'red'}}>{errorValue}</p>
	): null)

	const RSVP = (props) => {
		const {classes} = props

		const [attend, setAttend] = useState(false)
		const [plusOne, setPlusOne] = useState(false)
		const [openComingDialog, setOpenComingDialog] = React.useState(false)
		const [openNotComingDialog, setOpenNotComingDialog] = React.useState(false)
		
		const handleCloseComingDialog = () => {
			setOpenComingDialog(false);
			window.location.assign('/');
		};
		const handleCloseNotComingDialog = () => {
			setOpenNotComingDialog(false);
			window.location.assign('/');
		};

		initEmailjs("user_cGFVQO2lsz6lW6qfOPFeW")

		
		const rsvpConfirmEmailParameters = (value) => ({
			email: value.email,
			nombre: value.nombre,
			asistir: value.asistir,
			celular: value.celular,
			numAdultos: value.acompanante_nombre!=='' ? 2 : 1,
			ninos: value.ninos,
			menu: value.menu,
			intolerancia_gluten: value.intolerancia_gluten,
			intolerancia_marisco: value.intolerancia_marisco,
			intolerancias_str: value.intolerancias_str,
			acompanante: value.acompanante,
			acompanante_nombre: value.acompanante_nombre,
			acompanante_menu: value.acompanante_menu,
			acompanante_intolerancia_gluten: value.acompanante_intolerancia_gluten,
			acompanante_intolerancia_marisco: value.acompanante_intolerancia_marisco,
			acompanante_intolerancias_str: value.acompanante_intolerancias_str
		})

		const rsvpConfirmNotComingEmailParameters = (value) => ({
			email: value.email,
			nombre: value.nombre,
			asistir: value.asistir
		})
		
		const formik = useFormik({
			initialValues: {
				nombre: "",
				asistir: "",
				email: "",
				celular: "",
				menu: "",
				intolerancia_gluten: false,
				intolerancia_marisco: false,
				intolerancia_otras: false,
				intolerancias_str: "",
				acompanante: "",
				acompanante_nombre: "",
				acompanante_menu: "",
				acompanante_intolerancia_gluten: false,
				acompanante_intolerancia_marisco: false,
				acompanante_intolerancia_otras: false,
				acompanante_intolerancias_str: "",
				ninos: "",
			},

			validationSchema: validationSchemaYup,

			onSubmit: async (values) => {
				await new Promise((r) => setTimeout(r, 500));
				// console.log(JSON.stringify(values, null, 2))
				if (values.asistir==='no') {
					firebase.database().ref(`invitados/cancelados/${values.nombre.trim()}`).set(values)
					emailjs.send('service_labodica', 'template_mxs11qo', rsvpConfirmNotComingEmailParameters(values))
					setOpenNotComingDialog(true)
				}
				if (values.asistir==='si') {
					firebase.database().ref(`invitados/confirmados/${values.nombre.replace(/ /g, '-')}_${values.celular.replace(/ /g, '-')}`).set(values)
					emailjs.send('service_labodica', 'template_rsvp', rsvpConfirmEmailParameters(values))
					setOpenComingDialog(true)
				}
			},
		})

		useEffect(() => {
			if (formik) {
				if (formik.values.asistir === 'si') setAttend(true)
				if (formik.values.asistir === 'no') setAttend(false)
			}
		},[formik.values.asistir, formik])

		useEffect(() => {
			if (formik) {
				if (formik.values.acompanante === 'si') setPlusOne(true)
				if (formik.values.acompanante === 'no') setPlusOne(false)
			}
		},[formik.values.acompanante, formik])

		
		
		useEffect(() => {
			if (formik.values.asistir==='no'){
				formik.values.celular= ""
				formik.values.menu=""
				formik.values.intolerancia_gluten = false
				formik.values.intolerancia_marisco = false
				formik.values.intolerancia_otras = false
				formik.values.intolerancias_str = ""
				formik.values.acompanante='no'
				formik.values.acompanante_nombre = ""
				formik.values.acompanante_menu = ""
				formik.values.acompanante_intolerancia_gluten = false
				formik.values.acompanante_intolerancia_marisco = false
				formik.values.acompanante_intolerancia_otras = false
				formik.values.acompanante_intolerancias_str = ""
				formik.values.ninos='no'
			}
			if (formik.values.acompanante==='no'){
				formik.values.acompanante_nombre = ""
				formik.values.acompanante_menu = ""
				formik.values.acompanante_intolerancia_gluten = false
				formik.values.acompanante_intolerancia_marisco = false
				formik.values.acompanante_intolerancia_otras = false
				formik.values.acompanante_intolerancias_str = ""
			}
		},[formik.values.asistir, formik.values.acompanante, formik])
		
		return (
			<>
			<form onSubmit={formik.handleSubmit}>
				<Box className={classes.box}>
					<div style={{paddingTop: '30px', paddingBottom: '30px'}}>
						<h2 style={{fontFamily: 'Abril Fatface', textAlign: 'center'}}>Confirmanos tu asistencia</h2>
					</div>
					<Grid container spacing={2}
								direction="row"
								justify="space-around"
								alignItems="flex-start"
					>
						{/* MARGEN IZQUIERDO */}
						<Grid item
									xs={2}
									sm={2}
									md={2}
									lg={2}
						/>
						{/* END MARGEN IZQUIERDO */}

						{/* FORM PRINCIPAL */}
						<Grid item
									xs={!plusOne? 10: 10}
									sm={!plusOne ? 10 : 10}
									md={!plusOne ? 6 : 4}
									lg={!plusOne ? 6 : 4}
						>
							<div id="rsvp"
									 style={{width: '90%', paddingLeft: '5px', paddingRight: '5px'}}
							>
								<div id="fullName" >
									<Typography variant="subtitle1">Nombre completo</Typography>
									<TextField
										fullWidth
										className={classes.textField}
										// style={{width: '90%'}}
										id="nombre"
										name="nombre"
										value={formik.values.nombre}
										onChange={formik.handleChange}
										error={formik.touched.nombre && Boolean(formik.errors.nombre)}
										helperText={formik.touched.nombre && formik.errors.nombre}
									/>
								</div>
								{separator()}
								<div id="email" >
									<Typography variant="subtitle1">Correo electronico</Typography>
									<TextField
										id="email"
										className={classes.textField}
										name="email"
										value={formik.values.email}
										onChange={formik.handleChange}
										error={formik.touched.email && Boolean(formik.errors.email)}
										helperText={formik.touched.email && formik.errors.email}
									/>
								</div>
								{separator()}
								<FormControl component="fieldset">
									<Typography variant="subtitle1">Vienes a la boda?</Typography>
									<RadioGroup row aria-label="Vienes a la boda" name="asistir" value={formik.values.asistir} onChange={formik.handleChange}>
										<FormControlLabel disabled={formik.values.nombre === ''} value="si" control={<Radio />} label="Por supuesto" />
										<FormControlLabel disabled={formik.values.nombre === ''} value="no" control={<Radio />} label="Me encantaria pero no puedo" />
									</RadioGroup>
									{ displayErrorMessage(formik.errors.asistir, formik.touched.asistir) }
								</FormControl>

								{ attend && (
									<Fade
										in={attend}
										timeout={2000}
									>
										<div id="si-asisto">
											<div id="celular" >
												<Typography variant="subtitle1">Telefono movil / Celular</Typography>
												<MuiPhoneNumber
													inputProps={{
														name: 'celular',
														required: true,
														autoFocus: true,
														style: {width: '100%'}
													}}
													defaultCountry={'pa'}
													onChange={celular => formik.values.celular = celular}
													onlyCountries={['pa', 'es', 'de', 'mx','co', 'ca', 'us', 'fr', 'nl', 'ec', 'bo']}
													autoformat
													value={formik.values.celular}
													disableAreaCodes
												/>
												{ displayErrorMessage(formik.errors.celular, formik.touched.celular) }
											</div>
											{separator()}
											<div id="menu">
												<Typography variant="subtitle1">¿Que menu tomarias?</Typography>
												<select
													name="menu"
													id="menu"
													value = {formik.values.menu}
													onChange = {formik.handleChange}
													className={classes.select}
													// style={{width: '90%'}}
												>
													<option value="" />
													<option value="normal">{'Como de todo'}</option>
													<option value="vegetariano">Vegetariano</option>
													<option value="vegano">Vegano</option>
												</select>
												{ displayErrorMessage(formik.errors.menu, formik.touched.menu) }

											</div>
											{separator()}
											<FormControl component="fieldset">
												<Typography variant="subtitle1">¿Tienes alguna alergia o intolerancia alimentaria?</Typography>
												<FormGroup aria-label="position" row onChange={formik.handleChange}>
													<FormControlLabel
														name="intolerancia_gluten"
														// value="gluten"
														control={<Checkbox color="primary" />}
														label="Intolerancia al gluten"
														labelPlacement="end"
													/>
													<FormControlLabel
														name="intolerancia_marisco"
														control={<Checkbox color="primary" />}
														label="Alergia a mariscos"
														labelPlacement="end"
													/>
													<FormControlLabel
														name="intolerancia_otras"
														// value="otras"
														control={<Checkbox color="primary" />}
														label="Otra alergia o intolerancia"
														labelPlacement="end"
													/>
												</FormGroup>
											</FormControl>

											{ formik.values.intolerancia_otras && (
												<div id="intolerancias" >
													<Typography variant="subtitle1">Cuentanos que intolerancias o alergias para atenderte mejor</Typography>
													<TextField
														fullWidth
														className={classes.textField}
														id="intolerancias_str"
														name="intolerancias_str"
														value={formik.values.intolerancias_str}
														onChange={formik.handleChange}
														error={formik.touched.intolerancias_str && Boolean(formik.errors.intolerancias_str)}
														helperText={formik.touched.intolerancias_str && formik.errors.intolerancias_str}
													/>
												</div>
											)}
											<FormControl 	component="fieldset">
												<Typography variant="subtitle1">Traes a los niños</Typography>
												<RadioGroup row fullWidth aria-label="Traes niños" name="ninos" value={formik.values.ninos} onChange={formik.handleChange}>
													<FormControlLabel value="si" control={<Radio />} label="Si" />
													<FormControlLabel value="no" control={<Radio />} label="No" />
												</RadioGroup>
												{ displayErrorMessage(formik.errors.ninos, formik.touched.ninos) }
											</FormControl>
											<br/>
											<FormControl component="fieldset">
												<Typography variant="subtitle1">Traes acompañante</Typography>
												<RadioGroup row aria-label="Traes acompañante" name="acompanante" value={formik.values.acompanante} onChange={formik.handleChange}>
													<FormControlLabel value="si" control={<Radio />} label="Si claro" />
													<FormControlLabel value="no" control={<Radio />} label="No, apúntame al Tinder de la boda" />
												</RadioGroup>
												{ displayErrorMessage(formik.errors.acompanante, formik.touched.acompanante) }
											</FormControl>
										</div>
									</Fade>
								)}
							</div>
						</Grid>


						{ !plusOne ? (
							<Grid item md={3} lg={3}>
								{ !attend && (
									<Fade
										in={!plusOne}
										timeout={2000}
									>
										<ImagesRSVP 
											className='.imgRSVP'
											src={noTeLoPierdas}
											alt="No te lo pierdas2"
											style={{width: '100%', paddingRight: '20px', paddingTop: '10px', height: '100%'}}
										/>
									</Fade>

								)}
								{ attend && (
									<Fade
										in={!plusOne}
										timeout={2000}
									>
										<ImagesRSVP
											class='imgRSVP'
											src={siAsistes}
											alt="No te lo pierdas"
											style={{width: '100%', paddingRight: '20px', paddingTop: '10px', height: '100%'}}
										/>
									</Fade>

								)}
							</Grid>
						) : null
						}

						{/*Margen izquierdo  de plusOne para md y lg esta arriba definido*/}
						{ plusOne && (
							<Fade
								in={plusOne}
								timeout={2000}>
								<GridSmallItem item xs={2} sm={2} />
							</Fade>
						)}

						{ plusOne && (
							<Fade
								in={plusOne}
								timeout={2000}>
								<Grid item
											xs={10}
											sm={10}
											md={4}
											lg={4}
								>
									<div id="rsvp-plusOne"
											 style={{width: '90%', paddingLeft: '5px', paddingRight: '5px'}}
									>
										<div id="fullName-acompanante" >
											<Typography variant="subtitle1">Nombre de tu acompañante</Typography>
											<TextField
												fullWidth
												className={classes.textField}
												id="acompanante_nombre"
												name="acompanante_nombre"
												value={formik.values.acompanante_nombre}
												onChange={formik.handleChange}
												error={formik.touched.acompanante_nombre && Boolean(formik.errors.acompanante_nombre)}
												helperText={formik.touched.acompanante_nombre && formik.errors.acompanante_nombre}
											/>
										</div>
										{separator()}
										<div id="acompanante-menu">
											<Typography variant="subtitle1">¿Que menu tomaria tu acompañante?</Typography>
											<select
												name="acompanante_menu"
												id="acompanante_menu"
												value = {formik.values.acompanante_menu}
												onChange = {formik.handleChange}
												className={classes.select}
											>
												<option value="" />
												<option value="normal">Come de todo</option>
												<option value="vegetariano">Vegetariano</option>
												<option value="vegano">Vegano</option>
											</select>
											{ displayErrorMessage(formik.errors.acompanante_menu, formik.touched.acompanante_menu) }
										</div>
										{separator()}
										<FormControl component="fieldset">
											<Typography variant="subtitle1">¿Tiene tu acompañante alguna alergia o intolerancia alimentaria?</Typography>
											<FormGroup aria-label="position" row onChange={formik.handleChange}>
												<FormControlLabel
													name="acompanante_intolerancia_gluten"
													// value="gluten"
													control={<Checkbox color="primary" />}
													label="Intolerancia al gluten"
													labelPlacement="end"
												/>
												<FormControlLabel
													name="acompanante_intolerancia_marisco"
													control={<Checkbox color="primary" />}
													label="Alergia a mariscos"
													labelPlacement="end"
												/>
												<FormControlLabel
													name="acompanante_intolerancia_otras"
													// value="otras"
													control={<Checkbox color="primary" />}
													label="Otra alergia o intolerancia"
													labelPlacement="end"
												/>
											</FormGroup>
										</FormControl>

										{ formik.values.acompanante_intolerancia_otras && (
											<div id="intolerancias" >
												<Typography variant="subtitle1">Cuentanos que intolerancias o alergias para atenderle mejor</Typography>
												<TextField
													fullWidth
													className={classes.textField}
													id="acompanante_intolerancias_str"
													name="acompanante_intolerancias_str"
													value={formik.values.acompanante_intolerancias_str}
													onChange={formik.handleChange}
													error={formik.touched.acompanante_intolerancias_str && Boolean(formik.errors.acompanante_intolerancias_str)}
													helperText={formik.touched.acompanante_intolerancias_str && formik.errors.acompanante_intolerancias_str}
												/>
											</div>
										)}
										{ separator() }
										<ImagesRSVP
											className='imgRSVP'
											src={siAsistes}
											alt="No te lo pierdas"
											style={{width: '100%', paddingRight: '20px', paddingTop: '10px', height: '100%'}}
										/>
										{ separator() }
									</div>
								</Grid>
							</Fade>
						)}
						{plusOne &&  <Grid item md={2} lg={2}/> }

					</Grid>
					<div style={{paddingTop: '10px', paddingBottom: '30px', textAlign: 'center'}}>
						<button type="submit">Enviar</button>
					</div>

				</Box>
			</form>
				<Dialog
					open={openComingDialog}
					TransitionComponent={Transition}
					keepMounted
					onClose={handleCloseComingDialog}
					aria-labelledby="alert-dialog-slide-title"
					aria-describedby="alert-dialog-slide-description"
				>
					<DialogTitle id="alert-dialog-slide-title">{"¡Gracias por confirmarnos tu asistencia!"}</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-slide-description">
							¡Nos hace mucha ilusión contar con vuestra presencia!. <br/>
							En pocos días nos pondremos en contacto contigo para contarte todos los detalles. <br/><br/>
							Haz click en el botón para volver a La Bodica.
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleCloseComingDialog} color="transparent">
							Ok
						</Button>
					</DialogActions>
				</Dialog>
				<Dialog
					open={openNotComingDialog}
					TransitionComponent={Transition}
					keepMounted
					onClose={handleCloseNotComingDialog}
					aria-labelledby="alert-dialog-slide-title"
					aria-describedby="alert-dialog-slide-description"
				>
					<DialogTitle id="alert-dialog-slide-title">{"¡Lo sentimos mucho!"}</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-slide-description">
							Nos gustaría que nos hubieras acompañado pero entendemos que son tiempos complicados.<br/>
							Gracias por dejarnos tu respuesta.<br/><br/>
							Haz click en el botón para volver a La Bodica.
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleCloseNotComingDialog} color="transparent">
							Ok
						</Button>
					</DialogActions>
				</Dialog>	
			</>
		)}

	export default withStyles(styles)(RSVP)
