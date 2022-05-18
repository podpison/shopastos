import c from './app.module.scss';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { store } from "./redux/store";
import { Provider } from 'react-redux';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from './components/commonComponents/footer/Footer';
import { OrderCustomMerch } from './components/commonComponents/orderCustormMerch/OrderCustomMerch';
import { Header } from './components/commonComponents/header/Header';
import { Suspense } from 'react';
import { lazily } from "react-lazily";
import "./app.module.scss";

const { MainPage } = lazily(() => import('./components/pages/main/MainPage'));
const { Kits } = lazily(() => import('./components/pages/kits/Kits'));
const { AllGoods } = lazily(() => import('./components/pages/allGoods/AllGoods'));
const { Sewing } = lazily(() => import('./components/pages/sewing/Sewing'));
const { Production } = lazily(() => import('./components/pages/production/Production'));
const { Information } = lazily(() => import('./components/pages/information/Information'));
const { NotFound } = lazily(() => import('./components/pages/notFound/NotFound'));

function App() {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <HashRouter>
          <Suspense fallback='Loading'>
            <div className={c.app}>
              <Header />
              <Routes>
                <Route path='*' element={<NotFound />} />
                <Route path='/' element={<MainPage />} />
                <Route path='/kits' element={<Kits />} />
                <Route path='/allGoods/*' element={<AllGoods />} />
                <Route path='/sewing/*' element={<Sewing />}>
                  <Route path=':name/*' element={<OrderCustomMerch />} />
                </Route>
                <Route path='/production/*' element={<Production />}>
                  <Route path=':name/*' element={<OrderCustomMerch />} />
                </Route>
                <Route path='/information' element={<Information />} />
              </Routes>
              <Footer />
            </div>
          </Suspense>
        </HashRouter>
      </StyledEngineProvider>
    </Provider>
  );
}

export default App;
