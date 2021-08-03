import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		backgroundColor: "transparent",
		"& > *": {
			margin: theme.spacing(1),
			marginTop: theme.spacing(5),
			// marginLeft: theme.spacing(2),
			width: "100%",
			height: "auto"
		}
	},
	paragraph: {
		marginLeft: theme.spacing(2)
	},
}));

const Turismo = () => {
	const classes = useStyles();

	return (
		 <div className={classes.root}>
			 <Grid container
						 direction="row"
						 justify="space-evenly"
						 alignItems="flex-start"
						 spacing={1}>
				 <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >	 
						<Paper elevation={3}>
							<div className={classes.paragraph}>
								<br/>
								<Typography variant="h6">Murcia Turistica (web oficial)</Typography><br/>
								La web oficial de la Oficina de Turismo de la ciudad de Murcia tiene una página web muy completa donde se detallan todos los monumentos, rutas, posibles actividades, recomendaciones, etc.
								<br/>
								<a href="https://turismodemurcia.es/es/" target='_blank' rel="noopener noreferrer">https://turismodemurcia.es/es/</a>
								<hr/>
							</div>
						</Paper>
				 </Grid>
				 
				 <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
					 <Paper elevation={3}>
						 <div className={classes.paragraph}>
							 <br/>
							 <Typography variant="h6">Murcia Free Walking Tour</Typography><br/>
							 Una forma alternativa de conocer la ciudad es haciendo un Free Walking Tour. En la siguiente página encontrarán distintas guías para hacer estos Tours en horarios de mañana (10.30h) y tarde (19h).
							 <br/>
							 <a href="https://www.guruwalk.com/es/murcia" target='_blank' rel="noopener noreferrer">https://www.guruwalk.com/es/murcia</a>
							 <hr/>
						 </div>
					 </Paper>
				 </Grid>
				 
				 
				 <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
					 <Paper elevation={3}>
						 <div className={classes.paragraph}>
							 <br/>
							 <Typography variant="h6">Web de Actividades en Murcia</Typography><br/>
							 Para los que vengan con un poco más de tiempo y curiosidad, la siguiente web recoge pequeñas actividades que se pueden contratar en la ciudad de Murcia y sus alrededores.
							 <br/>
							 <a href="https://www.datemurcia.es/es/inicio.html" target='_blank' rel="noopener noreferrer">https://www.datemurcia.es/es/inicio.html</a>
							 <hr/>
						 </div>
					 </Paper>
				 </Grid>
				 
				 <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
					 <Paper elevation={3}>
						 <div className={classes.paragraph}>
							 <br/>
							 <Typography variant="h6">Visita Cartagena</Typography><br/>
							 Una alternativa para los días previos a La Bodica es visitar la vecina ciudad histórica de Cartagena. Con su impresionante Teatro Romano de 2000 años de antigüedad y grandes atracciones como el Museo Naval, donde reside el submarino de Isaac Peral.
							 
							 <br/>
							 Una posibilidad es visitar la ciudad de Cartagena haciendo un Free Walking Tour o visitar la web oficial de la Oficina de Turismo de Cartagena<br/>
							 <a href="https://www.guruwalk.com/es/p452-cartagena" target='_blank' rel="noopener noreferrer">https://www.guruwalk.com/es/p452-cartagena</a>
							 <br/>
							 <a href="https://turismo.cartagena.es/" target='_blank' rel="noopener noreferrer">https://turismo.cartagena.es/</a>
							 <hr/>
						 </div>
					 </Paper>
				 </Grid>
			 </Grid>
			

		</div> 
	);
}

export default Turismo 
