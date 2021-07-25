import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import RestaurantCard from "./RestaurantCard";

import cosafinaAvatar from '../../images/restaurantes/cosafinaAvatar.png'
import elchurraAvatar from '../../images/restaurantes/elchurraAvatar.png'
import embokaAvatar from '../../images/restaurantes/embokaAvatar.png'
import hispanoAvatar from '../../images/restaurantes/hispanoAvatar.png'
import pequenatabernaAvatar from '../../images/restaurantes/lapequenatabernaAvatar.png'
import puertasdemurciaAvatar from '../../images/restaurantes/puertasdemurciaAvatar.png'
import puracepaAvatar from '../../images/restaurantes/puracepaAvatar.png'
import rinconpepeAvatar from '../../images/restaurantes/rinconpepeAvatar.png'

import cosafina from '../../images/restaurantes/cosafina.png'
import elchurra from '../../images/restaurantes/elchurra.png'
import emboka from '../../images/restaurantes/emboka.webp'
import hispano from '../../images/restaurantes/hispano.png'
import pequenataberna from '../../images/restaurantes/lapequenataberna.jpg'
import puracepa from '../../images/restaurantes/puracepa.png'
import puertasdemurcia from '../../images/restaurantes/puertasdemurcia.jpg'
import rinconpepe from '../../images/restaurantes/rinconpepe.png'

const useStyles = makeStyles((theme) => ({
	margen: {
		[theme.breakpoints.up('md')]: {
			paddingLeft: theme.spacing(6),
			paddingRight: theme.spacing(6),
		},
	},
}))

