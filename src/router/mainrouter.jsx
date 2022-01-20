import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Mainpage, ProductsList, Product } from '../pages';
import ScrollToTop from '../component/ScrollToTop';

function MainRouter() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" exact element={<Mainpage />} />
          <Route path="/shopping/productslist/" exact element={<ProductsList />} />
          <Route path="/shopping/:id" exact element={<Product />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default MainRouter;
