import React from 'react'
import Grid from "@material-ui/core/Grid";
import losLoquitos from '../images/losLoquitos.jpg'
import './nuestraHistoria/main.css'
import Button from "../modules/components/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import CurvyLines from '../themes/appCurvyLines.png'
import styled from "styled-components"

const PhotoAvatar = styled(Avatar)`
	left: theme.spacing(7); 
	align: center; 
	width: auto; 
	height: auto;
	position: flex;
	opacity: 1;
	// padding-top: 0.5em;
	// filter: blur(3px);	
`;

const Titulo = styled(Typography)`
	position: flex; 
	font-family: Dancing Script; 
	font-style: italic, bold; 
	text-transform: none;
	padding-bottom: 1em;
	// color: black;
`;
const DivImage = styled.div`
	background: #F6F6F6;
	background-image: url(${CurvyLines});
  background-position: 'center';
  background-repeat: no-repeat;
  background-size: cover;
  // 
  display: flex;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  zIndex: -2;
  width: 100%;
  // filter: blur(3px);
  opacity: 0.8;
  padding-top: 1em;
  flex-grow: 1;
`;
// const DivHead = styled.div`
// 	flex-grow: 1;
// 	// padding-top: 1em;
// 	// padding-bottom: 1em;
// `;

const Parrafo = styled.p`
	font-size: 24px;
	// font-color: white;
	// color: white;
`;

const AnchorSpan = styled.span`
	display: block;
	position: relative;
	height: 10px;
	width: 100%;
	visibility: hidden;
	color: black;
`;

// const ArrowIcon = styled(ExpandMoreIcon)`
// 	color: theme.palette.common.black;
// 	// bottom: theme.spacing(1);
// 	display: 'flex';
// 	marginLeft: 'auto';
// 	marginRight: 'auto';
// `;
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

	render() {
		return (
		<>
			{/*<AnchorSpan><ArrowIcon fontSize='large'/></AnchorSpan>*/}
			{/*<DivHead>*/}
				<DivImage>
					{/*<FondoLineas*/}
					{/*	src={CurvyLines}*/}
					{/*	alt="curvy lines"*/}
					{/*/>*/}
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
						{/*{ this.state.displayFullText ? <PhotoAvatar alt="Remy Sharp" src={pollera} /> : null }*/}
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
								En medio de una pandemia, un murciano le preguntó a una panameña si se quería casar con el.<br/> Ella
								dijo SI y ahora ambos celebran sin fin.<br/>
							</Parrafo>
							{this.state.displayFullText ?
								<Parrafo>
									Proximamente. Un poquito de paciencia
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
					</Grid>
					{/*<Grid item xs={3}>*/}
					{/*	<PhotoAvatar alt="Remy Sharp" src={losLoquitos} />*/}
					{/*	{ this.state.displayFullText ? <PhotoAvatar variant="square" alt="Remy Sharp" src={pollera} /> : null }*/}
					{/*</Grid>*/}
					{/*<Grid item xs={1}/>*/}

				</Grid>
				</DivImage>
			{/*</DivHead>*/}
			<AnchorSpan>1234</AnchorSpan>
		</>

		)
	}
}
//
// NuestraHistoria.propTypes = {
// 	classes: PropTypes.object.isRequired,
// }
//
// NuestraHistoria.defaultProps = {
// 	classes: undefined,
// }
