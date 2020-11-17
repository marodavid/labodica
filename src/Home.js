import React from 'react';
import withRoot from './modules/withRoot'
import Portada from "./pages/Portada";
import PasosASeguir from "./pages/PasosASeguir";
import Sugerencias from "./pages/Sugerencias";
import NuestraHistoria from './pages/NuestraHistoria'
import AnchorSpan from "./components/AnchorSpan";

function Index() {
  return (
    <React.Fragment>
      <Portada/>
      <AnchorSpan />
      <NuestraHistoria/>
      <AnchorSpan />
      <PasosASeguir />
      <AnchorSpan />
      <Sugerencias/>
      {/*<AppFooter />*/}
    </React.Fragment>
  );
}

export default withRoot(Index);
