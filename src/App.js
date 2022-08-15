import * as React from 'react';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProductsDetailPage from './pages/ProductsDetailPage/ProductDetailPage';
import ProductsListingPage from './pages/ProductsListingPage/ProductsListingPage';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-detail" element={<ProductsDetailPage />} />
          <Route path="/auth" element={<LoginPage />} />
          <Route path="/product-listing" element={<ProductsListingPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
