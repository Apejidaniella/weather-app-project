import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Checklist from './pages/checklist'
import PackingPlans from './pages/packing-plans'
import Home from './pages/home'
import Layout from './components/Layout'

function App() {

  return (
    <BrowserRouter>
        <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} /> 
        <Route path="/packing-plans" element={<PackingPlans />} /> 
        <Route path="/checklist" element={<Checklist />} />  
        </Route>
        </Routes>
        </BrowserRouter>
  )
  
}

export default App;
