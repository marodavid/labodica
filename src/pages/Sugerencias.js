import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components"
import CurvyLines from '../themes/appCurvyLines.png'

// import salonBelleza from '../images/pendientes_de_usar/salonBelleza.jpg'
import castillitos from '../images/sugerencias/castillitos2.jpg'
import cartagena from '../images/sugerencias/cartagena2.jpeg'
import murcia from '../images/sugerencias/murcia.jpeg'
import kayaks from '../images/sugerencias/kayak.jpeg'
import restaurantes from '../images/sugerencias/restaurantes.png'
import laAzohia from '../images/sugerencias/playa-de-la-azohia.jpg'
import bares from '../images/sugerencias/bares.png'
import paseosBarco from '../images/sugerencias/barcoTour.jpeg'
import licor43 from '../images/sugerencias/licor43-rec2.png'

const styles = (theme) => ({
	root: {
		marginTop: theme.spacing(8),
		marginBottom: theme.spacing(4),
	},
	images: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexWrap: 'wrap',
	},
	imageWrapper: {
		position: 'relative',
		display: 'block',
		padding: 0,
		borderRadius: 0,
		height: '40vh',
		[theme.breakpoints.down('md')]: {
			width: '100% !important',
			height: 100,
		},
		'&:hover': {
			zIndex: 1,
		},
		'&:hover $imageBackdrop': {
			opacity: 0,
		},
		'&:hover $imageMarked': {
			opacity: 0,
		},
		'&:hover $imageTitle': {
			border: '4px solid currentColor',
		},
	},
	imageButton: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: theme.palette.common.white,
	},
	imageSrc: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundSize: 'cover',
		backgroundPosition: 'center 40%',
	},
	imageBackdrop: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		background: theme.palette.common.black,
		opacity: 0.3,
		transition: theme.transitions.create('opacity'),
	},
	imageTitle: {
		position: 'relative',
		padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
	},
	imageMarked: {
		height: 3,
		width: 18,
		background: theme.palette.common.white,
		position: 'absolute',
		bottom: -2,
		left: 'calc(50% - 9px)',
		transition: theme.transitions.create('opacity'),
	},
});

function ProductCategories(props) {
	const { classes } = props;

	const images = [
		{
			url: `${cartagena}`,
			// 'https://images.unsplash.com/photo-1453747063559-36695c8771bd?auto=format&fit=crop&w=400&q=80',
			title: 'Cartagena',
			width: '38%',
			href: 'https://turismo.cartagena.es/'
		},
		{
			url: `${castillitos}`,
			// 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80',
			title: 'Castillitos',
			width: '24%',
			href: '#'
		},
		{
			url: `${murcia}`,
			title: 'Murcia',
			width: '38%',
			href: 'https://www.datemurcia.es/es/inicio.html'
		},
		{
			url: `${restaurantes}`,
				// 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400&q=80',
			title: 'Restaurantes',
			width: '40%',
			href: '#'
		},
		{
			url: `${bares}`,
			title: 'Bares',
			width: '20%',
			href: '#'
		},
		{
			url: `${licor43}`,
			// 'https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=400&q=80',
			title: 'Fabrica Licor 43',
			width: '40%',
			href: 'https://booking.zamoracompany.com/experiencia43/reservar-visita/visita-premium#'
		},
		{
			url: `${laAzohia}`,
			title: 'Playas',
			width: '40%',
			href: '#'
		},
		{
			url: `${kayaks}`,
			// 'https://images.unsplash.com/photo-1533727937480-da3a97967e95?auto=format&fit=crop&w=400&q=80',
			title: 'Kayaks',
			width: '20%',
			href: '#'
		},
		{
			url: `${paseosBarco}`,
			title: 'Paseos en barco',
			width: '40%',
			href: 'http://www.solazlines.com/index.php/es/rutas-regulares/desde-mazarron/ruta-acantilados-cabo-tinoso'
		},


	];

	const DivFrame = styled.div`
		width: 100%;
		height: auto;		
		background: #F6F6F6;
		// background: #FFF;
		// background: #bdcebe;
		// background-image: url(${CurvyLines});
		background-position: 'center';
		background-repeat: no-repeat;
		background-size: cover;
		padding-top: 0.05em;
		padding-bottom: 1em;
		text-transform: uppercase;
	`;

	return (
		<DivFrame>
		<Container className={classes.root} component="section">
			<Typography variant="h4" marked="center" align="center" component="h2">
				Disfruta los dias de la boda
			</Typography>
			<div className={classes.images}>
				{images.map((image) => (
					<ButtonBase
						key={image.title}
						className={classes.imageWrapper}
						style={{
							width: image.width,
						}}
						href={image.href}
						target='_blank'
					>
						<div
							className={classes.imageSrc}
							style={{
								backgroundImage: `url(${image.url})`,
							}}
						/>
						<div className={classes.imageBackdrop} />
						<div className={classes.imageButton}>
							<Typography
								component="h3"
								variant="h6"
								color="inherit"
								className={classes.imageTitle}
							>
								{image.title}
								<div className={classes.imageMarked} />
							</Typography>
						</div>
					</ButtonBase>
				))}
			</div>
		</Container>
		</DivFrame>
	);
}

ProductCategories.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
