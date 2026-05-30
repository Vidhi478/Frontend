import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Detail from './components/detail';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
     <div className='min-h-screen flex flex-col'>
      <Navbar />

     <div className="flex-1">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
      <Footer />
    </div>

  )
}

export default App;