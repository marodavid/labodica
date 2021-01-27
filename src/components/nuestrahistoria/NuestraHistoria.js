import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Avatar } from "@material-ui/core";
import styled from "styled-components"
import TimelineNuestraHistoria from "./TimelineNuestraHistoria";
import losLoquitos from '../../images/nuestraHistoria/losLoquitos.jpg'
import savethedate from '../../images/nuestraHistoria/SaveTheDate.png'
import Carrusel from "../carrusel/Carrusel";
// import SectionCarousel from "../../components/carrousel/SectionCarousel";


const useStyles = makeStyles((theme) => ({
	root: {
		background: '#F6F6F6',
		backgroundOpacity: 0.4,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundColor: '#D9AFD9',
		backgroundImage: 'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)',
		opacity: 0.9,
		paddingTop: '1em',
		flexGrow: 1,
	},
	avatar: {
		// left: theme.spacing(7);
		align: 'center',
		width: 'auto',
		height: 'auto',
		position: 'flex',
 		opacity: '1',
		// [theme.breakpoints.between('xs','lg')]: {
		// 	display: 'block',
		// },
	},
	titulo: {
		position: 'flex',
		fontFamily: "Dancing Script",
		fontStyle: 'italic, bold',
		textTransform: 'none',
		paddingBottom: '0.5em',
	},
	parrafo: {
		fontSize: '30px',
		fontFamily: 'Dancing Script',
		width: '100%',
		[theme.breakpoints.between('xs','sm')]: {
			fontSize: '24px',
		},
	},
	savethedate: {
		align: 'center',
		width: '70%',
		height: 'auto',
		position: 'flex',
		opacity: '1',
		[theme.breakpoints.between('xs','sm')]: {
			width: '90%',
		},
	},
}))

const AvatarLoquitos = styled(Avatar)`
@media only screen and (max-width: 960px) {
    img {
        display: none;
    }
}
`
export default function NuestraHistoria () {
	const classes = useStyles();

	return (
		<div id="nuestraHistoria" className={classes.root}>
			<Grid container spacing={1}
							direction="row"
							justify="space-around"
							alignItems="flex-start"
				>
				<Grid item xs={12} sm={12} md={1} lg={1} />
				<Grid item xs={1} sm={1} md={3} lg={3}>
					<AvatarLoquitos alt="Remy Sharp" src={losLoquitos} className={classes.avatar}/>
				</Grid>
				<Grid item xs={10} sm={10} md={7} lg={7}>
					<div align="center">
						<h1 className={classes.titulo}>Nuestra historia</h1>
						<p className={classes.parrafo}
						>
							En medio de una pandemia, un murciano le preguntó a una panameña si se quería casar con el.
							Ella dijo Si y ahora ambos celebran sin fin.
						</p>
						<img src={savethedate} alt="Save the date" className={classes.savethedate}/>
					</div>
				</Grid>
				<Grid item xs={1} sm={1} md={1} lg={1} />
				<Grid item xs={12} sm={12} md={12} lg={12} >
					<TimelineNuestraHistoria />
				</Grid>
				<Grid item xs={1} sm={1} md={3} lg={3} />
				<Grid item xs={10} sm={10} md={6} lg={6} >
					{/*<div style={{ height: 'auto'}}>*/}
					<Carrusel />
					{/*<span>Mejores momentos</span>*/}
					{/*</div>*/}
				</Grid>
				<Grid item xs={1} sm={1} md={3} lg={3} />
			</Grid>
		</div>
	)
}
