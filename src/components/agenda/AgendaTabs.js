import React from 'react';

import SwipeableViews from 'react-swipeable-views';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import SingleCard from "./SingleCard";
import Sugerencias from "../../pages/Sugerencias";
import SimpleAccordion from "../faq/SimpleAccordion";
import Hoteles from "../hoteles/Hoteles";


const styles = {
	tabs: {
		// background: '#fff',
		background: '#f1f1f1',
	},
	tabLabel: {
		textTransform: 'none',
	},
	slide: {
		padding: 15,
		// minHeight: 1000,
		color: '#fff',
		// backgroundColor: '#b1cbbb',
	},
	slide1: {
		// backgroundColor: '#FEA900',
		backgroundColor: '#dad295',
		// backgroundColor: '#b1cbbb',
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
		// backgroundColor: '#6AC0FF',
		backgroundColor: 'transparent',
	},
	slide5: {
		// backgroundColor: '#6AC0FF',
		backgroundColor: 'transparent',
	},

	root: {
		maxWidth: 304,
		margin: 'auto',
	},
	content: {
		padding: 24,
	},
};

const navigationTabs = ['#agenda', '#comollegar', '#hoteles', '#informacion', '#turismo']
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
			<div>
				<Tabs value={index} fullWidth onChange={this.handleChange} style={styles.tabs}>
					<Tab label="Agenda" style={styles.tabLabel}/>
					<Tab label="Como llegar" style={styles.tabLabel}/>
					<Tab label="Hoteles" style={styles.tabLabel}/>
					<Tab label="Informacion Extra" style={styles.tabLabel}/>
					<Tab label="Turismo" style={styles.tabLabel}/>
				</Tabs>
				<SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
					<div style={Object.assign({}, styles.slide, styles.slide1)}>
						<SingleCard />
					</div>
					<div style={Object.assign({}, styles.slide, styles.slide2)}>
						<h1>Proximamente</h1>
					</div>
					<div style={Object.assign({}, styles.slide, styles.slide3)}>
						<Hoteles/>
					</div>
					<div style={Object.assign({}, styles.slide, styles.slide4)}>
						<SimpleAccordion />
					</div>
				<div style={Object.assign({}, styles.slide, styles.slide5)}>
						<Sugerencias />
					</div>
				</SwipeableViews>
			</div>
		);
	}
}
