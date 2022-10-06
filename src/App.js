import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Cart from './Page/Cart/Cart';
import Home from './Page/Home/Home';

/* import Cats from './components/Cats'; */

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/pizza/:id" element={<FullPizza />} /> */}
          {/* <Route path="*" element={<NotFound />} />  */}
          {/*если подходящих маршрутов не нашлось */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
