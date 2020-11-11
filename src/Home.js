import React from 'react';
// import ProductCategories from './modules/views/ProductCategories';
// import ProductSmokingHero from './modules/views/ProductSmokingHero';
// import AppFooter from './modules/views/AppFooter';
// import ProductHero from './modules/views/ProductHero';
// import ProductValues from './modules/views/ProductValues';
// import ProductHowItWorks from './modules/views/ProductHowItWorks';
// import ProductCTA from './modules/views/ProductCTA';
// import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot'
import Portada from "./pages/Portada";
import PasosASeguir from "./pages/PasosASeguir";
import Sugerencias from "./pages/Sugerencias";
import NuestraHistoria from './pages/NuestraHistoria'
// import BarraMenu from "./pages/BarraMenu";
// import Separator from "./components/Separator";

function Index() {
  return (
    <React.Fragment>
      {/*<AppAppBar />*/}
      {/*<BarraFrontal />*/}
      {/*<BarraMenu/>*/}

      <Portada/>
      {/*<Separator/>*/}
      <NuestraHistoria/>
      {/*<ProductHero />*/}
      {/*<ProductValues />*/}
      <PasosASeguir />
      <Sugerencias/>
      {/*<ProductCategories />*/}
      {/*<ProductHowItWorks />*/}
      {/*<ProductCTA />*/}
      {/*<ProductSmokingHero />*/}
      {/*<AppFooter />*/}
    </React.Fragment>
  );
}

export default withRoot(Index);
