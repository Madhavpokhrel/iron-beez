import React, { useState } from 'react';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProductsDetailPage from './pages/ProductsDetailPage/ProductDetailPage';
import ProductsListingPage from './pages/ProductsListingPage/ProductsListingPage';
import { useLocation } from 'react-router-dom';
import UserDetailPage from './pages/UserDetailPage/UserDetailPage';

function App() {
  // const location = useLocation();
  // const pathId = location.pathname.split('/')[2];
  const [searchValue, setSearchValue] = useState('');
  const [zipCodeValue, setZipCodeValue] = useState('');
  return (
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                zipCodeValue={zipCodeValue}
                setZipCodeValue={setZipCodeValue}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            }
          />

          <Route path="/auth" element={<LoginPage />} />
          <Route path="/profile" element={<UserDetailPage />} />
          <Route path="/product-detail" element={<ProductsDetailPage />} />
          <Route
            path="/product-listing"
            element={
              <ProductsListingPage
                zipCodeValue={zipCodeValue}
                searchValue={searchValue}
              />
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
