import React, {useEffect, useState} from 'react'
import {useFormik } from 'formik'
import * as yup from 'yup'
import makeStyles from '@material-ui/core/styles';
import {Box, Container, Typography, TextField} from "@material-ui/core";
import {InputLabel, Select, MenuItem } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
// import PhoneInput from 'react-phone-input-2'
import MuiPhoneNumber from 'material-ui-phone-number'
import 'react-phone-input-2/lib/style.css'
import es from 'react-phone-input-2/lang/es.json'

import noTeLoPierdas from "../images/sinoVienesTeArrepentiras.jpg";
import {withStyles} from "@material-ui/core/styles";
import fiestabackground from "../images/wallpaperBlancoColores.jpg";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Fade from '@material-ui/core/Fade';
import boda04 from '../images/bodaMaria/boda04.jpg'

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
	full_name: ['Cuentanos quien eres', 'Nombre completo, por favor'],
	// full_name: 'Nombre completo, por favor',
	email: 'Un email valido, por favor',
	celular: `Revisa el numero del celular`,
	menu: 'Elige que tipo de menu quieres',
	intolerancias: 'Escribenos cuales son las intolerancias, por favor',
	mas1_full_name: `Cuentanos quien te acompaña ese dia`,
}
const testFullName = (value) => (value) && (value.split(' ').length > 1)
const validationSchemaYup = yup.object({
	full_name: yup
		.string(errorMessages.full_name[0])
		.required(errorMessages.full_name[0])
		.test('test-fullname', errorMessages.full_name[1],
			function(value) {
				return testFullName(value)
			}
		),
	email: yup.string().matches(regexEmail, errorMessages.email).notRequired(),
	celular: yup.string()
		// .notRequired()
		// .required(errorMessages.celular)
		// .test('test-phone', errorMessages.celular,
		// 	function(value) {
		// 		return (value) && (value.length > 6)
		// 	})
		// 	.notRequired(),
			.default(undefined),
	menu: yup.string()
		.notRequired()
		.default(undefined)
})

const separator = () => (<div style={{height: '20px'}} />)


