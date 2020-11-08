import React from 'react'
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import losLoquitos from '../images/losLoquitos.jpg'
import './nuestraHistoria/main.css'
import Button from "../modules/components/Button";


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
				<div style={{maxWidth: '100%', height: '16.5em'}} />
				<div style={{flexGrow: '1'}}>
					<Grid container spacing={2}
								direction="row"
								justify="space-around"
								alignItems="flex-start"
					>
						<Grid item xs={6}>
							<div style={{}}>
								<img
									src={losLoquitos}
									alt="losLoquitos"
									// class={classes.image}
									style={{paddingLeft: '20px', maxWidth: '80%', height: 'auto', opacity: 0.9, align:'center'}}
								/>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div className="content">
								<h2>Nuestra historia</h2>
								<p style={{fontSize: '24px'}}>
									En medio de una pandemia, un murciano le preguntó a una panameña si se quería casar con el. Ella
									dijo SI y ahora ambos celebran sin fin.

								</p>
								{this.state.displayFullText ?
								<p style={{fontSize: '24px'}}>
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
							</div>
						</Grid>
					</Grid>
				</div>

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
