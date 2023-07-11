import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import React from 'react'
import ResultPage from './pages/ResultPage';

function Router() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/result" element={<ResultPage />} />
            </Routes>
        </BrowserRouter>
  )
}

export default Router
