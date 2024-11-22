import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import ProductsView from './views/ProductsView';
import ProductDetail from './views/ProductDetail';
import SignInView from './views/SignInView';
import LogInView from './views/LogInView';
import NotFound from './views/NotFound';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/"            element={<HomeView />} />
        <Route path="/products"    element={<ProductsView />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/sign-in"     element={<SignInView />} />
        <Route path="/log-in"      element={<LogInView />} />
        <Route path="*"            element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App