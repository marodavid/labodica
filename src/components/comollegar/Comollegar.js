import React from 'react'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";

import mapaMadrid from '../../images/comollegar/mapaMadridMazarron.png'
import trenesMadrid from '../../images/comollegar/tiposTrenes-madrid-murcia.png'


const styles = (theme) => ({
	root: {
		paddingLeft: theme.spacing(4),
		margin: 'auto',
		overflowY: 'scroll',
		scrollbarWidth: 'thin',
	},
	titulo: {
		fontSize: '18px',
	},
	content: {
		paddingLeft: theme.spacing(4),
		fontSize: '16px',
		[theme.breakpoints.between('xs','sm')]: {
			paddingLeft: theme.spacing(0),
		},
	},
	listItem: {
		color: 'black',
		textTransform: 'none'
	},
	mapas: {
		maxWidth: '30%',
		height: 'auto',
		paddingLeft: theme.spacing(4),
		[theme.breakpoints.between('xs','sm')]: {
			maxWidth: '80%',
			paddingLeft: theme.spacing(0),
		},
	},
	trenes: {
		maxWidth: '20%',
		height: 'auto',
		paddingLeft: theme.spacing(4),
		[theme.breakpoints.between('xs','sm')]: {
			maxWidth: '60%',
			paddingLeft: theme.spacing(0),
		},
	},
})


