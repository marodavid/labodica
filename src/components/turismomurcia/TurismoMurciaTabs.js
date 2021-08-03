import React from 'react';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import SwipeableViews from 'react-swipeable-views';

import {Box, Typography} from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Restaurantes from "../restaurantes/Restaurantes";
import TapasMurcianas from "../tapasmurcianas/TapasMurcianas";
import PiePagina from "../footer/PiePagina";
import murciapanoramica from '../../images/turismo/murciapanoramica3.png'
import Turismo from "./Turismo";


const useStyles = makeStyles((theme) => ({
	anttab: {
		flexGrow: 1,
		// backgroundColor: theme.palette.background.paper,
		boxShadow: "none",
	},
	slide: {
		padding: 15,
		color: '#fff',
		backgroundColor: 'transparent',
	},
	banner: {
		zIndex: 1	,
		color: 'white',
	},	
}))



const AntTabs = withStyles({
	root: {
		borderBottom: '1px solid #e8e8e8',
	},
	indicator: {
		backgroundColor: '#1890ff',
	},
})(Tabs);

const AntTab = withStyles((theme) => ({
	root: {
		textTransform: 'none',
		// backgroundColor: 'white',
		minWidth: 72,
		width: '100%',
		fontWeight: theme.typography.fontWeightRegular,
		marginRight: theme.spacing(4),
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		'&:hover': {
			color: '#40a9ff',
			opacity: 1,
		},
		'&$selected': {
			color: '#1890ff',
			fontWeight: theme.typography.fontWeightMedium,
		},
		'&:focus': {
			color: '#40a9ff',
		},
	},
	selected: {},
}))((props) => <Tab disableRipple {...props} />);

const TurismoMurciaTabs = () => {
	const styles = useStyles()
	const [tabIndex, setTabIndex] = React.useState(0)

	const handleChange = (event, newValue) => {
		setTabIndex(newValue);
	}

	return (
		<AppBar
			position={'static'}
			elevation={0}
			// style={{ backgroundColor: '#E6E8EB' }}
			style={{ backgroundColor: 'transparent' }}
		>
			<div align="center">
				<div align="center" style={{ width: '100%' }}>
					<Box display="flex" p={1} bgcolor="background.paper" width="100%">
					{/*<Box display="flex" p={1} width="100%" bgcolor="transparent" width="100%">*/}
						<img src={murciapanoramica} alt="Murcia"  style={{width: '100%', height: 'auto'}}/>
						<Typography variant="h3" className={styles.banner}>Descubre Murcia</Typography>
					</Box>
				</div>
				<Toolbar
				// you need to set override hidden in toolbar
				style={{ overflow: 'hidden', minHeight: 72 }}
				>
					<div className={styles.anttab}>
						<AntTabs value={tabIndex} onChange={handleChange} aria-label="ant example" variant="fullWidth" scrollButtons="on" >
							<AntTab label="Turismo" style={{boxShadow: "none"}}/>
							<AntTab label="Restaurantes" style={{boxShadow: "none"}}/>
							<AntTab label="Tapas Murcianas" style={{boxShadow: "none"}}/>
						</AntTabs>
					</div>
				</Toolbar>
			</div>
			<SwipeableViews index={tabIndex} onChangeIndex={() => setTabIndex(1)} animateHeight>
				<div className={styles.slide}>
					<Turismo/>
				</div>
				<div className={styles.slide}>
					<Restaurantes/>
				</div>
				<div className={styles.slide}>
					<TapasMurcianas/>
				</div>
			</SwipeableViews>
			<PiePagina/>
		</AppBar>
	)
}


export default TurismoMurciaTabs
