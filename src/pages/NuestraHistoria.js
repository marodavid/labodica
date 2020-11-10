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
	// filter: blur(3px);	
	
`;

const Titulo = styled(Typography)`
	position: flex; 
	font-family: Dancing Script; 
	font-style: italic; 
	text-transform: none;
`;
const DivImage = styled.div`
	background-image: url(${dusseldorf});
  background-position: 'center';
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%; 
`;
const DivHead = styled.div`
	flex-grow: 1; 
	padding-top: 14em;
	padding-bottom: 1em;
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



// ,color: tomato; border-color: tomato;`;
	render() {

		// const classes = this.#useStyles


		return (
			<>
				{/*<div style={{maxWidth: '100%', height: '13em'}} />*/}
				<DivImage/>
				<DivHead>
					{/*<Titulo*/}
					{/*	color="inherit"*/}
					{/*	align="center"*/}
					{/*	variant="h1"*/}
					{/*	component="h2"*/}
					{/*	marked="center"*/}
					{/*	// style={{position: 'flex', fontFamily: 'Dancing Script', fontStyle: 'italic', textTransform: 'none'}}*/}
					{/*	// className={classes.typography}*/}
					{/*>*/}
					{/*	Nuestra historia*/}
					{/*</Titulo>*/}

					{/*<img*/}
					{/*	// style={{ display: 'none'}}*/}
					{/*	style={{ width: '100%', filter: 'blur(4px)', opacity: 0.85}}*/}
					{/*	src={dusseldorf}*/}
					{/*	alt="increase priority"*/}
					{/*/>*/}

					<Grid container spacing={2}
								direction="row"
								justify="space-around"
								alignItems="flex-start"
					>
						{/*<Grid item xs={12}>*/}
						{/*	<Paper className={classes.paper}>xs=12</Paper>*/}
						{/*</Grid>*/}
						{/*<Grid item xs={6}>*/}
						{/*	<Avatar alt="Remy Sharp" src={losLoquitos} />*/}
						{/*	/!*<Paper className={classes.paper}>xs=6</Paper>*!/*/}
						{/*</Grid>*/}
						{/*<Grid item xs={6}>*/}
						{/*	<Paper className={classes.paper}>xs=6</Paper>*/}
						{/*</Grid>*/}
						{/*<Grid item xs={3}>*/}
						{/*	<Paper className={classes.paper}>xs=3</Paper>*/}
						{/*</Grid>*/}
						{/*<Grid item xs={3}>*/}
						{/*	<Paper className={classes.paper}>xs=3</Paper>*/}
						{/*</Grid>*/}
						{/*<Grid item xs={3}>*/}
						{/*	<Paper className={classes.paper}>xs=3</Paper>*/}
						{/*</Grid>*/}
						{/*<Grid item xs={3}>*/}
						{/*	<Paper className={classes.paper}>xs=3</Paper>*/}
						{/*</Grid>*/}
						{/*<Grid item xs={1}/>*/}

						<Grid item xs={1}/>
						<Grid item xs={3}>
							<PhotoAvatar alt="Remy Sharp" src={losLoquitos} />
						</Grid>
						<Grid item xs={8}>
							{/*<div>*/}
								{/*<div style={{float: 'left'}}>*/}

								{/*	<img*/}
								{/*		src={anillos}*/}
								{/*		alt="anillos"*/}
								{/*		// class={classes.image}*/}
								{/*		style={{width: '20%', size: '30%', height: 'auto', opacity: 0.9, align:'center'}}*/}
								{/*	/>*/}
								{/*</div>*/}

								<Titulo
									color="inherit"
									align="left"
									variant="h1"
									component="h2"
									marked="center"
								>
									Nuestra historia
								</Titulo>

								<p style={{fontSize: '24px', paddingTop: '1em'}}>
									En medio de una pandemia, un murciano le preguntó a una panameña si se quería casar con el. Ella
									dijo SI y ahora ambos celebran sin fin.

								</p>
								{this.state.displayFullText ?
								<p style={{fontSize: '24px'}}>
									A ver bandido, que quieres saber tu, que?
									A ver bandido, que quieres saber tu, que?
									A ver bandido, que quieres saber tu, que?
									A ver bandido, que quieres saber tu, que?
									A ver bandido, que quieres saber tu, que?
									A ver bandido, que quieres saber tu, que?
								</p>
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
							{/*</div>*/}
						</Grid>
					</Grid>
				</DivHead>

			</>
		)
	}
}

NuestraHistoria.propTypes = {
	classes: PropTypes.object.isRequired,
}

NuestraHistoria.defaultProps = {
	classes: undefined,
}
