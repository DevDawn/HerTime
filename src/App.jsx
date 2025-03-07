import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import PeriodLogging from './Pages/PeriodLogging';
import InsightsPage from './Pages/InsightsPage';
import InsightDetail from './Pages/InsightDetails'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/register' element={<Signup />} /> 
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />  
          <Route path='/period-logging' element={<PeriodLogging />} />
          <Route path='/insights' element={<InsightsPage />} />
          <Route path="/insights/:id" element={<InsightDetail />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
