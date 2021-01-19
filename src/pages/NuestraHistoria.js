import React from 'react'
import { Grid, Avatar, Typography } from "@material-ui/core";
import styled from "styled-components"
import TimelineNuestraHistoria from "../components/TimelineNuestraHistoria";
import losLoquitos from '../images/nuestraHistoria/losLoquitos.jpg'
import fondoromantico from '../images/nuestraHistoria/fondo-romantico.jpg'

import './nuestraHistoria/main.css'
import SectionCarousel from "../components/carrousel/SectionCarousel";

const PhotoAvatar = styled(Avatar)`
	left: theme.spacing(7); 
	align: center; 
	width: auto; 
	height: auto;
	position: flex;
	opacity: 1;
`;

const Titulo = styled(Typography)`
	position: flex; 
	font-family: Dancing Script; 
	font-style: italic, bold; 
	text-transform: none;
	padding-bottom: 1em;
`;
const DivImage = styled.div`
	background: #F6F6F6;
	background-image: url(${fondoromantico});
	background-opacity: 0.4;
	background-position: right;
  background-position: 'center';
  background-size: cover;
   
  display: flex;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  zIndex: -2;
  width: 100%;
  opacity: 0.9;
  padding-top: 1em;
  flex-grow: 1;
`;
// const Parrafo = styled.p`
// 	font-size: 24px;
// `;

export default class NuestraHistoria extends React.Component {

	// constructor(props) {
	// 	super(props)
	// }

	state = {
		displayFullText: false
	};

	handleShow = () => {
		this.setState({displayFullText: true});
	};

	handleHide = () => {
		this.setState({displayFullText: false});
	};

	render() {
		return (
		<>
			<DivImage id="nuestraHistoria">
				<Grid container spacing={2}
							direction="row"
							justify="space-around"
							alignItems="flex-start"
				>
					<Grid item xs={1} />
					<Grid item xs={3}>
						<PhotoAvatar alt="Remy Sharp" src={losLoquitos} />
					</Grid>

					<Grid item xs={8}>
						<Titulo
							color="inherit"
							align="left"
							variant="h1"
							component="h2"
							marked="center"
						>
							Nuestra historia
						</Titulo>
							<p style={{fontStyle: "italic", fontSize: "24px", fontFamily: "Dancing Script", width: '60%', paddingLeft: '30px' }}>
								En medio de una pandemia, un murciano le preguntó a una panameña si se quería casar con el.
								Ella dijo Si y ahora ambos celebran sin fin.
							</p>
						<TimelineNuestraHistoria />
					</Grid>
					<Grid item xs={1}/>
				</Grid>
				</DivImage>

			{/*<Grid container spacing={2}*/}
			{/*			direction="row"*/}
			{/*			justify="space-around"*/}
			{/*			alignItems="flex-start"*/}
			{/*>*/}
			{/*<Grid item xs={3}>*/}
			{/*			<PhotoAvatar alt="Remy Sharp" src={losLoquitos} />*/}
			{/*			/!*{ this.state.displayFullText ? <PhotoAvatar alt="Remy Sharp" src={pollera} /> : null }*!/*/}
			{/*		</Grid>*/}
			{/*		<Grid item xs={8}>*/}
			{/*				<Titulo*/}
			{/*					color="inherit"*/}
			{/*					align="left"*/}
			{/*					variant="h1"*/}
			{/*					component="h2"*/}
			{/*					marked="center"*/}
			{/*				>*/}
			{/*					Nuestra historia*/}
			{/*				</Titulo>*/}
			{/*				<Parrafo>*/}
			{/*					En medio de una pandemia, un murciano le preguntó a una panameña si se quería casar con el.<br/> Ella*/}
			{/*					dijo SI y ahora ambos celebran sin fin.<br/>*/}
			{/*				</Parrafo>*/}
			{/*				{this.state.displayFullText ?*/}
			{/*					<Parrafo>*/}
			{/*						Proximamente. Un poquito de paciencia*/}
			{/*						<br />*/}
			{/*						Proximamente. Un poquito de paciencia*/}
			{/*						<br />*/}
			{/*						Proximamente. Un poquito de paciencia*/}
			{/*						<br />*/}
			{/*						Proximamente. Un poquito de paciencia*/}
			{/*						<br />*/}
			{/*						Proximamente. Un poquito de paciencia*/}
			{/*						<br />*/}
			{/*						Proximamente. Un poquito de paciencia*/}
			{/*						<br />*/}
			{/*						Proximamente. Un poquito de paciencia*/}
			{/*						<br />*/}
			{/*						Proximamente. Un poquito de paciencia*/}
			{/*						<br />*/}
			{/*						Proximamente. Un poquito de paciencia*/}
			{/*						<br />*/}
			{/*						Proximamente. Un poquito de paciencia*/}
			{/*						<br />*/}
			{/*						Proximamente. Un poquito de paciencia*/}
			{/*						<br />*/}
			{/*						Proximamente. Un poquito de paciencia*/}
			{/*						<br />*/}
			{/*						Proximamente. Un poquito de paciencia*/}
			{/*						<br />*/}
			{/*						Proximamente. Un poquito de paciencia*/}
			{/*						<br />*/}
			{/*						Proximamente. Un poquito de paciencia*/}

			{/*					</Parrafo>*/}
			{/*					: null }*/}
			{/*				{ this.state.displayFullText ?*/}
			{/*					<Button color="secondary" variant="contained" size="small" component="a" onClick={this.handleHide}>*/}
			{/*						Prefiero no saber tanto*/}
			{/*					</Button>*/}
			{/*					:*/}
			{/*					<Button color="secondary" variant="contained" size="small" component="a" onClick={this.handleShow}>*/}
			{/*						Quieres sabrer mas?*/}
			{/*					</Button>*/}
			{/*				}*/}
			{/*		</Grid>*/}
			{/*		/!*<Grid item xs={3}>*!/*/}
			{/*		/!*	<PhotoAvatar alt="Remy Sharp" src={losLoquitos} />*!/*/}
			{/*		/!*	{ this.state.displayFullText ? <PhotoAvatar variant="square" alt="Remy Sharp" src={pollera} /> : null }*!/*/}
			{/*		/!*</Grid>*!/*/}
			{/*		/!*<Grid item xs={1}/>*!/*/}

			{/*	</Grid>*/}
			{/*/!*</DivHead>*!/*/}
			{/*/!*<AnchorSpan></AnchorSpan>*!/*/}
		</>

		)
	}
}
