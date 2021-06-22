import React from 'react'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
const styles = (theme) => ({
	root: {
		// margin: 'auto',
		overflowY: 'scroll',
		scrollbarWidth: 'thin',
		height: '1000px',
		color: 'black',
	},
	divMapa: {
		alignContent: 'center',
	},
	mapaBodica: {
		align: 'center',
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
		width: '100%',
		height: 700,
		[theme.breakpoints.down('md')]: {
			height: 550,
			paddingLeft: theme.spacing(1),
			paddingRight: theme.spacing(1),
		},
		[theme.breakpoints.down('sm')]: {
			height: 400,
			paddingLeft: theme.spacing(0),
			paddingRight: theme.spacing(0),
		},
	},
})

const MapaBodica = (props) => {
	const { classes } = props
	
	return (
		<Grid container
					direction="row"
					justify="space-evenly"
					alignItems="flex-start"
					spacing={1}
					className={classes.root}
		>
			<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
				<div align="center" >
					<iframe title="La-Bodica" className={classes.mapaBodica} src="https://maphub.net/embed/142750?panel=1&panel_closed=0"
									frameBorder="0" />
				</div>
			</Grid>
			{/*Ready for more Grid items*/}
		</Grid>
	)
}

MapaBodica.propTypes = {
	classes: PropTypes.object.isRequired
}
export default withStyles(styles)(MapaBodica)
