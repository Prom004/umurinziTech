import React, { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import RegisterPage from './pages/RegisterPage'
import PageRouter from './routes/PageRouter'

// Component to handle conditional rendering of Header and Footer
function Layout({ children }) {
  const location = useLocation();
  
  // Define routes where Header and Footer should be hidden
  const hideHeaderFooterRoutes = ['/login', '/signup', '/registerDevice'];
  
  // Check if current route should hide header/footer
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {/* Conditionally render Header */}
      {!shouldHideHeaderFooter && <Header />}
      
      {/* Main content with conditional padding */}
      <div className={`min-h-screen bg-white ${!shouldHideHeaderFooter ? 'pt-16' : ''}`}>
        {children}
      </div>
      
      {/* Conditionally render Footer */}
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}

// ScrollToAnchor component for handling anchor links
function ScrollToAnchor() {
  const location = useLocation();
  
  React.useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          const headerHeight = 64;
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);
  
  return null;
}

function App() {
  return (
    <Router>
      <Layout>
        <ScrollToAnchor />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/signup' element={<SignupPage />}/>
          <Route path='/registerDevice' element={<RegisterPage />}/>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App