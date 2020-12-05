import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Paper, Typography } from '@material-ui/core'

import {
	Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot
} from '@material-ui/lab';

import engagement from '../images/engagement.png'
import church from '../images/church.svg'
import hogar from '../images/hogarIcon.png'
import carnival from '../images/carnival.png'
// import carnivalsvg from '../images/carnivalSvg.svg'


const useStyles = makeStyles((theme) => ({
	paper: {
		padding: '6px 16px',
		"&:hover,&:focus": {
			boxShadow: theme.shadows[24],
		},
	},

	secondaryTail: {
		backgroundColor: theme.palette.secondary.main,
	},
	avatarLarge: {
		width: theme.spacing(7),
		height: theme.spacing(7),
		"&:hover,&:focus": {
			boxShadow: theme.shadows[24],
		},
	},
}));

const avatar = (classes, image) => (<Avatar
	alt="Remy Sharp"
	className={classes.avatarLarge}
	src={image}
/>)

export default function TimelineNuestraHistoria() {
	const classes = useStyles();
	// const [inicio, setInicio] = useState(false)
	return (
		<Timeline align="alternate">
			<TimelineItem>
				<TimelineOppositeContent />
				<TimelineSeparator color="primary" variant="outlined">
					<TimelineDot variant="outlined">
						{ avatar(classes, carnival)}
					</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					<Paper elevation={3} className={classes.paper}>
						<Typography variant="h6" component="h1">
							2 Marzo 2019
						</Typography>
						<Typography>Todo comenzo en carnaval</Typography>
					</Paper>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent />
				<TimelineSeparator>
					<TimelineDot color="primary" variant="outlined">
						{ avatar(classes, hogar)}
					</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					<Paper elevation={3} className={classes.paper}>
						<Typography variant="h6" component="h1">
							1 Diciembre 2019
						</Typography>
						<Typography>¡Nos mudamos juntos!</Typography>
					</Paper>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent />
				<TimelineSeparator>
					<TimelineDot color="primary" variant="outlined">
						{ avatar(classes, engagement)}
					</TimelineDot>
					<TimelineConnector className={classes.secondaryTail} />
				</TimelineSeparator>
				<TimelineContent>
					<Paper elevation={3} className={classes.paper}>
						<Typography variant="h6" component="h1">
							29 Julio 2020
						</Typography>
						<Typography>Nos comprometimos</Typography>
					</Paper>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineDot color="secondary">
						{/*<EventAvailable fontSize="large"/>*/}
						{ avatar(classes, church)}
					</TimelineDot>
				</TimelineSeparator>
				<TimelineContent>
					<Paper elevation={3} className={classes.paper}>
						<Typography variant="h6" component="h1">
							2 Octubre 2020
						</Typography>
						<Typography>¡Nos vamos a casar!!</Typography>
					</Paper>
				</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
}
