import React from 'react';
import Carousel from 'react-material-ui-carousel'

import { Box } from '@material-ui/core'

import foto0 from '../../images/carruselReact/foto0-Arturo.jpeg'
import foto1 from '../../images/carruselReact/foto01-parque.jpeg'
import foto2 from '../../images/carruselReact/foto02-budapest.jpeg'
import foto3 from '../../images/carruselReact/foto03-lipe.jpeg'
import foto4 from '../../images/carruselReact/foto04-buceo.jpeg'
import foto5 from '../../images/carruselReact/foto05-langkawi.jpeg'
import foto6 from '../../images/carruselReact/foto06-tirana.jpeg'
import foto7 from '../../images/carruselReact/foto07-praga.jpeg'


export default function Carrusel()
{
	var items = [ foto0, foto1, foto2, foto3, foto4, foto5, foto6, foto7 ]

	return (
		<Carousel
			autoPlay={false}
			animation={"slide"}
			swipe={true}
			fullHeightHover={false}
			timeout={700}
		>
			{
				items.map( (item, i) => <Item key={i} item={item} /> )
			}
		</Carousel>
	)
}

function Item(props)
{
	return (
		<Box px={3} pb={3} alignContent="center">
			<img src={props.item} alt="abc" style={{width: '100%', height: 'auto'}} />
		</Box>

	)
}
