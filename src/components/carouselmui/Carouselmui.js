import React from 'react'

import { Grid,  } from '@material-ui/core'
import ParallaxCarousel from "./ParallaxCarousel";

const Carouselmui = () => {

	return (
		<Grid
			container
			direction="row"
			justify="space-evenly"
			alignItems="flex-start"
				spacing={0}
		>
			<Grid item xs={2} md={3} lg={3}/>
			<Grid item xs={8} md={6} lg={6}>
				<ParallaxCarousel/>
			</Grid >
			<Grid item xs={2} md={3} lg={3}/>
		</Grid>
	)
}

export default (Carouselmui)
