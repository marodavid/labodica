import React from 'react'
// import styled from "styled-components";
import { withStyles } from '@material-ui/core/styles';

import  './css/fontawesome-all.min.css'
import './css/main.css'
import './css/noscript.css'

import hoteldosplayas from '../../images/hoteles/hotel-dos-playas.jpg'
import hotelexecutive from '../../images/hoteles/hotel-executive-sport.jpg'
import hotelolimpia from '../../images/hoteles/hotel-olimpia.jpg'
import rincondepepe from '../../images/hoteles/rincon-de-pepe.jpeg'

const styles = (theme) => ({
	content: {
		paddingLeft: theme.spacing(4),
		fontSize: 'inherit',
		[theme.breakpoints.between('xs', 'sm')]: {
			paddingLeft: theme.spacing(0),
		},
	},
	// separador: {
	// 	border: '0',
	// 	borderBottom: 'solid 1px',
	// 	margin: '2.5rem 0',
	// }
})

// const TituloHotel = styled.h2`
// 	font-size: 2.25rem;
// `

// const separadorHR = styled.hr`
// 	border: 0;
// 	border-bottom: solid 1px;
// 	margin: 2.5rem 0;
// `

const Hoteles = (props) => {
	const { classes } = props;

	return (
		<div id="wrapper" className="divided" style={{textTransform:'none', color: 'black', overflowY: 'scroll', scrollbarWidth: 'thin'}}>

			<section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="first">
				<div className="content">
					<h2>Hotel Dos Playas</h2>
					{/*<TituloHotel>Hotel Dos Playas</TituloHotel>*/}
					{/*<DireccionHotel style={{fontSize: '16px'}}>Av. D. José Alarcón Palacios, 79, 30860 Puerto de Mazarrón, Murcia, Spain</DireccionHotel>*/}
					<h6 style={{fontSize: '16px'}}>Av. D. José Alarcón Palacios, 79, 30860 Puerto de Mazarrón, Murcia, Spain</h6>

					<div className="tamanoLetra">
						<p>
							Les recomendamos este hotel de 4 estrellas para disfrutar los días previos a la boda
							. El hotel está ubicado a pocos metros de dos playas y a 10 minutos caminando del puerto deportivo del Puerto de Mazarrón.
							<br/><br/>
							Además, el hotel se encuentra a minutos de distancia en coche de todos los lugares de la boda
							: a 15 minutos del lugar donde será la preboda el jueves 30, a 10 minutos de la Iglesia, y a 35 minutos del hotel de la celebración de la boda.
						</p>
						<span><strong>Telefono: </strong>+34-968594101</span><br/>
						<span><strong>Dirección de correo electrónico:</strong> <a href="mailto:hola@dosplayashotel.com">hola@dosplayashotel.com</a></span><br/>
						<span>
							<strong>Reservas: </strong>
							Por teléfono o enviando un email al hotel directamente indicando el tipo de habitación y los días de estancia
							. Al hacer la reserva, mencionar la clave “David y Laura”.<br/>
						</span>
						<p>
							<strong>Precio habitaciones: </strong>Segun tipo de habitacion.<br/>
							<span className={classes.content}>Habitacion doble: 100 Eur/noche</span><br/>
							<span className={classes.content}>Habitacion triple: 110 Eur/noche (para niño menor de 11 años)</span><br/>
							<span className={classes.content}>Habitacion triple: 120 Eur/noche (para adulto con sofa-cama de 1,35m de ancho)</span><br/>
						</p>
						<p>
							<strong>Condiciones de la reserva: </strong>
							Cancelaciones y cambios.<br/>
							<span className={classes.content}>Hasta el 15 de Septiembre : 100% Reembolsable</span><br/>
							<span className={classes.content}>Desde el 15 al 30 de Septiembre: 50% Reembolsable</span>
						</p>
					</div>
					<hr/>
					{/*<hr className={classes.separador}/>*/}


					{/*<ul className="actions stacked">*/}
					{/*	<li><a href="https://dosplayashotel.com/es" className="button" rel="noopener noreferrer" target="_blank">Web del hotel</a></li>*/}
					{/*</ul>*/}
					<a href="https://dosplayashotel.com/es" className="button" rel="noopener noreferrer" target="_blank">Web del hotel</a>



				</div>
				<div className="image">
					<img src={hoteldosplayas} alt="" />
				</div>
			</section>


			<section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
				<div className="content">
					<h2>Hotel Executive Sport</h2>
					<h6 style={{fontSize: '16px'}}>Calle El Grandado, 1, 30850 Totana, Murcia, Spain</h6>
					<div className="tamanoLetra">
						<p>
							Les recomendamos este hotel para la noche del Sábado 2 de Octubre, ya que ahí será la celebración de la boda
							. El hotel cuenta con fácil acceso junto a la Autovía A7 y a 30 minutos en coche de la Ermita donde se celebrará la ceremonia religiosa
							. De igual forma, el hotel está ubicado a 30 minutos de la ciudad de Murcia.
						</p>
						<p>
							El hotel cuenta con fácil acceso junto a la Autovía A7 y a 30 minutos en coche de la Ermita donde se celebrará la ceremonia religiosa
							. De igual forma, el hotel está ubicado a 30 minutos de la ciudad de Murcia.
						</p>
						<span><strong>Teléfono: </strong>+34-968418209</span><br/>
						<span><strong>Reservas: </strong>Favor de contactar con los novios por Whatsapp antes de hacer la reserva.</span><br/>
						<span><strong>Precio habitacion doble: </strong>50-65 Eur/noche. Posibilidad de cama supletoria por 19,95 Eur extra</span><br/>
					</div>
					<hr/>
					<a href="https://www.executive-sport.com/" rel="noopener noreferrer" target="_blank" className="button">Web del hotel</a>
				</div>
				<div className="image">
					<img src={hotelexecutive} alt="" />
				</div>
			</section>


			<section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
				<div className="content">
					<h2>Hotel Olimpia</h2>
					<h6 style={{fontSize: '16px'}}>Calle Balson de Guillén -Sa, 1, 30850 Totana, Murcia, Spain</h6>
					<div className="tamanoLetra">
						<p>
							Les recomendamos este hotel para la noche del Sábado 2 de Octubre, ya que se encuentra a tan solo 300 metros caminando del lugar donde será la celebración de la boda.<br/>
							De igual forma cuenta con fácil acceso junto a la Autovía A7 y a 30 minutos de la ciudad de Murcia.
						</p>
						<p>
						<span><strong>Reservas: </strong>Favor de contactar con los novios por Whatsapp antes de hacer la reserva</span><br/>
						<span><strong>Precio habitacion doble: </strong>50-55 Eur/noche.</span><br/>
						<span><strong>Condiciones de la reserva: </strong>Cancelaciones y cambios.</span><br/>
						<span className={classes.content}>Hasta el 24 de Septiembre : 100% Reembolsable</span><br/>
						<span className={classes.content}>Desde el 24 de Septiembre: No Reembolsable</span><br/>
						</p>

					</div>
					<hr/>
					<a href="http://olimpiahoteles.com/" rel="noopener noreferrer" target="_blank" className="button">Web del hotel</a>
				</div>
				<div className="image">
					<img src={hotelolimpia} alt="" />
				</div>
			</section>

			<section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
				<div className="content">
					<h2>Hotel Melia Tryp Rincon de Pepe</h2>
					<h6 style={{fontSize: '16px'}}>Calle Apóstoles, 34, 30001 Murcia, Spain</h6>
					<div className="tamanoLetra">
						<p>
							Hotel de 4 estrellas situado en el centro de Murcia a escasos 150 metros de la catedral y rodeado de una gran variedad de opciones de restaurantes y ocio.<br/>
							Recomendamos este hotel para quienes tengan planeado explorar la región de Murcia los días anteriores a la boda.<br/>
						</p>
						<p>
							El hotel se encuentra a 30 minutos en coche del hotel donde se celebrará el banquete de la boda y
							a 50 minutos en coche de la Ermita donde tendrá lugar la ceremonia religiosa.
						</p>
						<p>
							<strong>Reservas: </strong>Reservar directamente con la web del hotel o
							en <a href="https://www.booking.com/" rel="noopener noreferrer" target="_blank">Booking.com</a><br/>
						<span><strong>Precio habitacion doble: </strong>desde 60 Eur/noche</span><br/>
						<span><strong>Condiciones de la reserva: </strong>Cancelaciones y cambios preguntar directamente en el hotel o booking.com<br/></span>
						</p>
					</div>
					<hr/>
					<a href="https://www.melia.com/es/hoteles/espana/murcia/tryp-murcia-rincon-de-pepe/index.htm" rel="noopener noreferrer" target="_blank" className="button">Web del hotel</a>
				</div>
				<div className="image">
					<img src={rincondepepe} alt=""/>
				</div>
			</section>
		</div>
	)
}

export default withStyles(styles)(Hoteles)