const RSVP = (props) => {
	const {classes} = props

	const [attend, setAttend] = useState(false)
	const [plusOne, setPlusOne] = useState(true)


	//
	// const handleAttend = (value) => {
	// 	if (!value) return null
	// 	if (value === 'si') setAttend(true)
	// 	if (value === 'no') setAttend(false)
	// }
	// const handlePlusOne = (value) => {
	// 	if (value === 'si') setPlusOne(true)
	// 	if (value === 'no') setPlusOne(false)
	// }
	const formik = useFormik({
		initialValues: {
			full_name: "",
			asistir: "",
			email: "",
			celular: "",
			menu: "",
			acompanante: "",
			nombre_acompanante: "",
			menu_acompanante: "",
			num_personas: 1,
			ninos: 0,
		},
		validationSchema: validationSchemaYup,
		onSubmit: (values) => {
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

	return (

	<>
	<form onSubmit={formik.handleSubmit}>
		<Box className={classes.box}>
			<div style={{paddingTop: '30px', paddingBottom: '10px'}}>
				<h2 style={{fontFamily: 'Abril Fatface', textAlign: 'center',paddingLeft: '5px', paddingRight: '5px'}}>Confirmanos tu asistencia</h2>
			</div>
			<Grid container spacing={2}
						direction="row"
						justify="space-around"
						alignItems="flex-start"
			>
				{!plusOne && <Grid item md={2} /> }
				{/*{!plusOne && <Grid item md={2} /> }*/}


				 <Grid item xs={!plusOne? 10: 12} sm={!plusOne ? 6 : 6} md={!plusOne ? 6 : 4} >

					<Container maxWidth="sm" className={classes.container}>
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
										id="full_name"
										name="full_name"
										value={formik.values.full_name}
										onChange={formik.handleChange}
										error={formik.touched.full_name && Boolean(formik.errors.full_name)}
										helperText={formik.touched.full_name && formik.errors.full_name}
									/>
								</div>
								{separator()}
								<FormControl component="fieldset">
									<Typography variant="subtitle1">Vienes a la boda?</Typography>
									<RadioGroup row aria-label="Vienes a la boda" name="asistir" value={formik.values.asistir} onChange={formik.handleChange}>
										<FormControlLabel disabled={formik.values.full_name === ''} value="si" control={<Radio />} label="Por supuesto" />
										<FormControlLabel disabled={formik.values.full_name === ''} value="no" control={<Radio />} label="Me encantaria pero no puedo" />

									</RadioGroup>
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
											fullWidth
											id="email"
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
										{formik.errors.celular && formik.touched.celular && (
											<p style={{color: 'red'}}>{formik.errors.celular}</p>
										)}
									</div>
									{separator()}
									<div id="menu">
										<Typography variant="subtitle1">¿Que menu tomarias?</Typography>
										<select
											name="menu"
											id="menu"
											value = {formik.values.menu}
											onChange = {formik.handleChange}
										>
											<option value=""></option>
											<option value="normal">Como de todo</option>
											<option value="vegetariano">Vegetariano</option>
											<option value="vegano">Vegano</option>
										</select>
									</div>
									{separator()}
									<FormControl component="fieldset">
										<Typography variant="subtitle1">Traes acompañante</Typography>
										<RadioGroup aria-label="Traes acompañante" name="acompanante" value={formik.values.acompanante} onChange={formik.handleChange}>
											<FormControlLabel value="si" control={<Radio />} label="Si claro" />
											<FormControlLabel value="no" control={<Radio />} label="No, apuntame al Tinder de la boda" />
										</RadioGroup>
									</FormControl>
									{separator()}
								</div>
								</Fade>
							)}
							{/*<div style={{alignContent: 'center'}}>*/}
							{/*	<button type="submit">Enviar</button>*/}
							{/*</div>*/}
						</div>
					</Container>
				</Grid>
				{ !plusOne ? (
					<Fade in={!plusOne}>
					<Grid item xs={3}>
						{ !attend && (
							<img
								src={noTeLoPierdas}
								alt="No te lo pierdas2"
								style={{width: '100%', paddingRight: '20px', paddingTop: '10px', height: '100%'}}
								// style={{align: 'center', width: '100%', padding: '10px'}}
							/>

						)}
						{ attend && (
							<img
								src={boda04}
								alt="No te lo pierdas"
								style={{width: '100%', paddingRight: '20px', paddingTop: '10px', height: '100%'}}
								// style={{align: 'center', width: '100%', padding: '10px'}}
							/>

						)}
					</Grid>
					</Fade>
				) : (<Grid item xs={3}/>) }

				{ plusOne && (
					<Fade in={plusOne}>
						<Grid item xs={6} sm={6} md={4}>
							<div id="fullName-acompanante" >
								{/*<label htmlFor="full_name">*/}
								<Typography variant="subtitle1">Nombre de tu acompañante</Typography>
								{/*</label>*/}
								<TextField
									fullWidth
									id="full_name"
									name="full_name"
									value={formik.values.nombre_acompanante}
									onChange={formik.handleChange}
									error={formik.touched.nombre_acompanante && Boolean(formik.errors.nombre_acompanante)}
									helperText={formik.touched.nombre_acompanante && formik.errors.nombre_acompanante}
								/>
							</div>
							{separator()}
							<div id="menu-acompanante">
								<Typography variant="subtitle1">¿Que menu tomaria tu acompañante?</Typography>
								<select
									name="menu"
									id="menu"
									value = {formik.values.menu_acompanante}
									onChange = {formik.handleChange}
								>
									<option value=""></option>
									<option value="normal">Come de todo</option>
									<option value="vegetariano">Vegetariano</option>
									<option value="vegano">Vegano</option>
								</select>
							</div>
						</Grid>
					</Fade>
				)}
				{ plusOne && <Grid item xs={0} sm={0} md={2}/> }

				{/*<Grid item xs={1} style={{align: 'center'}}>*/}
				{plusOne &&
				<Grid item xs={12} style={{align: 'center'}}>
					<button style={{align: 'center'}} type="submit">Enviar</button>
				</Grid> }

			</Grid>


			{/*<div>*/}
			{/*	<img*/}
			{/*		src={noTeLoPierdas}*/}
			{/*		alt="No te lo pierdas"*/}
			{/*		style={{position: 'absolute', alignContent: 'right'}}*/}
			{/*	/>*/}
			{/*</div>*/}
		</Box>
	</form>

	</>
)
}

export default withStyles(styles)(RSVP)

