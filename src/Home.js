import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition';
import withRoot from './modules/withRoot'
import Portada from "./pages/Portada";
import PasosASeguir from "./pages/PasosASeguir";
import AnchorSpan from "./components/AnchorSpan";
// import RSVP from './components/RSVP'
import AgendaTabs from "./components/agenda/AgendaTabs";
import NuestraHistoria from "./components/nuestrahistoria/NuestraHistoria";
// import GeneralMenu from "./components/generalmenu/GeneralMenu";
import PiePagina from "./components/footer/PiePagina";

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
          <AnchorSpan />
          <NuestraHistoria/>
          <AnchorSpan />
          <PasosASeguir />
          <PiePagina/>
        </Route>
        {/*<Route path="/rsvp" >*/}
        {/*  <GeneralMenu/>*/}
        {/*  <RSVP />*/}
        {/*</Route>*/}
        <Route path="/informacion" >
          <AgendaTabs />
        </Route>
      </AnimatedSwitch>
    </Router>
  );
}

export default withRoot(Index);
