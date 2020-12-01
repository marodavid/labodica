import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import withRoot from './modules/withRoot'
import Portada from "./pages/Portada";
import PasosASeguir from "./pages/PasosASeguir";
import Sugerencias from "./pages/Sugerencias";
import NuestraHistoria from './pages/NuestraHistoria'
import AnchorSpan from "./components/AnchorSpan";
// import MyForm from './pages/RSVP'

function Index() {
  return (

    <Router>
      <Portada/>
      <AnchorSpan />
      <NuestraHistoria/>
      <AnchorSpan />
      <PasosASeguir />
      <AnchorSpan />
      <Sugerencias/>
      {/*<AppFooter />*/}
      {/*<MyForm path="rsvp"/>*/}
    </Router>
  );
}

export default withRoot(Index);