const Comollegar = (props) => {
	const { classes } = props;

	return(
		<Grid container className={classes.root}>
			<Grid item xs={12} sm={12} md={12} lg={12}>
				<h4 className={classes.titulo}>
					Dependiendo cuales sean tus planes los días previos y después de la boda, a
					continuación te mostramos algunas opciones para llegar a la comunidad de Murcia y alrededores.<br/>
					Esperamos que estas recomendaciones te sirvan para planear tu viaje y ¡disfrutar al máximo con nosotros!
				</h4>
				<hr/>
			</Grid>
			<Grid item xs={12} sm={12} md={12} lg={12} >
				<h4 className={classes.titulo} ><b>Aeropuerto de Alicante-Elche (ALC)</b></h4>
				<p className={classes.content}>
					Este aeropuerto se encuentra a aproximadamente 1 hora y 20 minutos en coche de la zona donde será la boda.<br/>
					Dispone de muchas conexiones con toda Europa y vuelos directos desde el aeropuerto de Madrid.<br/>
					<a
						href="http://www.aena.es/es/aeropuerto-alicante/alicante-elche.html"
						target='_blank'
						rel="noopener noreferrer"
						>
						Web del aeropuerto
					</a>
				</p>
			</Grid>
			<Grid item xs={12} sm={12} md={12} lg={12}>
				<h4 className={classes.titulo}><b>Aeropuerto de Madrid-Barajas (Adolfo Suarez)</b></h4>
				<p className={classes.content}>
					Se encuentra a 450 kms de los lugares de la boda.<br/>
					Se tarda 4 horas y media en coche o autobús hasta los lugares de la boda.
					También existe la opción de tren, que tarda 4 horas hasta la ciudad de Murcia.<br/> Es una buena opción si la conexión final para volar a Alicante o Murcia encarece muchísimo el precio final del billete de avión.<br/>
				</p>
				<img src={mapaMadrid} alt="Mapa madrid" className={classes.mapas}/>
				<p className={classes.content}>
					<a
						href="http://www.aena.es/es/aeropuerto-alicante/alicante-elche.html"
						target='_blank'
						rel="noopener noreferrer"
						>
						Web del aeropuerto
					</a>
				</p>
			</Grid>
			<Grid item xs={12} sm={12} md={12} lg={12}>
				<h4 className={classes.titulo}><b>Aeropuerto de Murcia-Corvera</b></h4>
				<p className={classes.content}>
					Recientemente inaugurado (tan solo hace 2 años), este aeropuerto se encuentra a solo 40 minutos de los lugares de la boda.<br/>
					Hay que tomar en cuenta que el número de vuelos y opciones en este aeropuerto es muy limitado.<br/>
					<a
						href="http://www.aena.es/es/aeropuerto-region-murcia/index.html"
						target='_blank'
						rel="noopener noreferrer"
					>
						Web del aeropuerto
					</a>
				</p>
				<hr/>
			</Grid>
			<Grid item xs={12} sm={12} md={12} lg={12}>
				<h4 className={classes.titulo}><b>Transporte en Autobus</b></h4>
				<p className={classes.content}>
					La empresa de autobuses Alsa tiene las siguientes rutas que pueden ser de interes:<br/>
					<p className={classes.content}>
						<b>Aeropuerto Madrid (T4) - Murcia:</b> duracion del trayecto 5 horas y 30 minutos. Salida directamente desde el aeropuerto de Madrid.<br/>
						<b>Aeropuerto Alicante - Murcia:</b> 45 minutos de trayecto. Salidas cada 2 horas directamente desde el Aeropuerto de Alicante. Consultar la web de Alsa para ver horarios.<br/>
						<b>Murcia - Puerto de Mazarron:</b> 50 minutos de trayecto. Para ir al <italic>Hotel Dos Playas</italic>, bajarse en la parada Puerto de Mazarron.<br/>
					</p>
					<a
						href="http://www.aena.es/es/aeropuerto-region-murcia/index.html"
						target='_blank'
						rel="noopener noreferrer"
					>
						Web de ALSA
					</a>
				</p>
				<hr/>
			</Grid>
			<Grid item xs={12} sm={12} md={12} lg={12}>
				<h4 className={classes.titulo}><b>Llegar en Tren</b></h4>
				<p className={classes.content}>
					Renfe es la empresa estatal de trenes en España y es una forma cómoda y confortable de llegar hasta Murcia desde Madrid. <br/>
					Es posible llegar en tren solo hasta la ciudad de Murcia (recomendable) o incluso hasta Cartagena (peor conectada). A la llegada a Murcia, es necesario tomar un autobús o incluso mejor, alquilar coche para llegar hasta los lugares de la bodica.<br/>
					Estas son las rutas de trenes que pueden ser de interes:<br/>
					<p className={classes.content}>
						<b>Madrid (Estacion Puerta de Atocha) - Murcia:</b> duracion del trayecto 3 horas y 30 minutos. Suele haber 4 trenes por dia.<br/>
						En Madrid para llegar a la estacion de tren desde el aeropuerto, hay un servicio de autobuses directo con servicio 24 horas al dia
						. <a
								href="https://www.emtmadrid.es/Aeropuerto"
								target='_blank'
								rel="noopener noreferrer"
							>Este es su sitio web</a><br/>
						El precio del tren oscila entre los 20 Eur (venta super anticipada) hasta los 60 Eur (precio normal). <br/>
						Hay dos tipos de rutas para el trayecto dependiendo del tipo de tren, asi se ven en la web de Renfe.
						<p className={classes.content}>
							<b>AVE-LD: </b>en este trayecto se toma un tren de Madrid hasta Albacete en AVE (tren de alta velocidad) y en Albacete hay que cambiar a un segundo tren que llega hasta Murcia.<br/>
							<b>ALVIA: </b>este trayecto toma el mismo tiempo y no requiere cambiar de tren, por lo que es mucho mas comodo. Es tren directo hasta la estacion de Murcia (o Cartagena).<br/>
							<img src={trenesMadrid} alt="Trenes Madrid" className={classes.trenes}/>
						</p>

						<b>Barcelona - Murcia:</b> es posible ir en tren desde Barcelona a Murcia pero no es un viaje comodo. El trayecto dura 7 horas y el precio esta entre los 30 Euros (compra anticipada) y los 60 Euros (precio regular).<br/>
						<b>Alicante - Murcia:</b> existe una ruta de tren entre Alicante y Murcia, pero es mucho mas comoda la conexion en autobus directa entre el aeropuerto de Alicante y Murcia.
					</p>
					<a
						href="https://www.renfe.com/es/es"
						target='_blank'
						rel="noopener noreferrer"
					>
						Web de RENFE
					</a>
				</p>
				<hr/>
			</Grid>
			<Grid item xs={12} sm={12} md={12} lg={12}>
				<h4 className={classes.titulo}><b>Alquiler de coche</b></h4>
				<p className={classes.content}>
					Los lugares de la boda no son fáciles de acceder en transporte público, por lo que recomendamos que para moverse esos dias se rente auto.<br/>
					En general, en España, resulta mas económico alquilar coche en las oficinas de los aeropuertos, que las localizadas en las ciudades. Aunque puede haber excepciones.<br/><br/>
					Aqui debajo detallamos las oficinas de alquiler disponibles en los distintos aeropuertos.
					<p className={classes.content}>
						<a href="http://www.aena.es/es/aeropuerto-alicante/alquiler-coches.html" target="_blank" rel="noopener noreferrer">
							Aeropuerto de Alicante-Elche (ALC)
						</a> <br/>
						<a href="http://www.aena.es/es/aeropuerto-madrid-barajas/alquiler-coches.html" target="_blank" rel="noopener noreferrer">
							Aeropuerto de Madrid-Barajas (Adolfo Suarez)
						</a> <br/>
						<a href="http://www.aena.es/es/aeropuerto-region-murcia/alquiler-coches.html" target="_blank" rel="noopener noreferrer">
							Aeropuerto de Murcia-Corvera (MUR)
						</a> <br/>
					</p>
				</p>
				<p className={classes.content}>
					Además de las habituales grandes compañías como <a href="https://www.europcar.es" target="_blank" rel="noopener noreferrer">Europcar</a> o <a href="https://www.sixt.es" target="_blank" rel="noopener noreferrer">Sixt</a>,
					también son muy populares buscadores web como <a href="https://www.kayak.es/cars" target="_blank" rel="noopener noreferrer">Kayak.es</a> o
					recientemente <a href="https://www.booking.com/cars/index.es.html" target="_blank" rel="noopener noreferrer">Booking.com</a> para
					comparar precios entre las distintas empresas de alquiler de coches y hacer reservas.
				</p>
				<hr/>
			</Grid>
		</Grid>
	)
}

Comollegar.propTypes = {
	classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Comollegar)
