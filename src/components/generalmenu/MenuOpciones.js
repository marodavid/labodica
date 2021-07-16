import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import {
	ClickAwayListener,
	Grow,
	Link,
	MenuItem,
	MenuList,
	Paper,
	Popper,
	Tooltip
} from "@material-ui/core";
import ListIcon from '@material-ui/icons/List'


const styles = (theme) => ({
	derechaLink: {
		color: theme.palette.common.white,
		marginLeft: theme.spacing(1),
		underline: false,
	},
	opcionesMenu: {
		backgroundColor: 'white',
	},
});

function MenuOpciones(props) {
	const { classes } = props;
	const history = useHistory()

	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}
		setOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open);
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus();
		}
		prevOpen.current = open;
	}, [open]);

	return (
		<div>
			<Tooltip title={'Menú Opciones'}>
			<Link
				variant="h6"
				underline="none"
				className={clsx(classes.derechaLink)}
				ref={anchorRef}
				aria-controls={open ? 'menu-list-grow' : undefined}
				aria-haspopup="true"
				onClick={handleToggle}
			>
				<ListIcon fontSize={'large'}/>
			</Link>
			</Tooltip>
			<Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
					>
						<Paper className={classes.opcionesMenu}>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
									<MenuItem onClick={() => history.push('/')}>Inicio</MenuItem>
									<MenuItem onClick={() => history.push('/rsvp')}>RSVP</MenuItem>
									<MenuItem onClick={() => history.push('/informacion#agenda')}>Agenda</MenuItem>
									<MenuItem onClick={() => history.push('/informacion#hoteles')}>Hoteles</MenuItem>
									<MenuItem onClick={() => history.push('/informacion#informacion')}>Informacion Q&A</MenuItem>
									<MenuItem onClick={() => history.push('/informacion#mapaboda')}>Mapa Murcia</MenuItem>
									<MenuItem onClick={() => history.push('/informacion#tapas')}>Tapas Murcia</MenuItem>
									<MenuItem onClick={() => history.push('/listaboda')}>Lista Boda</MenuItem>
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</div>
									
	);
}

MenuOpciones.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuOpciones);
