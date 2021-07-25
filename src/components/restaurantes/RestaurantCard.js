import React from "react";
import PropTypes from 'prop-types'

import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 0,
		paddingTop: "56.25%" // 16:9
	},
	content: {
		width: '100%',
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: "rotate(180deg)"
	},
	avatar: {
		backgroundColor: 'white',
	},
	avatar2: {
		align: 'center',
		width: '100%',
		height: 'auto',
		position: 'flex',
		opacity: '1',
	},
}));


export default function RestaurantCard(props) {
	const classes = useStyles();
	const fadeShadowStyles = useFadedShadowStyles();
	const [expanded, setExpanded] = React.useState(false);

	const {avatar, nombre, web, imagen, direccion, googlemap, extendida }  = props
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<div className={classes.root}>
			
		<Card className={fadeShadowStyles.root}>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}>
						<img src={avatar} alt="small" className={classes.avatar2}/>
					</Avatar>
				}
				// action={
				// 	<IconButton aria-label="settings">
				// 		<RestaurantIcon />
				// 	</IconButton>
				// }
				title={nombre}
				subheader={<a href={web} target='_blank' rel="noopener noreferrer">{web}</a>}
			/>

			<CardMedia
				className={classes.media}
				image={imagen}
				title={nombre}
			/>
			<CardContent className={classes.content}>
				<Typography variant="body2" color="textSecondary" component="p">
					{direccion}<br/>
					<a href={googlemap} target='_blank' rel='noopener noreferrer'>
						{'Ver en Google Maps'}
					</a>
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph>
						{extendida}
					</Typography>
				</CardContent>
			</Collapse>
		</Card>
		</div>
	);
}

RestaurantCard.propTypes = {
	avatar: PropTypes.object.isRequired,
	nombre: PropTypes.string.isRequired,
	web: PropTypes.string.isRequired,
	imagen: PropTypes.object.isRequired,
	direccion: PropTypes.string.isRequired,
	googlemap: PropTypes.string.isRequired,
	extendida: PropTypes.string.isRequired,

}
