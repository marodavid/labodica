import React from 'react'
import {Grid, Typography} from "@material-ui/core";


const SalonesBelleza = () => {

	const peluquerias = [
		{
			nombre: 'Massimo Virgolini',
			telefono: '+34-968248733  //  +34-610077306',
			web: 'https://massimovirgolini.com/',
			detalles: 'Al pedir cita nombrar el código "BODA LAURA Y DAVID"',
			direccion: 'CENTRO COMERCIAL CentroFama, C/ Puerta Nueva, 29, 30008 Murcia',
			googlemap: 'https://g.page/massimovirgolini?share'
		},
		{
			nombre: 'Salonissimo',
			telefono: '+34-968715077',
			web: 'http://salonissimo.es/',
			detalles: 'Al pedir cita nombrar el código "BODA LAURA Y DAVID"',
			direccion: 'C/ Puerta Nueva, 3, 30001 Murcia',
			googlemap: 'https://goo.gl/maps/TGi8t4Mm4v1vxBSy5'
		},
		{
			nombre: 'Alegría Peluqueros',
			telefono: '+34-968210241',
			web: 'https://www.alegriapeluqueros.com/',
			detalles: 'Al pedir cita nombrar el código "BODA LAURA Y DAVID"',
			direccion: 'Gran Vía del Escultor Francisco Salzillo, 1, 30004 Murcia.',
			googlemap: 'https://g.page/alegriapelu?share'
		},
		{
			nombre: 'Alegría Peluqueros (2da direccion)',
			telefono: '+34-968218895',
			web: 'https://www.alegriapeluqueros.com/',
			detalles: 'Al pedir cita nombrar el código "BODA LAURA Y DAVID"',
			direccion: 'C/ Puerta Nueva, 3, 30001 Murcia',
			googlemap: 'https://goo.gl/maps/TGi8t4Mm4v1vxBSy5'
		},
		{
			nombre: 'Arturo Molina Estilistas',
			telefono: '+34-968294629',
			web: 'http://arturomolina.es/',
			detalles: 'Al pedir cita nombrar el código "BODA LAURA Y DAVID"',
			direccion: 'Calle Actor Francisco Rabal, 2, 30009 Murcia (Justo detrás del hotel NH Amistad)',
			googlemap: 'https://www.google.com/maps/place/Arturo+Molina+stylists,+Calle+Actor+Francisco+Rabal,+2,+30009+Murcia,+Spain/@37.9901121,-1.1376426,17z/data=!4m2!3m1!1s0xd6381f5ce27a1ab:0x79da469596343b09'
		},

	]
	
	return (
		<div style={{textTransform:'none', color: 'black'}}>
			<div align="center">
				<Grid container
							direction="row"
							justify="space-evenly"
							alignItems="flex-start"
							spacing={1}>
					<Grid item xs={1} sm={1} md={2} lg={3} xl={3} />
					<Grid item xs={12} sm={12} md={8} lg={6} xl={6} >
						<p style={{paddingTop: '10px', fontSize: '18px'}}>
							A continuación les sugerimos los siguientes Salones de Belleza con los que hemos 
							hablado previamente y estarán felices de atenderlos.
						</p>
						<span style={{fontSize: '16px'}}>	<strong>Importante: </strong>Si además de peinado, deseas también servicio de maquillaje, recuerda mencionarlo al hacer tu cita con los salones de belleza.</span>
					</Grid>
					<Grid item xs={1} sm={1} md={2} lg={3} xl={3} />
				</Grid>
			</div>
			
			<hr/>
			<Grid container
						direction="row"
						justify="space-evenly"
						alignItems="flex-start"
						spacing={1}>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12} />
				{peluquerias.map((peluqueria) => (
					<>
					<Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
					<Grid item xs={10} sm={10} md={4} lg={4} xl={4}>
						<Typography variant="h5">{peluqueria.nombre}</Typography>
						<p>
							<span><strong>Teléfono: </strong>{peluqueria.telefono}</span><br/>
							<span><strong>Web: </strong>
									<a href={peluqueria.web}
										 target='_blank'
										 rel="noopener noreferrer">{
										peluqueria.web}
									</a>
								</span><br/>
							<span><strong>Google Map: </strong>
									<a href={peluqueria.googlemap}
										 target='_blank'
										 rel="noopener noreferrer">
										Ver en Google Maps</a>
								</span><br/>
							<span><strong>Dirección: </strong>{peluqueria.direccion}</span><br/>
							<span><strong>Detalles: </strong>{peluqueria.detalles}</span>
						</p>
					</Grid>
					<Grid item xs={1} sm={1} md={1} lg={1} xl={1}/>
					</>
				))}
			</Grid>
		</div>
	)
}

export default SalonesBelleza