const Restaurantes = () => {
	
	const classes = useStyles()
	
	const listaRestaurantes = [
		{
			avatar: {cosafinaAvatar}.cosafinaAvatar,
			nombre: 'Cosafina Gastrobar',
			telefono: '+34 615 03 58 63',
			web: 'http://www.cosafinagastrobar.com/',
			imagen: {cosafina}.cosafina,
			direccion: 'Plaza Puxmarina, 2, Planta Baja, 30004 Murcia',
			googlemap: 'https://goo.gl/maps/2d4V8z4KAXf6UbyA7',
			extendida: 'La nueva propuesta del chef Manolo Castro, Cosa Fina Gastro Bar, donde podrán encontrar una innovadora y atrevida experiencia gastronómica que hará las delicias de los más exigentes paladares. Fusión entre tradición y modernidad, los sabores de toda la vida junto a los más vanguardistas, una apuesta por sorprender y agradar, por elevar la gastronomía al nivel de la excelencia, toda una amalgama de sabores para degustar en el corazón de la bella Murcia.'
		},
		{
			avatar: {elchurraAvatar}.elchurraAvatar,
			nombre: 'Restaurante EL Churra *',
			telefono: '+34 968 27 15 22',
			web: 'https://www.elchurra.net/restaurante',
			imagen: {elchurra}.elchurra,
			direccion: 'Calle Obispo Sancho Dávila, 13, 30007 Murcia',
			googlemap: 'https://g.page/ElChurraRestaurante?share',
			extendida: 'En el Restaurante El Churra (entre fogones desde 1955) degustará platos típicos de la región de Murcia, con poductos de la tierra, carnes, pescados, marisco… donde la tradición se fusiona con los platos de actualidad y sobre todo ¡a precios asequibles!. Nos avala la certificación de Tres Tenedores.'
		},
		{
			avatar: {puracepaAvatar}.puracepaAvatar,
			nombre: 'Restaurante Pura Cepa *',
			telefono: '+34 968 21 73 97',
			web: 'https://www.puracepamurcia.com/',
			imagen: {puracepa}.puracepa,
			direccion: 'Plaza Cristo del Rescate, 8, 30001 Murciaa',
			googlemap: 'https://g.page/PuraCepaMurcia?share',
			extendida: 'Gastronomía murciana con un toque especial. Un año más tenemos el enorme placer de ser uno de los restaurantes recomendados por la Guía Michelín en la Región de Murcia.',
		},
		{
			avatar: {embokaAvatar}.embokaAvatar,
			nombre: 'Restaurante Emboka *',
			telefono: '+34 968 24 16 68',
			web: 'http://www.emboka.com/',
			imagen: {emboka}.emboka,
			direccion: 'Av. Don Juan de Borbón, 29, 30007 Murcia',
			googlemap: 'https://g.page/Emboka?share',
			extendida: 'EMBOKA nace como nuestra máxima ilusión después de nuestro primer negocio de cafetería creado hace más de 20 años. Esos años de experiencia nos han servido para dar el salto a una  gastronomía desde el cariño al cliente.'
		},
		{
			avatar: {puertasdemurciaAvatar}.puertasdemurciaAvatar,
			nombre: 'Restaurante Puerta de Murcia',
			telefono: '+34 968 27 73 05',
			web: 'https://puertademurciarestaurante.es/',
			imagen: {puertasdemurcia}.puertasdemurcia,
			direccion: 'Av. Rio Madera, 30110 Murcia',
			googlemap: 'https://g.page/puertademurcia?share',
			extendida: 'Somos tu restaurante en Murcia especializado en carnes y arroces. Muchos años de tradición familiar hacen que nuestra cocina sea típica murciana con productos de primera calidad. También disponemos de una amplia terraza.'
		},
		{
			avatar: {pequenatabernaAvatar}.pequenatabernaAvatar,
			nombre: 'La Pequeña Taberna *',
			telefono: '+34 968 21 98 40',
			web: 'https://www.lapequenataberna.com/carta/',
			imagen: {pequenataberna}.pequenataberna,
			direccion: 'Plaza San Juan, 7, 30003 Murcia',
			googlemap: 'https://g.page/LaPequenaTabernaMurcia?share',
			extendida: 'Premio mejor restaurante cocina tradicional Región de Murcia (Diciembre 2017). Carnes, pescados, mariscos y hortalizas de primera calidad se convierten en los verdaderos protagonistas de nuestro local.'
		},
		{
			avatar: {hispanoAvatar}.hispanoAvatar,
			nombre: 'Restaurante Hispano',
			telefono: '+34 968 21 61 52',
			web: 'http://www.restaurantehispano.es/',
			imagen: {hispano}.hispano,
			direccion: 'Calle Radio Murcia, 4, 30001 Murcia',
			googlemap: 'https://g.page/restaurantehispano?share',
			extendida: 'Restaurante acogedor y elegante en el centro de la ciudad de Murcia, donde disfrutar de la gastronomía tradicional murciana con toques renovados y producto de altísima calidad.'
		},
		{
			avatar: {rinconpepeAvatar}.rinconpepeAvatar,
			nombre: 'Restaurante Rincón de Pepe',
			telefono: '+34 610 99 99 99',
			web: 'https://restauranterincondepepe.com/',
			imagen: {rinconpepe}.rinconpepe,
			direccion: 'Calle Apóstoles, 34, 30001 Murcia, Spain',
			googlemap: 'https://g.page/rincondepepemu?share',
			extendida: 'Con dos espacios distintos y cartas diferentes, Restaurante del Rincón y La Barra del Rincón (para tapear), son una institución en Murcia. Los precios son altos, pero la calidad y el ambiente valen muchísimo la pena.'
		},
	]
	
	return (
		<div style={{textTransform:'none', color: 'black', height: 'auto'}}>
			<div align="center">
				<Grid container
							direction="row"
							justify="space-evenly"
							alignItems="flex-start"
							spacing={1}
				>
					<Grid item xs={1} sm={1} md={2} lg={3} xl={3} />
					<Grid item xs={12} sm={12} md={8} lg={6} xl={6} >
						<p style={{paddingTop: '10px', fontSize: '18px'}}>
							A continuación les sugerimos los siguientes Restaurantes de Murcia que personalmente recomendamos. Todos los 
							que incluyen un * tendrán un detalle si reservan con el código <i>"La Bodica"</i>.
						</p>
					</Grid>
					<Grid item xs={1} sm={1} md={2} lg={3} xl={3} />
				</Grid>
			</div>
			
			<Grid container
						direction="row"
						justify="space-evenly"
						justifyContent="center"
						alignItems="flex-start"
						spacing={1}
						className={classes.margen}
			>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12} />
				{listaRestaurantes.map((restaurante) => (
					<Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
						<RestaurantCard 
							avatar={restaurante.avatar}
							nombre={restaurante.nombre}
							imagen={restaurante.imagen}
							web={restaurante.web}
							direccion={restaurante.direccion}
							googlemap={restaurante.googlemap}
							extendida={restaurante.extendida}/>
						<div style={{height: '10px'}}/>
					</Grid>
				))}
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
					<hr/>
					<div style={{height: '200px'}} />
				</Grid>
			</Grid>
		</div>
	)
}

export default Restaurantes
