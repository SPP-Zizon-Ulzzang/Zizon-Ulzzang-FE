import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Auth from './components/Auth/Auth';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import React from 'react'
import ResultPage from './pages/ResultPage';

function Router() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/login/auth" element={<Auth />} />
                <Route path="/result" element={<ResultPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
  )
}

export default Router