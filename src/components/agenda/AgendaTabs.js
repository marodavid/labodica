import React from 'react';

import SwipeableViews from 'react-swipeable-views';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import Agenda from "./Agenda";
// import Sugerencias from "../../pages/Sugerencias";
import Hoteles from "../hoteles/Hoteles";
import Comollegar from "../comollegar/Comollegar";
import GeneralMenu from "../generalmenu/GeneralMenu";
import PiePagina from "../footer/PiePagina";
import Informacionutil from "../informacionutil/Informacionutil";
// import MapaBodica from "../mapabodica/MapaBodica";
import SalonesBelleza from '../salonesbelleza/SalonesBelleza'


const styles = {
	tabs: {
		background: '#f1f1f1',
	},
	tabLabel: {
		textTransform: 'none',
		height: 'auto',
		boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / 20%)',
		letterSpacing: '0.125em',
	},
	slide: {
		padding: 15,
		color: '#fff',
		// backgroundColor: '#b1cbbb',
	},
	slide1: {
		minHeight: '900px',
		// backgroundColor: '#FEA900',
		backgroundColor: '#dad295',
		// height: 'auto',
		// alignSelf: 'stretch'

	},
	slide2: {
		// backgroundColor: '#B3DC4A',
		backgroundColor: 'transparent',
		color: 'black',
	},
	slide3: {
		// backgroundColor: '#6AC0FF',
		backgroundColor: 'transparent',
	},
	slide4: {
		backgroundColor: 'transparent',
	},
	slide5: {
		backgroundColor: 'transparent',
	},
	mapaBodica: {
		width: 900,
		height: 675,
	},
	root: {
		// maxWidth: 304,
		// margin: 'auto',
	},
	content: {
		// padding: 24,
	},
};

// const navigationTabs = ['#agenda', '#comollegar', '#hoteles', '#belleza', '#restaurantes', '#tapas', '#informacion' ]
const navigationTabs = ['#agenda', '#comollegar', '#hoteles', '#belleza', '#informacion' ]
export default class AgendaTabs extends React.Component {

	constructor(props) {
		super(props)

		const { location: { hash } } = window

		this.state = {
			index: navigationTabs.includes(hash) ? navigationTabs.indexOf(hash) : 0,
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleChangeIndex = this.handleChangeIndex.bind(this)
	}

 componentDidMount() {
	 const { index } = this.state
	 const { location: { hash } } = window

	 this.setState({
		 index: navigationTabs.includes(hash) ? navigationTabs.indexOf(hash) : 0,
	 })
	 window.location.hash = navigationTabs[index]
 }

	handleChange = (event, value) => {
		this.setState({
			index: value,
		});
		window.location.hash = navigationTabs[value]
	};

	handleChangeIndex = index => {
		this.setState({
			index,
		});
	};

	render() {
		const { index } = this.state

		return (
			<div
				// style={{flex: '1'}}
			>
			<GeneralMenu/>
				<Tabs
					value={index}
					variant="scrollable"
					scrollButtons="on"
					// tabItemContainerStyle={{maxHeight: 'auto'}}
					// fullWidth
					onChange={this.handleChange}
					style={styles.tabs}>
					<Tab label="Agenda" style={styles.tabLabel}/>
					<Tab label="Cómo llegar" style={styles.tabLabel}/>
					<Tab label="Hoteles" style={styles.tabLabel}/>
					<Tab label="Salones de Belleza" style={styles.tabLabel}/>
					<Tab label="Información Q&A" style={styles.tabLabel}/>
				</Tabs>
				<SwipeableViews index={index} onChangeIndex={this.handleChangeIndex} animateHeight>
					<div style={Object.assign({}, styles.slide, styles.slide1)}>
						<Agenda />
					</div>
					<div style={Object.assign({}, styles.slide, styles.slide2)}>
						<Comollegar/>
					</div>
					<div style={Object.assign({}, styles.slide, styles.slide3)}>
						<Hoteles/>
					</div>
					<div style={Object.assign({}, styles.slide, styles.slide5)}>
						<SalonesBelleza/>
					</div>
					<div style={Object.assign({}, styles.slide, styles.slide4)}>
						<Informacionutil/>
					</div>
				</SwipeableViews>
				<PiePagina/>
			</div>
		);
	}
}
