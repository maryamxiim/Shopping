import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Mainpage from '../pages/mainpage';
import ProductsList from '../pages/ProductsList';
import Product from '../pages/product';

const mainRouter = () => (
  <Router>
    <Routes>
      <Route path="/shopping" exact element={<Mainpage />} />
      <Route path="/shopping/productslist" exact element={<ProductsList />} />
      <Route path="/shopping/product" exact element={<Product />} />

    </Routes>
  </Router>
);

export default mainRouter;
