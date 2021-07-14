import React from 'react'
// import PropTypes from 'prop-types'
import {Grid, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";

import GeneralMenu from "../generalmenu/GeneralMenu";
import PiePagina from "../footer/PiePagina";
import ListaBodaCard from './ListaBodaCard'
import weddingGif from '../../images/listaboda/ourweddingregistry.gif'
import honeymoon from '../../images/listaboda/honeymoon_southafrica.jpg'
import casaloquitos from '../../images/listaboda/casaLoquitosListaBoda.jpg'
import huchaboda from '../../images/listaboda/hamm_large.jpg'
import lluviaSobres from '../../images/listaboda/lluviasobres.webp'


const useStyles = makeStyles((theme) => ({
	
	gridRoot: {
		overflowY: 'scroll',
		scrollbarWidth: 'thin',
	},
	titulo: {
		height: '150px',
		[theme.breakpoints.down('md')]: {
			height: '100px',
		},
		textAlign: 'center',
		paddingTop: '30px',
	},
	cuadroDescripcion: {
		border: '2px solid #ccc!important',
		borderRadius: '16px',
		padding: '0.01em 16px',
		boxSizing: 'inherit',
	},
	cuadroCuenta: {
		border: '2px solid #ccc!important',
		borderRadius: '16px',
		padding: '0.01em 16px',
		boxSizing: 'inherit',
	},
	textoTitulo: {
		textAlign: 'center',
		fontSize: '30px',
		padding: '10px',
		paddingBottom: '20px',
		[theme.breakpoints.down('md')]: {
			fontSize: '20px',
			paddingBottom: '10px',
		},
	},
	textoDescripcion: {
		fontSize: '22px',
		[theme.breakpoints.down('md')]: {
			fontSize: '15px',
		},
		padding: '10px',
	},
	textoCuenta: {
		fontSize: '25px',
		[theme.breakpoints.down('md')]: {
			fontSize: '18px',
		},
		padding: '5px',
		textAlign: 'center',
	},
	detalleCuenta: {
		fontSize: '22px',
		[theme.breakpoints.down('md')]: {
			fontSize: '15px',
		},
		textAlign: 'center',
	},
	separacion: {
		height: '30px',
	},
	
}));


const tarjetas = [
	{
		tipo: 'monumento',
		title: 'Nuestro futuro hogar',
		subtitle: 'En algún lugar de este mundo',
		imagen: {casaloquitos}.casaloquitos,
		descripcion: 'Tenemos el proyecto de comprar una casa donde continuaremos construyendo nuestra historia. Gracias por ayudarnos a seguir avanzando en nuestro sueño.'
	},
	{
		tipo: 'viaje',
		title: 'Luna de Miel',
		subtitle: '2022 Sudáfrica',
		imagen: {honeymoon}.honeymoon,
		descripcion: 'Ayúdanos a tener una gran luna de miel para poner un broche de oro a la boda.',
		extendida: '',
	},
	{
		tipo: 'monumento',
		title: 'Nuestra alcancía familiar',
		subtitle: 'Proyectos, sueños, familia',
		imagen: {huchaboda}.huchaboda
	},
]

export default function ListaBoda(props) {

	const classes = useStyles();
	
	return (
		<>
		<GeneralMenu />
			<Grid
				container
				direction="row"
				justify="space-evenly"
				alignItems="flex-start"
				spacing={0}
				className={classes.gridRoot}
			>
				<Grid item xs={1} sm={1} md={2} lg={3} xl={3} />
				<Grid item xs={10} sm={10} md={8} lg={6} xl={6} >
					<img src={weddingGif} alt={'lista bodas'} style={{width: '100%', height: 'auto'}} />
					<Typography variant="h2" className={classes.textoTitulo}>Nuestra Lista de Boda</Typography>
				</Grid>
				<Grid item xs={1} sm={1} md={2} lg={3} xl={3} />
				
				<Grid item xs={1} sm={1} md={2} lg={3} xl={3} />
				<Grid item xs={10} sm={10} md={8} lg={6} xl={6} className={classes.cuadroDescripcion}>
					<Typography variant="h5" className={classes.textoDescripcion}>
						Queridos amigos y familia: <br/><br/>
						Como sabéis, somos emigrantes viviendo de alquiler en un país que nos acogió pero no es el nuestro.
						Por ello, no tiene mucho sentido en nuestro caso que vuestros regalos sean una vajilla preciosa, electrodomésticos u otros
						objetos que luego tendremos que llevar con nosotros de hogar en hogar y de país en país, como caracol que carga con su casa.<br/><br/>
						Tenemos grandes sueños y proyectos que nos gustaría llevar a cabo juntos, y agradecemos enormemente la ayuda que nos puedan brindar.<br/>
						Os detallamos abajo sugerencias en caso que quieran enviarnos sus regalos, dependiendo de donde estéis viviendo.
					</Typography>
				</Grid>
				<Grid item xs={1} sm={1} md={2} lg={3} xl={3} />

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.separacion}/>

				<Grid item xs={12} sm={12} md={4} lg={4} xl={4}  className={classes.cuadroCuenta}>
					<p className={classes.textoCuenta}>
						<strong>España</strong><br/>
					<span className={classes.detalleCuenta}>
						Titular: David Barba Pedreño<br/>
						IBAN: ES44 1465 0100 97 1706789313<br/>
						Banco: ING España<br/>
						Bizum: +34-634533643
					</span>
					</p>
				</Grid>
				
				<Grid item xs={12} sm={12} md={4} lg={4} xl={4}  className={classes.cuadroCuenta}>
					<p className={classes.textoCuenta}>
						<strong>Panamá</strong><br/>
						<span className={classes.detalleCuenta}>
						Titular: Laura Wong Sagel<br/>
						Cuenta Ahorros: 0410993409239<br/>
						Banco: Banco General
					</span>
					</p>
				</Grid>
				
				<Grid item xs={12} sm={12} md={4} lg={4} xl={4}  className={classes.cuadroCuenta}>
					<p className={classes.textoCuenta}>
						<strong>Alemania</strong><br/>
						<span className={classes.detalleCuenta}>
						Titular: Laura Gisela Wong Sagel<br/>
						IBAN: DE32 5001 0517 5436 8515 59<br/>
						Banco: ING Alemania<br/>
						Paypal: marodavid@hotmail.com	
					</span>
					</p>
				</Grid>
				
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.separacion}/>
				
				<Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
				<Grid item xs={10} sm={10} md={3} lg={3} xl={3} className={classes.cuadroCuenta} >
					<div  align="center" style={{paddingTop: '10px'}}>
						<img src={lluviaSobres} alt={'lluvia de sobres'}/>
					</div>
					<p className={classes.textoCuenta}>
						<strong>Lluvia de sobres</strong><br/>
						Si lo prefieres, entréganos tu sobre los días de La Bodica.
					</p>
				</Grid>
				<Grid item xs={1} sm={1}  md={1} lg={1} xl={1}/>
				
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
					<hr/>
				</Grid>
				
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
					<Typography variant="h4" className={classes.textoTitulo}>Nuestros sueños y proyectos</Typography>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.separacion} />
			
			</Grid>
			
			<Grid
				container
				direction="row"
				justify="space-evenly"
				alignItems="flex-start"
				spacing={0}
				className={classes.gridRoot}
			>
				{tarjetas.map((tarjeta) => (
					<>
						<Grid item xs={10} sm={10} md={5} lg={3} xl={3}>
							<ListaBodaCard tipo={tarjeta.tipo} titulo={tarjeta.title} imagen={tarjeta.imagen} subtitulo={tarjeta.subtitle} descripcion={tarjeta.descripcion} extendida={''}/>
						</Grid>
					</>
				))}
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.separacion} />
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.separacion} />
			</Grid>
			<PiePagina/>
		</>
	)
}
