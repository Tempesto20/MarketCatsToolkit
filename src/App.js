import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Gallery from './components/Header/Gallery/Gallery';
import Main from './components/Header/Main/Main';
import Profile from './components/Header/Profile/Profile';
import News from './components/Header/News/News';
import Cart from './Page/Cart/Cart';
import FavoriteCats from './Page/FavoriteCats/FavoriteCats';
import FullCat from './Page/FullCat/FullCat';
import Home from './Page/Home/Home';
import NotFound from './Page/NotFound';
import Bottom from './components/Bottom/Bottom';
// import Example from './components/Example/Example';

/* import Cats from './components/Cats'; */

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<FavoriteCats />} />
          <Route path="/cat/:id" element={<FullCat />} />
          <Route path="/main" element={<Main />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Bottom />
    </div>
  );
}

export default App;

{
  /* <div className="wrapper">
<Header />
<div className="content">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/favorite" element={<FavoriteCats />} />
    <Route path="/cat/:id" element={<FullCat />} />
    <Route path="/main" element={<Main />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/news" element={<News />} />
    <Route path="/Profile" element={<Profile />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</div>
<Bottom />
</div> */
}

{
  /* <Example /> */
}

{
  /* <Header />
<div className="content">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/favorite" element={<FavoriteCats />} />
    <Route path="/cat/:id" element={<FullCat />} />
    <Route path="/main" element={<Main />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/news" element={<News />} />
    <Route path="/Profile" element={<Profile />} />
    <Route path="*" element={<NotFound />} /> */
}
{
  /*если подходящих маршрутов не нашлось */
}
{
  /* </Routes>
</div>
<Bottom /> */
}
