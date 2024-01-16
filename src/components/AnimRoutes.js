import React from 'react';

import Home from '../pages/Home'
import About from '../pages/About'
import Portfolio from '../pages/Home'
import Contact from '../pages/Contact'

import { Routes, Route, useLocation } from 'react-router-dom'

const AnimRoutes = () => {
  return <Routes>
    <Route Path '/' element={<Home />} />
    <Route Path '/' element={<Home />} />
    <Route Path '/' element={<Home />} />
    <Route Path '/' element={<Home />} />
  </Routes>;
};

export default AnimRoutes;
