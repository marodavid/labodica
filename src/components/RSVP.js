import React, {useEffect, useState} from 'react'
import {useFormik } from 'formik'
import * as yup from 'yup'
import {withStyles} from "@material-ui/core/styles";
// import makeStyles from '@material-ui/core/styles';
import {Box, Container, Typography, TextField} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Fade from '@material-ui/core/Fade';
// import {InputLabel, Select, MenuItem } from "@material-ui/core";
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'
// import es from 'react-phone-input-2/lang/es.json'
import MuiPhoneNumber from 'material-ui-phone-number'

import noTeLoPierdas from "../images/sinoVienesTeArrepentiras.jpg";
import fiestabackground from "../images/wallpaperBlancoColores.jpg";
import boda04 from '../images/bodaMaria/boda04.jpg'
import PortadaLayout from "../pages/PortadaLayout";
import losLoquitos from "../images/iglesia3.png";
import './RSVP.css'
import FormGroup from "@material-ui/core/FormGroup";


const styles = (theme) => ({
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
		// align: 'right'

	},
	container2: {
		display: 'flex',
		flexGrow: '0',
		align: 'right'

	},
})

const regexEmail = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

const errorMessages = {
	nombre: ['Cuentanos quien eres', 'Nombre completo, por favor'],
	asistir: '¿Podrás venir a la boda?',

	email: 'Un email valido, por favor',
	celular: `Revisa el numero del celular`,
	menu: 'Elige que tipo de menu quieres',
	intolerancias_bool: '¿Intolerancia a algun alimento?',
	intolerancia_gluten: false,
	intolerancia_marisco: false,
	intolerancia_otras: false,
	intolerancias_str: 'Escribenos cuales son las intolerancias, por favor',

	acompanante: '¿No nos vas a contar si traes a alguien?',
	acompanante_nombre: ['¡Cuentanos quien es esa persona misteriosa!', 'Dinos su nombre completo, por favor'],
	acompanante_menu: 'Elige un tipo de menu para tu acompanante',

	ninos: 'Dificil decision, lo sabemos',
	nino_nombre: 'Nombre completo',
	nino_edad: 'Dinos su año de nacimiento'
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

	intolerancias_bool: yup.string().ensure().when('asistir', {
		is: 'si',
		then: yup.string()
			.oneOf(['gluten', 'mariscos', 'otras'], errorMessages.intolerancias_bool),
	}),

	intolerancias_str: yup.string().ensure().when('intolerancias_bool', {
		is: 'otras',
		then: yup.string().required(errorMessages.intolerancias_str),
	}),

	acompanante: yup.string().ensure().when('asistir', {
		is: 'si',
		then: yup.string()
			.oneOf(['si', 'no'], errorMessages.acompanante),
	}),

	ninos_bool: yup.string().ensure().when('asistir', {
		is: 'si',
		then: yup.string()
			.oneOf(['si', 'no', 'nose'], errorMessages.ninos_bool),
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
			.oneOf(['normal', 'vegetariano', 'vegano', 'nose'], errorMessages.acompanante),
	}),

	intolerancias_acompanante_bool: yup.string().ensure().when('acompanante', {
		is: 'si',
		then: yup.string()
			.oneOf(['gluten', 'mariscos', 'otras'], errorMessages.intolerancias_acompanante_bool),
	}),


	intolerancias_acompanante_str: yup.string().ensure().when('intolerancia_otras', {
		is: true,
		then: yup.string().required(errorMessages.intolerancias_acompanante_str),
	}),


	//ninos SI
	nino_nombre: yup.string().when('ninos', {
		is: 'si',
		then: yup.string()
			.test('test-fullname', errorMessages.nino_nombre[1],
				function(value) {
					return testFullName(value)
				}
			).required(errorMessages.nombre[0]),
	}),
	nino_edad: yup.string().ensure().when('ninos', {
		is: 'si',
		then: yup.string().required(errorMessages.nino_edad),
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
	const [kids, setKikds] = useState(false)

	const formik = useFormik({
		initialValues: {
			nombre: "",
			asistir: "",
			email: "",
			celular: "",
			menu: "",
			intolerancias_bool: "",
			intolerancias_str: "",
			intolerancias_acompanante_bool: "",
			intolerancias_acompanante_str: "",
			acompanante: "",
			acompanante_nombre: "",
			acompanante_menu: "",
			ninos_bool: "",
			ninos_numero: 0,
			ninos: [
				{
					nino_nombre: "",
					nino_edad: "",
				},
			],
		},

		validationSchema: validationSchemaYup,

		onSubmit: async (values) => {
			await new Promise((r) => setTimeout(r, 500));
			alert(JSON.stringify(values, null, 2));
		},
	})

	useEffect(() => {
		if (formik) {
			if (formik.values.asistir === 'si') setAttend(true)
			if (formik.values.asistir === 'no') setAttend(false)
		}
	},[formik.values.asistir])

	useEffect(() => {
		if (formik) {
			if (formik.values.acompanante === 'si') setPlusOne(true)
			if (formik.values.acompanante === 'no') setPlusOne(false)
		}
	},[formik.values.acompanante])

	useEffect(() => {
		if (formik) {
			if (formik.values.ninos_bool === 'si') setKikds(true)
			if (formik.values.ninos_bool === 'no') setKikds(false)
			if (formik.values.ninos_bool === 'nose') setKikds(false)
		}
	},[formik.values.ninos_bool])

	return (

	<>
	<form onSubmit={formik.handleSubmit}>
		<Box className={classes.box}>
		{/*<PortadaLayout className={classes.background}>*/}
			<div style={{paddingTop: '30px', paddingBottom: '30px'}}>
				<h2 style={{fontFamily: 'Abril Fatface', textAlign: 'center'}}>Confirmanos tu asistencia</h2>
			</div>
			<Grid container spacing={2}
						direction="row"
						justify="space-around"
						alignItems="flex-start"
			>
				{/* MARGEN IZQUIERDO */}

				{/*{!plusOne &&  <Grid item xs={2} sm={2} md={2} lg={2}/>}*/}
				{/*/!*sm={2} md={2} lg={2} />*!/*/}

				{/*{plusOne &&  <Grid item xs={1} sm={1} md={2} lg={2}/> }*/}
				{/*	/!*sm={1} md={1} lg={2} />}*!/*/}

				<Grid item xs={2} sm={2} md={2} lg={2}/>
				{/* END MARGEN IZQUIERDO */}

				{/* FORM PRINCIPAL */}

				 <Grid item
							 xs={!plusOne? 10: 10}
							 sm={!plusOne ? 10 : 10}
							 md={!plusOne ? 6 : 4}
							 lg={!plusOne ? 6 : 4}
				 >

					{/*<Container maxWidth="md" className={classes.container}>*/}
						<div id="rsvp"
								 style={{width: '90%', paddingLeft: '5px', paddingRight: '5px'}}
								 // style={{width: 'auto', paddingLeft: '5px', paddingRight: '5px'}}
						>
							{/*<h2 style={{fontFamily: 'Abril Fatface', align: 'center',paddingLeft: '5px', paddingRight: '5px'}}>Confirmanos tu asistencia</h2>*/}
							{/*{ console.log(`attend: ${attend}`)}*/}
								<div id="fullName" >
									<Typography variant="subtitle1">Nombre completo</Typography>
									<TextField
										fullWidth
										style={{width: '90%'}}
										id="nombre"
										name="nombre"
										value={formik.values.nombre}
										onChange={formik.handleChange}
										error={formik.touched.nombre && Boolean(formik.errors.nombre)}
										helperText={formik.touched.nombre && formik.errors.nombre}
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
									<div id="email" >
										<Typography variant="subtitle1">Correo electronico</Typography>
										<TextField
											// fullWidth
											id="email"
											style={{width:'90%'}}
											name="email"
											// label="Email"
											value={formik.values.email}
											onChange={formik.handleChange}
											error={formik.touched.email && Boolean(formik.errors.email)}
											helperText={formik.touched.email && formik.errors.email}
										/>
									</div>

									{separator()}
									<div id="celular" >
										<Typography variant="subtitle1">Telefono movil / Celular</Typography>
										{/*<PhoneInput*/}
										{/*	// inputProps={{*/}
										{/*	// 	// name: 'celular',*/}
										{/*	// 	// required: true,*/}
										{/*	// 	// autoFocus: true,*/}
										{/*	// 	// style: {width: '100%'}*/}
										{/*	// }}*/}
										{/*	autoFormat={true}*/}
										{/*	country={'pa'}*/}
										{/*	localization={es}*/}
										{/*	// localization={{de: 'Deutschland', es: 'España'}}*/}
										{/*	onlyCountries={['pa', 'es', 'de', 'mx', 'fr', 'ec', 'bu', 'bo']}*/}
										{/*	value={formik.values.celular}*/}
										{/*	onChange={celular => formik.values.celular = celular}*/}
										{/*/>*/}

										<MuiPhoneNumber
											inputProps={{
												name: 'celular',
												required: true,
												autoFocus: true,
												style: {width: '100%'}
											}}
											defaultCountry={'pa'}
											onChange={celular => formik.values.celular = celular}
											onlyCountries={['pa', 'es', 'de', 'mx', 'fr', 'ec', 'bu', 'bo']}
											autoformat
											value={formik.values.celular}
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
											style={{width: '90%'}}
										>
											<option value=""></option>
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
										{ displayErrorMessage(formik.errors.intolerancias_bool, formik.touched.intolerancias_bool) }
									</FormControl>

									{ formik.values.intolerancia_otras && (
										<div id="intolerancias" >
											<Typography variant="subtitle1">Cuentanos que intolerancias o alergias para atenderte mejor</Typography>
											<TextField
												fullWidth
												id="intolerancias_str"
												name="intolerancias_str"
												value={formik.values.intolerancias_str}
												onChange={formik.handleChange}
												error={formik.touched.intolerancias_str && Boolean(formik.errors.intolerancias_str)}
												helperText={formik.touched.intolerancias_str && formik.errors.intolerancias_str}
											/>
										</div>
									)}
									<FormControl component="fieldset">
										<Typography variant="subtitle1">Traes acompañante</Typography>
										<RadioGroup row aria-label="Traes acompañante" name="acompanante" value={formik.values.acompanante} onChange={formik.handleChange}>
											<FormControlLabel value="si" control={<Radio />} label="Si claro" />
											<FormControlLabel value="no" control={<Radio />} label="No, apuntame al Tinder de la boda" />
										</RadioGroup>
										{ displayErrorMessage(formik.errors.acompanante, formik.touched.acompanante) }
									</FormControl>
									<FormControl 	component="fieldset">
										<Typography variant="subtitle1">Traes a los niños</Typography>
										<RadioGroup row aria-label="Traes niños" name="ninos_bool" value={formik.values.ninos_bool} onChange={formik.handleChange}>
											<FormControlLabel value="si" control={<Radio />} label="Si" />
											<FormControlLabel value="no" control={<Radio />} label="No, por favor" />
											<FormControlLabel value="nose" control={<Radio />} label="No lo sé todavia" />
											{ displayErrorMessage(formik.errors.ninos_bool, formik.touched.ninos_bool) }
										</RadioGroup>
									</FormControl>
								</div>
								</Fade>
							)}
						</div>
					{/*</Container>*/}
				</Grid>


				{ !plusOne ? (
					<Fade in={!plusOne}>
					<Grid item xs={1} sm={3} md={3} lg={3}>
						{ !attend && (
							<img
								src={noTeLoPierdas}
								alt="No te lo pierdas2"
								style={{width: '100%', paddingRight: '20px', paddingTop: '10px', height: '100%'}}
							/>

						)}
						{ attend && (
							<img
								src={boda04}
								alt="No te lo pierdas"
								style={{width: '100%', paddingRight: '20px', paddingTop: '10px', height: '100%'}}
							/>

						)}
					</Grid>
					</Fade>
				) : null
				}


				{ plusOne && (
					<Fade in={plusOne}>
						<Grid item
									xs={11}
									sm={11}
									md={4}
									lg={4}
						>
							<div id="rsvp-parte2"
									 style={{width: '90%', paddingLeft: '5px', paddingRight: '5px'}}
								// style={{width: 'auto', paddingLeft: '5px', paddingRight: '5px'}}
							>
							{/*<Container maxWidth="md" className={classes.container}>*/}
									<div id="fullName-acompanante" >
										<Typography variant="subtitle1">Nombre de tu acompañante</Typography>
										<TextField
											fullWidth
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
											// style={{width: '90%'}}
										>
											<option value=""></option>
											<option value="normal">Come de todo</option>
											<option value="vegetariano">Vegetariano</option>
											<option value="vegano">Vegano</option>
											<option value="nose">Tengo que preguntarle</option>
										</select>
										{ displayErrorMessage(formik.errors.acompanante_menu, formik.touched.acompanante_menu) }
									</div>

									{separator()}
								{ kids && (
									<div id="ninos-numero">
										<Typography variant="subtitle1" style={{width: '40%'}}>¿Cuantos niños?</Typography>
										<select
											style={{width: '60%'}}
											name="nino_numero"
											id="nino_numero"
											value = {formik.values.nino_numero}
											onChange = {formik.handleChange}
											// style={{width: '90%'}}
										>
											<option value=""></option>
											<option value="1">Uno</option>
											<option value="2">Dos</option>
											<option value="3">Tres</option>
											{ displayErrorMessage(formik.errors.ninos_numero, formik.touched.ninos_numero) }
										</select>
									</div>
								)}
								{/*{formik.values.ninos_numero !== "0" &&*/}
								{/*	*/}
								{/*	<div id="fullName-nino">*/}
								{/*		<Typography variant="subtitle1">Nombre de tu peque</Typography>*/}
								{/*		<TextField*/}
								{/*			fullWidth*/}
								{/*			id="acompanante_nombre"*/}
								{/*			name="acompanante_nombre"*/}
								{/*			value={formik.values.acompanante_nombre}*/}
								{/*			onChange={formik.handleChange}*/}
								{/*			error={formik.touched.acompanante_nombre && Boolean(formik.errors.acompanante_nombre)}*/}
								{/*			helperText={formik.touched.acompanante_nombre && formik.errors.acompanante_nombre}*/}
								{/*		/>*/}
								{/*	</div>*/}
								{/*	)}*/}
								{ separator() }
							</div>
							{/*</Container>*/}
						</Grid>
					</Fade>
				)}

				{plusOne &&  <Grid item xs={1} sm={1} md={2} lg={2}/> }
				{/*{plusOne &&  <Grid item xs={1} sm={1} md={1} lg={1}/> }*/}


			</Grid>
			<div style={{paddingTop: '10px', paddingBottom: '30px', textAlign: 'center'}}>
				<button type="submit">Enviar</button>
			</div>

		</Box>
	</form>

	</>
)
}

export default withStyles(styles)(RSVP)

