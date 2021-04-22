import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition';
import ReactGA from 'react-ga'

import withRoot from './modules/withRoot'
import AgendaTabs from "./components/agenda/AgendaTabs";
import AnchorSpan from "./components/AnchorSpan";
import NuestraHistoria from "./components/nuestrahistoria/NuestraHistoria";
import PiePagina from "./components/footer/PiePagina";
import Portada from "./pages/Portada";
import PasosASeguir from "./pages/PasosASeguir";
import GeneralMenu from "./components/generalmenu/GeneralMenu";
import RSVP from './components/RSVP'

function Index() {

  // const TRACKING_ID = "G-B7MB23JQ7Z"; // YOUR_OWN_TRACKING_ID
  const TRACKING_ID = "UA-182646379-1"; // YOUR_OWN_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
  
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
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
          <AnchorSpan />
          <NuestraHistoria/>
          <AnchorSpan />
          <PasosASeguir />
          <PiePagina/>
        </Route>
        <Route path="/rsvp" >
          <GeneralMenu/>
          <RSVP />
        </Route>
        <Route path="/informacion" >
          <AgendaTabs />
        </Route>
      </AnimatedSwitch>
    </Router>
  );
}

export default withRoot(Index);
