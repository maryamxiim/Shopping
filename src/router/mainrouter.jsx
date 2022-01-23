import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Mainpage, ProductsList, Product, Signup, Request, Login } from '../pages';
import ScrollToTop from '../component/ScrollToTop';

function MainRouter() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/shopping/productslist" element={<ProductsList />} />
          <Route path="/:category/:subcategory/:id" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/request" element={<Request />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default MainRouter;
