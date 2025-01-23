import React from 'react'
import Home from './components/Home/Home'
import Navbar from './components/navbar/navbar'
import HomeTest from './components/TailwindTesting/Home'
import AdminPanel from './components/admin/adminPanel'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderSection from './components/OrderSection/orderSection'

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        {/* Define routes for each component */}
        <Route path="/" element={<AdminPanel />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Order-List" element={<OrderSection />} />
        {/* Fallback for unmatched routes */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App