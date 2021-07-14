import React from "react";
import PropTypes from 'prop-types'

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import HouseIcon from '@material-ui/icons/House';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';


const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 0,
		paddingTop: "56.25%" // 16:9
	},
	// content: {
	// 	width: '100%',
	// },
	// texto: {
	// 	// height: 0,
	// 	// width: '100%',
	// 	// height: '20%',
	//
	// 	// paddingTop: "56.25%" // 16:9
	// },
	// 
	// expand: {
	// 	transform: "rotate(0deg)",
	// 	marginLeft: "auto",
	// 	transition: theme.transitions.create("transform", {
	// 		duration: theme.transitions.duration.shortest
	// 	})
	// },
	// expandOpen: {
	// 	transform: "rotate(180deg)"
	// },
	// avatarMonumento: {
	// 	backgroundColor: 'purple',
	// },
	avatarViaje: {
		backgroundColor: 'orange',
	}
}));


// const propiedades = [
// 	{
// 		tipo: 'monumento',
// 		title: 'Catedral de Murcia',
// 		subtitle: 'De 7 a 13 horas y 17 a 20 horas',
// 	}
// ]

export default function ListaBodaCard(props) {
	const classes = useStyles();
	// const [expanded, setExpanded] = React.useState(false);

	const { tipo, titulo, subtitulo, imagen }  = props
	// const { descripcion }  = props
	// const handleExpandClick = () => {
	// 	setExpanded(!expanded);
	// };

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe"  className={classes.avatarViaje}>
						{ tipo==='monumento' && (<HouseIcon />)}
						{ tipo==='viaje' && (<FlightTakeoffIcon />)}
						{/*<HouseIcon />*/}
					</Avatar>
				}
				// action={
				// 	<IconButton aria-label="settings">
				// 		<HouseIcon />
				// 	</IconButton>
				// }
				// title="CATEDRAL DE MURCIA"
				title={titulo}
				// subheader="De 7 a 13 horas y 17 a 20 horas"
				subheader={subtitulo}
			/>
			
				<CardMedia
					className={classes.media}
					// image={catedral}
					image={imagen}
					// image="/static/images/cards/paella.jpg"
					title="Paella dish"
				/>
					{/*<CardContent className={classes.content}>*/}
					{/*	<Typography variant="body2" color="textSecondary" component="p" className={classes.texto}>*/}
					{/*		{ descripcion!=='' ? descripcion : (*/}
					{/*			'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'*/}
					{/*			)}*/}
					{/*	</Typography>*/}
					{/*</CardContent>*/}
					{/*<CardActions disableSpacing>*/}
					{/*	<IconButton*/}
					{/*		className={clsx(classes.expand, {*/}
					{/*			[classes.expandOpen]: expanded*/}
					{/*		})}*/}
					{/*		onClick={handleExpandClick}*/}
					{/*		aria-expanded={expanded}*/}
					{/*		aria-label="show more"*/}
					{/*	>*/}
					{/*		<ExpandMoreIcon />*/}
					{/*	</IconButton>*/}
					{/*</CardActions>*/}
					{/*<Collapse in={expanded} timeout="auto" unmountOnExit>*/}
					{/*	<CardContent>*/}
					{/*		<Typography paragraph>Method:</Typography>*/}
					{/*		<Typography paragraph>*/}
					{/*			Heat 1/2 cup of the broth in a pot until simmering, add saffron and*/}
					{/*			set aside for 10 minutes.*/}
					{/*		</Typography>*/}
					{/*		<Typography paragraph>*/}
					{/*			Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet*/}
					{/*			over medium-high heat. Add chicken, shrimp and chorizo, and cook,*/}
					{/*			stirring occasionally until lightly browned, 6 to 8 minutes.*/}
					{/*			Transfer shrimp to a large plate and set aside, leaving chicken and*/}
					{/*			chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,*/}
					{/*			onion, salt and pepper, and cook, stirring often until thickened and*/}
					{/*			fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2*/}
					{/*			cups chicken broth; bring to a boil.*/}
					{/*		</Typography>*/}
					{/*		<Typography paragraph>*/}
					{/*			Add rice and stir very gently to distribute. Top with artichokes and*/}
					{/*			peppers, and cook without stirring, until most of the liquid is*/}
					{/*			absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved*/}
					{/*			shrimp and mussels, tucking them down into the rice, and cook again*/}
					{/*			without stirring, until mussels have opened and rice is just tender,*/}
					{/*			5 to 7 minutes more. (Discard any mussels that don’t open.)*/}
					{/*		</Typography>*/}
					{/*		<Typography>*/}
					{/*			Set aside off of the heat to let rest for 10 minutes, and then*/}
					{/*			serve.*/}
					{/*		</Typography>*/}
					{/*	</CardContent>*/}
					{/*</Collapse>*/}
		</Card>
	);
}

ListaBodaCard.propTypes = {
	tipo: PropTypes.string.isRequired,
	titulo: PropTypes.string.isRequired,
	subtitulo: PropTypes.string.isRequired,
	imagen: PropTypes.object.isRequired,
	descripcion: PropTypes.string.isRequired,
	extendida: PropTypes.string.isRequired,
	
}
