import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Divider, Grid, List, ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	heading: {
		fontSize: theme.typography.pxToRem(18),
		fontWeight: theme.typography.fontWeightRegular,
		width: '100%',
	},
	body: {
		fontSize: theme.typography.pxToRem(13),
		fontWeight: theme.typography.fontWeightRegular,
	}
}));

export default function SimpleAccordion() {
	const classes = useStyles();

	return (
		<Grid className={classes.root}>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={classes.heading}>Salones de Belleza</Typography>
				</AccordionSummary>
				<AccordionDetails>

					<List>
						<ListItemText
							divider={true}
							primary={'Peluqueria Ariani'}
							secondary={'Calle Mayor, 39, 30860 Puerto de Mazarrón, Murcia, Spain'}
						/>
						<Divider/>
						<ListItem button component={'a'} href={'https://goo.gl/maps/FU6EYA1konuZ5nqaA'} target="_blank" rel="noopener noreferrer">
							<ListItemText
								divider
								primary={'Peluqueria Ariani (click para ver mapa)'}
								secondary={'Calle Mayor, 39, 30860 Puerto de Mazarrón, Murcia, Spain /n Telefono: +34123456'}
								aria-multiline={true}
							/>
						</ListItem>
						<Divider/>
						<ListItemText
							primary={'Peluqueria Ariani'}
							secondary={'Calle Mayor, 39, 30860 Puerto de Mazarrón, Murcia, Spain'}
						/>
					</List>

				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<Typography className={classes.heading}>Accordion 2</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
						sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion disabled>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel3a-content"
					id="panel3a-header"
				>
					<Typography className={classes.heading}>Disabled Accordion</Typography>
				</AccordionSummary>
			</Accordion>
		</Grid>
	);
}
