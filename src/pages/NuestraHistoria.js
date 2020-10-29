import React from 'react'
import Grid from "@material-ui/core/Grid";
import losLoquitos from '../images/losLoquitos.jpg'
import PropTypes from "prop-types";

const styles = (theme) =>(
	{
		grid: {
			width: '500px',
			height: '500px',
		},
	}
);
function NuestraHistoria(props) {
	const { classes } = props;
	return (
		<Grid
			className={classes.grid}
			container
			direction="row"
			justify="space-around"
			alignItems="flex-start"
		>
			<Grid item item xs={6}>
				{/*<img*/}
				{/*	src={losLoquitos}*/}
				{/*/>*/}
			</Grid>
			<Grid item item xs={6}>
			</Grid>
			<Grid item item xs={6}>
			</Grid>

		</Grid>
	)
}

NuestraHistoria.propTypes = {
	classes: PropTypes.object.isRequired,
};
export default NuestraHistoria
