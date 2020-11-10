import React from 'react'
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import losLoquitos from '../images/losLoquitos.jpg'
// import anillos from '../images/weddingRings.png'
import dusseldorf from '../images/dusseldorf.jpeg'
import './nuestraHistoria/main.css'
import Button from "../modules/components/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import makeStyles from '@material-ui/core/styles/makeStyles';
// import Paper from "@material-ui/core/Paper";
import styled from "styled-components"



const PhotoAvatar = styled(Avatar)`
	left: theme.spacing(7); 
	align: center; 
	width: auto; 
	height: auto;
	position: flex;
	opacity: 1;
	// filter: blur(3px);	
	
`;

const Titulo = styled(Typography)`
	position: flex; 
	font-family: Dancing Script; 
	font-style: italic, bold; 
	text-transform: none;
	padding-bottom: 1em;
	color: white;
`;
const DivImage = styled.div`
	background-image: url(${dusseldorf});
  background-position: 'center';
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px; 
  display: flex;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  zIndex: -2;
  width: 100%;
  // filter: blur(3px);
  opacity: 0.8;
`;
const DivHead = styled.div`
	flex-grow: 1; 
	padding-top: 16em;
	padding-bottom: 1em;
`;

const Parrafo = styled.p`
	font-size: 24px;
	// color: white;
`;
// const StoryFirstPart = styled.div``;

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

	#useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(2),
			textAlign: 'center',
			justify: 'flex-start',
			color: theme.palette.text.primary,
		},
	}));

	render() {

		return (

			<DivHead>
				<DivImage>
					{/*<img*/}
					{/*	style={{ display: 'none'}}*/}
					{/*	src={dusseldorf}*/}
					{/*	alt="increase priority"*/}
					{/*/> */}

				<Grid container spacing={2}
							direction="row"
							justify="space-around"
							alignItems="flex-start"
				>
					<Grid item xs={1}/>
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
							<Parrafo>
								En medio de una pandemia, un murciano le preguntó a una panameña si se quería casar con el. Ella
								dijo SI y ahora ambos celebran sin fin.
							</Parrafo>

							{this.state.displayFullText ?
								<Parrafo>
									A ver bandido, que quieres saber tu, que?
									A ver bandido, que quieres saber tu, que?
									A ver bandido, que quieres saber tu, que?
									A ver bandido, que quieres saber tu, que?
									A ver bandido, que quieres saber tu, que?
									A ver bandido, que quieres saber tu, que?
								</Parrafo>
								: null }


							{ this.state.displayFullText ?
								<Button color="secondary" variant="contained" size="small" component="a" onClick={this.handleHide}>
									Prefiero no saber tanto
								</Button>
								:
								<Button color="secondary" variant="contained" size="small" component="a" onClick={this.handleShow}>
									Quieres sabrer mas?
								</Button>
							}
					{/*		*/}
					</Grid>
				</Grid>
				</DivImage>
			</DivHead>


		)
	}
}

NuestraHistoria.propTypes = {
	classes: PropTypes.object.isRequired,
}

NuestraHistoria.defaultProps = {
	classes: undefined,
}
