import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import React from 'react'
import ResultPage from './pages/ResultPage';

function Router() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/result" element={<ResultPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
  )
}

export default Router
