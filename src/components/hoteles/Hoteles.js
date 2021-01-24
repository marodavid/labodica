import React from 'react'

import  './css/fontawesome-all.min.css'
import './css/main.css'
import './css/noscript.css'

import hoteldosplayas from '../../images/hoteles/hotel-dos-playas.jpg'
import hotelexecutive from '../../images/hoteles/hotel-executive-sport.jpg'
import hotelolimpia from '../../images/hoteles/hotel-olimpia.jpg'
import rincondepepe from '../../images/hoteles/rincon-de-pepe.jpeg'

const Hoteles = () => {


	return (
		<div id="wrapper" className="divided" style={{textTransform:'none', color: 'black', overflowY: 'scroll', scrollbarWidth: 'thin'}}>

			<section class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="first">
				<div class="content">
					<h2>Hotel Dos Playas</h2>
					<h6 style={{fontSize: '16px'}}>Av. D. José Alarcón Palacios, 79, 30860 Puerto de Mazarrón, Murcia, Spain</h6>

					<div className="tamanoLetra">
						<p>Les recomendamos este hotel de 4 estrellas para disfrutar los dias previos a la boda.
							El hotel esta ubicado a pocos metros de dos playas y a 10 minutos andando del Puerto deportivo del Puerto de Mazarron.
							En caso de seleccionar este hotel para la noche de la boda, estaremos proporcionando transporte desde el lugar de la celebracion.
							<br/><br/>
							El hotel se encuentra a 10 minutos en coche de donde se celebrara la ceremonia religiosa, a 15 minutos en coche del lugar donde
							festejaremos la preboda el jueves y a 35 minutos en coche del hotel de celebracion de la boda.
						</p>
						<span><strong>Telefono: </strong>+34968594101</span><br/>
						<span>
							<strong>Reservas: </strong>
							Por telefono o enviando un email al hotel <a href="mailto:hola@dosplayashotel.com" rel="noopener noreferrer" target="_blank">hola@dosplayashotel.com</a> indicando
							el tipo de habitacion y los dias de estancia. Para pagar los precios especiales listados abajo, indicad la reserva de David y Laura.
						</span><br/>
						<span>
							<strong>Precio habitaciones: </strong>Segun tipo de habitacion.<br/>
							<ul>
								<li  style={{textTransform:'none', color: 'black'}}>Habitacion doble: 100 Eur/noche</li><br/>
								<li  style={{textTransform:'none', color: 'black'}}>Habitacion triple: 110 Eur/noche (para niño menor de 11 años)</li><br/>
								<li  style={{textTransform:'none', color: 'black'}}>Habitacion triple: 120 Eur/noche (para adulto con sofa-cama de 1,35m de ancho)</li>
							</ul>
						</span>

						<span>
							<strong>Condiciones de la reserva: </strong>
							Cancelaciones y cambios.<br/>
							<ul>
								<li  style={{textTransform:'none', color: 'black'}}>Hasta el 15 de Septiembre : 100% Reembolsable</li><br/>
								<li  style={{textTransform:'none', color: 'black'}}>Desde el 15 al 30 de Septiembre: 50% Reembolsable</li><br/>
							</ul>
						</span>
					</div>
					<hr/>

					{/*<p>*/}
					{/*	This is a <strong>Spotlight</strong> element, and it's generally used &ndash; as its name implies &ndash; to spotlight a particular feature, subject, or pretty much whatever. You can customize its <span class="demo-controls">appearance with a number of modifiers</span>, as well as assign it an optional <code>onload</code> or <code>onscroll</code> transition modifier (<a href="#reference-spotlight">details</a>).*/}
					{/*</ulp>*/}
					<ul class="actions stacked">
						<li><a href="https://dosplayashotel.com/es" class="button" rel="noopener noreferrer" target="_blank">Web del hotel</a></li>
					</ul>

				</div>
				<div class="image">
					<img src={hoteldosplayas} alt="" />
				</div>
			</section>


			<section class="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
				<div class="content">
					<h2>Hotel Executive Sport</h2>
					<h6 style={{fontSize: '16px'}}>Calle El Grandado, 1, 30850 Totana, Murcia, Spain</h6>
					<div className="tamanoLetra">
					<p>
						Les recomendamos este hotel para la noche del Sabado 2 de Octubre, ya que ahi sera la celebracion de la boda. Es tambien una opcion para los dias previos en caso de que cuenten con su propio coche.
					</p>
					<p>
						El hotel se encuentra junto a la Autovia A7 con facil acceso y a 30 minutos en coche de de la ermita donde se celebrara la ceremonia religiosa y de la ciudad de Murcia
					</p>
					<span><strong>Reservas: </strong>Contactar con los novios por Whatsapp</span><br/>
					<span><strong>Precio habitacion: </strong>50-65 Eur/noche. Posibilidad de cama supletoria por 19,95 Eur extra</span><br/>
					</div>

					<hr/>
					<ul class="actions stacked">
						<li><a href="https://www.executive-sport.com/" rel="noopener noreferrer" target="_blank" class="button">Web del hotel</a></li>
					</ul>
				</div>
				<div class="image">
					<img src={hotelexecutive} alt="" />
				</div>
			</section>


			<section class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
				<div class="content">
					<h2>Hotel Olimpia</h2>
					<h6 style={{fontSize: '16px'}}>Calle Balson de Guillén -Sa, 1, 30850 Totana, Murcia, Spain</h6>
					<div className="tamanoLetra">
						<p>
							Les recomendamos este hotel para la noche del Sabado 2 de Octubre, ya que se encuentra a tan solo 300 metros caminando del lugar donde sera la celebracion de la boda.
							Se trata de un sencillo hotel de 2 estrellas pero con habitaciones muy amplias y comodas y, sobre todo, muy limpias.
						</p>
						<span><strong>Reservas: </strong>Contactar con los novios por Whatsapp</span><br/>
						<span><strong>Precio habitacion: </strong>50-55 Eur/noche.</span><br/>
					</div>
					<hr/>
					<ul class="actions stacked">
						<li><a href="http://olimpiahoteles.com/" rel="noopener noreferrer" target="_blank" class="button">Web del hotel</a></li>
					</ul>
				</div>
				<div class="image">
					<img src={hotelolimpia} alt="" />
				</div>
			</section>

			<section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
				<div className="content">
					<h2>Hotel Melia Tryp Rincon de Pepe</h2>
					<h6 style={{fontSize: '16px'}}>Calle Apóstoles, 34, 30001 Murcia, Spain</h6>
					<div className="tamanoLetra">
						<p>
							Hotel de 4 estrellas situado en pleno centro de Murcia a escasos 150 metros de la catedral y rodeado de gran variedad de opciones de restauracion y ocio.
							Recomendamos este hotel para quienes tengan planeado explorar la region de Murcia los dias anteriores a la boda.
						</p>
						<p>
							El hotel se encuentra a 30 minutos en coche del hotel donde se celebrara el banquete de la boda y a 50 minutos en coche de
							la ermita donde tendra lugar la ceremonia religiosa.
						</p>
						<span><strong>Reservas: </strong>No tenemos acuerdos con este hotel. Reservar directamente con la web del hotel o
							en <a href="https://www.booking.com/" rel="noopener noreferrer" target="_blank">Booking.com</a></span><br/>
						<span><strong>Precio habitacion: </strong>65 Eur/noche (precio orientativo, confirmar a la hora de reservar)</span><br/>
					</div>
					<hr/>
					<ul className="actions stacked">
						<li><a href="https://www.melia.com/es/hoteles/espana/murcia/tryp-murcia-rincon-de-pepe/index.htm" rel="noopener noreferrer" target="_blank" className="button">Web del hotel</a></li>
					</ul>
				</div>
				<div className="image">
					<img src={rincondepepe} alt=""/>
				</div>
			</section>
		</div>
	)
}

export default Hoteles
