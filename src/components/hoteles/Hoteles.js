import React from 'react'
// import styled from "styled-components";
import { withStyles } from '@material-ui/core/styles'
import  './css/fontawesome-all.min.css'
import './css/main.css'
import './css/noscript.css'
// import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'; 

import hotelsietecoronas from '../../images/hoteles/hotel7coronas.jpg'
import nhamistadmurcia from '../../images/hoteles/NH_Amistad_Murcia.jpg'
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
			<div align="center" className="tamanoLetra">
				{/*<p style={{paddingTop: '10px'}}> Debido a los efectos de la pandemia, hemos tenido problemas con algunos de los hoteles que inicialmente les recomendábamos. <br/>*/}
				{/*	Estamos trabajando para ofrecerles una amplia oferta de hoteles donde puedan hacer sus reservas. <br/>*/}
				{/*	A más tardar a mediados de Junio, actualizaremos esta página con todas las opciones disponibles.<br/>*/}
				{/*	<i className="tamanoCita">Nadie dijo que fuera fácil organizar una boda en pandemia. (Laura y David) <InsertEmoticonIcon fontSize="small" style={{paddingTop: '6px'}}/></i>*/}
				{/*</p>*/}
				<p style={{paddingTop: '10px'}}> A continuación les sugerimos como alojamiento los siguientes hoteles con los que hemos <br/>hecho acuerdos 
					para tener mejores tarifas y condiciones flexibles de reserva.<br/><br/>
					Todos los hoteles se encuentran en el centro de Murcia y el día de la boda <br/>ofreceremos transporte de regreso a estos hoteles.<br/>
					{/*<i className="tamanoCita">Nadie dijo que fuera fácil organizar una boda en pandemia. (Laura y David) <InsertEmoticonIcon fontSize="small" style={{paddingTop: '6px'}}/></i>*/}
				</p>
			</div>
			{/*<div align="center" className="tamanoLetra">*/}
			{/*	<p style={{paddingTop: '10px'}}> La zona es en su mayoria residencial, por lo que el número de oferta de hospedaje es limitado. <br/>*/}
			{/*	Si nos quieren acompañar desde el jueves, tenemos acuerdo con el Hotel Dos Playas que se detalla abajo. <br/>*/}
			{/*	En caso de que nos vayan a acompañar solo el dia de la boda, contactar con nosotros para las posibilidades de alojamiento.</p>*/}
			{/*</div>*/}
			{/*/!*<hr/>*!/*/}
			{/*<section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="first">*/}
			{/*	<div className="content">*/}
			{/*		<h2>Hotel Dos Playas</h2>*/}
			{/*		/!*<TituloHotel>Hotel Dos Playas</TituloHotel>*!/*/}
			{/*		/!*<DireccionHotel style={{fontSize: '16px'}}>Av. D. José Alarcón Palacios, 79, 30860 Puerto de Mazarrón, Murcia, Spain</DireccionHotel>*!/*/}
			{/*		<h6 style={{fontSize: '16px'}}>Av. D. José Alarcón Palacios, 79, 30860 Puerto de Mazarrón, Murcia, Spain</h6>*/}
			
			{/*		<div className="tamanoLetra">*/}
			{/*			<p>*/}
			{/*				Les recomendamos este hotel de 4 estrellas para disfrutar los días previos a la boda. El hotel está ubicado a pocos metros de dos playas y a 10 minutos caminando del puerto deportivo del Puerto de Mazarrón.*/}
			{/*				<br/><br/>*/}
			{/*				Además, el hotel se encuentra a minutos de distancia en coche de todos los lugares de la boda*/}
			{/*				 a 15 minutos del lugar donde será la preboda el jueves 30, a 10 minutos de la Iglesia, y a 35 minutos del hotel de la celebración de la boda.*/}
			{/*				<br/><br/>*/}
			{/*				El dia de la boda estaremos ofreciendo transporte desde el hotel a la iglesia, y posteriormente a la celebración, asi como transporte de vuelta al hotel.*/}
			{/*			</p>*/}
			{/*			<span><strong>Telefono: </strong>+34-968594101</span><br/>*/}
			{/*			<span><strong>Dirección de correo electrónico:</strong> <a href="mailto:hola@dosplayashotel.com">hola@dosplayashotel.com</a></span><br/>*/}
			{/*			<span>*/}
			{/*				<strong>Reservas: </strong>*/}
			{/*				Por teléfono o enviando un email al hotel directamente indicando el tipo de habitación y los días de estancia.*/}
			{/*				Al hacer la reserva, mencionar la clave “David y Laura”.<br/>*/}
			{/*			</span>*/}
			{/*			<p>*/}
			{/*				<strong>Precio habitaciones: </strong>Segun tipo de habitacion.<br/>*/}
			{/*				<span className={classes.content}>Habitacion doble: 100 Eur/noche</span><br/>*/}
			{/*				<span className={classes.content}>Habitacion triple: 110 Eur/noche (para niño menor de 11 años)</span><br/>*/}
			{/*				<span className={classes.content}>Habitacion triple: 120 Eur/noche (para adulto con sofa-cama de 1,35m de ancho)</span><br/>*/}
			{/*			</p>*/}
			{/*			<p>*/}
			{/*				<strong>Condiciones de la reserva: </strong>*/}
			{/*				Cancelaciones y cambios.<br/>*/}
			{/*				<span className={classes.content}>Hasta el 15 de Septiembre: 100% Reembolsable</span><br/>*/}
			{/*				<span className={classes.content}>Desde el 15 al 30 de Septiembre: 50% Reembolsable</span>*/}
			{/*			</p>*/}
			{/*		</div>*/}
			{/*		<hr/>*/}
			{/*		/!*<hr className={classes.separador}/>*!/*/}
			
			
			{/*		/!*<ul className="actions stacked">*!/*/}
			{/*		/!*	<li><a href="https://dosplayashotel.com/es" className="button" rel="noopener noreferrer" target="_blank">Web del hotel</a></li>*!/*/}
			{/*		/!*</ul>*!/*/}
			{/*		<a href="https://dosplayashotel.com/es" className="button" rel="noopener noreferrer" target="_blank">Web del hotel</a>*/}
			
			
			
			{/*	</div>*/}
			{/*	<div className="image">*/}
			{/*		<img src={hoteldosplayas} alt="" />*/}
			{/*	</div>*/}
			{/*</section>*/}
			
			
			{/*/!*<section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">*!/*/}
			{/*/!*	<div className="content">*!/*/}
			{/*/!*		<h2>Hotel Executive Sport</h2>*!/*/}
			{/*/!*		<h6 style={{fontSize: '16px'}}>Calle El Grandado, 1, 30850 Totana, Murcia, Spain</h6>*!/*/}
			{/*/!*		<div className="tamanoLetra">*!/*/}
			{/*/!*			<p>*!/*/}
			{/*/!*				Les recomendamos este hotel para la noche del Sábado 2 de Octubre, ya que ahí será la celebración de la boda*!/*/}
			{/*/!*				. El hotel cuenta con fácil acceso junto a la Autovía A7 y a 30 minutos en coche de la Ermita donde se celebrará la ceremonia religiosa*!/*/}
			{/*/!*				. De igual forma, el hotel está ubicado a 30 minutos de la ciudad de Murcia.*!/*/}
			{/*/!*			</p>*!/*/}
			{/*/!*			<p>*!/*/}
			{/*/!*				El hotel cuenta con fácil acceso junto a la Autovía A7 y a 30 minutos en coche de la Ermita donde se celebrará la ceremonia religiosa*!/*/}
			{/*/!*				. De igual forma, el hotel está ubicado a 30 minutos de la ciudad de Murcia.*!/*/}
			{/*/!*			</p>*!/*/}
			{/*/!*			<span><strong>Teléfono: </strong>+34-968418209</span><br/>*!/*/}
			{/*/!*			<span><strong>Reservas: </strong>Favor de contactar con los novios por Whatsapp antes de hacer la reserva.</span><br/>*!/*/}
			{/*/!*			<span><strong>Precio habitacion doble: </strong>50-65 Eur/noche. Posibilidad de cama supletoria por 19,95 Eur extra</span><br/>*!/*/}
			{/*/!*		</div>*!/*/}
			{/*/!*		<hr/>*!/*/}
			{/*/!*		<a href="https://www.executive-sport.com/" rel="noopener noreferrer" target="_blank" className="button">Web del hotel</a>*!/*/}
			{/*/!*	</div>*!/*/}
			{/*/!*	<div className="image">*!/*/}
			{/*/!*		<img src={hotelexecutive} alt="" />*!/*/}
			{/*/!*	</div>*!/*/}
			{/*/!*</section>*!/*/}
			
			
			{/*/!*<section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">*!/*/}
			{/*/!*	<div className="content">*!/*/}
			{/*/!*		<h2>Hotel Olimpia</h2>*!/*/}
			{/*/!*		<h6 style={{fontSize: '16px'}}>Calle Balson de Guillén -Sa, 1, 30850 Totana, Murcia, Spain</h6>*!/*/}
			{/*/!*		<div className="tamanoLetra">*!/*/}
			{/*/!*			<p>*!/*/}
			{/*/!*				Les recomendamos este hotel para la noche del Sábado 2 de Octubre, ya que se encuentra a tan solo 300 metros caminando del lugar donde será la celebración de la boda.<br/>*!/*/}
			{/*/!*				De igual forma cuenta con fácil acceso junto a la Autovía A7 y a 30 minutos de la ciudad de Murcia.*!/*/}
			{/*/!*			</p>*!/*/}
			{/*/!*			<p>*!/*/}
			{/*/!*			<span><strong>Reservas: </strong>Favor de contactar con los novios por Whatsapp antes de hacer la reserva</span><br/>*!/*/}
			{/*/!*			<span><strong>Precio habitacion doble: </strong>50-55 Eur/noche.</span><br/>*!/*/}
			{/*/!*			<span><strong>Condiciones de la reserva: </strong>Cancelaciones y cambios.</span><br/>*!/*/}
			{/*/!*			<span className={classes.content}>Hasta el 24 de Septiembre : 100% Reembolsable</span><br/>*!/*/}
			{/*/!*			<span className={classes.content}>Desde el 24 de Septiembre: No Reembolsable</span><br/>*!/*/}
			{/*/!*			</p>*!/*/}
			
			{/*/!*		</div>*!/*/}
			{/*/!*		<hr/>*!/*/}
			{/*/!*		<a href="http://olimpiahoteles.com/" rel="noopener noreferrer" target="_blank" className="button">Web del hotel</a>*!/*/}
			{/*/!*	</div>*!/*/}
			{/*/!*	<div className="image">*!/*/}
			{/*/!*		<img src={hotelolimpia} alt="" />*!/*/}
			{/*/!*	</div>*!/*/}
			{/*/!*</section>*!/*/}
			
			<section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
				<div className="content">
					<h2>Hotel Siete Coronas</h2>
					<h6 style={{fontSize: '16px'}}>
						Paseo de Garay, 5, 30003 Murcia, España</h6>
					<div className="tamanoLetra">
						<p>
							Hotel de 4 estrellas situado en el centro de Murcia junto al rio y a tan solo 7 minutos andando de la Catedral y la plaza del Ayuntamiento (plaza de la Glorieta), con muchas opciones de restaurantes y ocio a 5 minutos andando.<br/>
						</p>
						<p>
							El hotel se encuentra a tan solo 450 metros (6 minutos andando) de la iglesia donde se celebrará la boda.<br/>
							Para ver los distintos tipos de habitaciones del hotel, hacer click en el boton <i>Web del Hotel</i> que se encuentra debajo. 
						</p>
						<p>
							<strong>Reservas: </strong>Los invitados pueden reservar por teléfono o vía email indicando <i>"BODA LAURA Y DAVID"</i><br/>
							<strong>Email: </strong>
							<a href="mailto:murciasietecoronas.jrec@occidentalhotels.com" rel="noopener noreferrer" target="_blank">
								murciasietecoronas.jrec@occidentalhotels.com
							</a><br/>
							<strong>Teléfono: </strong>+34 968 217 774<br/><br/>
							
							<strong>Tarifas Jueves 30-09 Y Viernes 1-10 del 2021:</strong><br/>
							<span className={classes.content}>Habitacion Doble Superior: 65 Eur/noche</span><br/>
							<span className={classes.content}>Habitacion Triple: 91 Eur/noche</span><br/>
							<span className={classes.content}>Habitacion Deluxe: 81.25 Eur/noche</span><br/><br/>
							
							<strong>Tarifas Sábado 2-10 del 2021:</strong>Todas las reservas con late Check-out hasta las 14h<br/>
							<span className={classes.content}>Habitacion Doble Superior: 57 Eur/noche</span><br/>
							<span className={classes.content}>Habitacion Triple: 79.80 Eur/noche</span><br/>
							<span className={classes.content}>Habitacion Deluxe: 71.25 Eur/noche</span><br/><br/>

							<strong>Condiciones especiales: </strong><br/>
							<span className={classes.content}>Late check out domingo a las 14:00 sin cargo</span><br/>
							<span className={classes.content}>Precio especial del desayuno contratándolo con antelación 10€ por persona y día</span><br/>
							<span className={classes.content}>Cancelación sin gastos hasta 24 horas antes de la llegada</span><br/>
							<span className={classes.content}>No show 1 noche de gastos</span><br/><br/>
							<strong>Oferta válida para reservas hasta el 5 de Julio </strong><br/>
						</p>
			
					</div>
					<hr/>
					<a href="https://www.barcelo.com/es-es/occidental-murcia-siete-coronas/" rel="noopener noreferrer" target="_blank" className="button">Web del hotel</a>
				</div>
				<div className="image">
					<img src={hotelsietecoronas} alt="" />
				</div>
			</section>
			
			<section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
				<div className="content">
					<h2>Hotel Melia Tryp Rincón de Pepe</h2>
					<h6 style={{fontSize: '16px'}}>Calle Apóstoles, 34, 30001 Murcia, España</h6>
					<div className="tamanoLetra">
						<p>
							Hotel de 4 estrellas situado en el centro de Murcia a escasos 150 metros de la catedral y rodeado de una gran variedad de opciones de restaurantes y ocio.<br/>
							Como curiosidad, el hotel cuenta con uno de los mejores restaurantes de Murcia justo en el lateral del hotel.
						</p>
						<p>
							El hotel se encuentra a escasos 3 minutos andando de la iglesia donde se celebrará la boda.
						</p>
						<p>
							<strong>Reservas: </strong>Los invitados pueden reservar por teléfono o vía email indicando el código <i>"LAURA WONG Y DAVID BARBA"</i><br/>
							<strong>Email: </strong>
							<a href="mailto:reservas@hotelrincondepepe.com" rel="noopener noreferrer" target="_blank">
								reservas@hotelrincondepepe.com
							</a><br/>
							<strong>Teléfono: </strong>+34 968 212 239<br/><br/>

							<strong>Tarifas Jueves 30-09, Viernes 31-09 y Sábado 2-10 del 2021:</strong><br/>
							<span className={classes.content}>Habitacion Doble: 62 Eur/noche</span><br/><br/>
							<strong>Condiciones especiales: </strong><br/>
							<span className={classes.content}>Late check out domingo a las 14:00 sin cargo</span><br/>
							<span className={classes.content}>Desayuno: 9€ por persona y día (opcional)</span><br/>
							<span className={classes.content}>Cancelación sin gastos hasta 24 horas antes de la llegada</span><br/><br/>
							<strong>Oferta válida para reservas hasta el 3 de Septiembre </strong><br/>
						</p>
					</div>
					<hr/>
					<a href="https://www.melia.com/es/hoteles/espana/murcia/tryp-murcia-rincon-de-pepe/index.htm" rel="noopener noreferrer" target="_blank" className="button">Web del hotel</a>
				</div>
				<div className="image">
					<img src={rincondepepe} alt=""/>
				</div>
				
			</section>
			<section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
				<div className="content">
					<h2>Hotel NH Amistad</h2>
					<h6 style={{fontSize: '16px'}}>Calle Condestable, 1, 30009 Murcia, España</h6>
					<div className="tamanoLetra">
						<p>
							Hotel de 4 estrellas situado en el centro de Murcia justo a la espalda de El Corte Inglés y rodeado de una gran variedad de opciones de shopping, restaurantes y ocio.<br/>
						</p> 
						<p>
							El hotel se encuentra a 1,3 kms (15 minutos caminando) de la Iglesia donde se celebrará la boda.
						</p>
						<p>
							<strong>Reservas: </strong>En el siguiente enlace personalizado del hotel. <a href="https://www.nh-hoteles.es/event/enlace-laura-y-david">Click aqui</a><br/><br/>
							<strong>Tarifas Jueves 30-09, Viernes 31-09 y Sábado 2-10 del 2021:</strong><br/>
							<span className={classes.content}>Habitacion Doble: 58 Eur/noche</span><br/><br/>

							<strong>Condiciones especiales: </strong><br/>
							<span className={classes.content}>Late check out domingo a las 16:00 sin cargo</span><br/>
							<span className={classes.content}>Desayuno buffet: 13€ por persona y día</span><br/>
							<span className={classes.content}>Cama supletoria menores 12 años: sin cargo</span><br/>
							<span className={classes.content}>Cuna: sin cargo</span><br/>
							<span className={classes.content}>Cancelación sin gastos hasta 24 horas antes de la llegada</span><br/><br/>
							<strong>Oferta válida para reservas hasta el 10 de Septiembre </strong><br/>
						</p>
					</div>
					<hr/>
					<a href="https://www.nh-hoteles.es/hotel/nh-amistad-murcia/habitaciones" rel="noopener noreferrer" target="_blank" className="button">Web del hotel</a>
				</div>
				<div className="image">
					<img src={nhamistadmurcia} alt=""/>
				</div>
			</section>
		</div>
	)
}

export default withStyles(styles)(Hoteles)
