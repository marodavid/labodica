import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition';
// import { Route } from 'react-router'
import withRoot from './modules/withRoot'
import Portada from "./pages/Portada";
import PasosASeguir from "./pages/PasosASeguir";
import Sugerencias from "./pages/Sugerencias";
import NuestraHistoria from './pages/NuestraHistoria'
import AnchorSpan from "./components/AnchorSpan";
import Carrusel from "./components/Carrusel";
import RSVP from './components/RSVP'

function Index() {
  return (
    <Router>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route exact path="/">
          <Portada/>
          {/*<RSVP />*/}
          <AnchorSpan />
          <NuestraHistoria/>
          {/*<Carrusel />*/}
          <AnchorSpan />
          <PasosASeguir />
          <AnchorSpan />
          <Sugerencias/>
          {/*<AnchorSpan />*/}
        </Route>
        <Route path="/rsvp" >
        {/*<AppFooter />*/}
          <RSVP />
        </Route>
      </AnimatedSwitch>
    </Router>
  );
}

export default withRoot(Index);
