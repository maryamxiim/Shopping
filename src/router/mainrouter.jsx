import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Mainpage, ProductsList, Product } from '../pages';
import ScrollToTop from '../component/ScrollToTop';
// import Mainpage from '../pages/mainpage/mainpage';
// import ProductsList from '../pages/productslist/productsList';
// import Product from '../pages/product';

function MainRouter() {
  // const id = { id: 'product' };
  const posts = [
    { id: 1, title: 'First', content: 'Hello world!' },
    { id: 2, title: 'Second', content: 'Hello again!' }
  ];
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" exact element={<Mainpage />} />
          <Route path="/shopping/productslist/" exact element={<ProductsList />} />
          <Route path="/shopping/:id" exact element={<Product />} />
          {/* <Route
            exact
            path="/shopping/:id"
            render={({ match }) => <Product post={posts.find((p) => p.id === match.params.id)} />}
          /> */}
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default MainRouter;
