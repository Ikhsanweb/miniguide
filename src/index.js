import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

import HomeGen from './comp/page/home/HomeGen'
import Game from './comp/page/game/Game'
import WholeList from './comp/page/wholeList/WholeList'
import Holder from './comp/page/holder/Holder'

// import BaseLayout from './comp/base/BaseLayout'


// import Char from './comp/page/char/Char'
// import Weapon from './comp/page/weapon/Weapon'

// import Ir from './comp/page/ir/Ir'

// ------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeGen />} />
        <Route path="/game/:gameId" element={<Game />} />
        <Route path="/game/:gameId/wholeList/:itemId" element={<WholeList />} />
        <Route path="/game/:gameId/wholeList/:itemId/content/:contentId" element={<Holder />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

//    <BrowserRouter>
//      <Routes>
//        <Route path="/" element={<HomeGen />} />
//        <Route path="/char" element={<Char />} />
//        <Route path="/weapon" element={<Weapon />} />
//        <Route path="/region" element={<Region />} />
          // <Route path="/" element={<HomeCal />} />
          // <Route path="/ir" element={<Ir />} />
          // <Route path="/weapon" element={<Weapon />} />
//      </Routes>
//    </BrowserRouter>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
