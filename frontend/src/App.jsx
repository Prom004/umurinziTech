import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import RegisterPage from './pages/RegisterPage'


function App() {

  return (
    <Router>
      <Header />
      <div className='min-h-screen bg-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={<SignupPage />}/>
        <Route path='/registerDevice' element={<RegisterPage />}/>
      </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
