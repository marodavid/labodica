import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition';
import withRoot from './modules/withRoot'
import Portada from "./pages/Portada";
import PasosASeguir from "./pages/PasosASeguir";
// import NuestraHistoria from './pages/NuestraHistoria'
import AnchorSpan from "./components/AnchorSpan";
// import RSVP from './components/RSVP'
import AgendaTabs from "./components/agenda/AgendaTabs";
import AppFooter from "./components/footer/PiePagina";
import NuestraHistoria from "./components/nuestrahistoria/NuestraHistoria";
// import Carrusel from "./components/Carrusel";
// import SectionCarousel from "./components/carrousel/SectionCarousel";
// import Carouselmui from "./components/carouselmui/Carouselmui";

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
          {/*<Carouselmui />*/}
          {/*<SectionCarousel />*/}
          {/*<Carrusel />*/}
          <AnchorSpan />
          <PasosASeguir />
          <AppFooter/>
        </Route>
        {/*<Route path="/rsvp" >*/}
        {/*  <RSVP />*/}
        {/*</Route>*/}
        <Route path="/informacion" >
          <AgendaTabs />
        </Route>
      </AnimatedSwitch>
        {/*<AppFooter />*/}
    </Router>
  );
}

export default withRoot(Index);
