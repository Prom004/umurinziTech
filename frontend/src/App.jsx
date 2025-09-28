import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './contexts/AuthContext'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import RegisterPage from './pages/RegisterPage'
import MyDevices from './pages/MyDevices'
import Dashboard from './pages/Dashboard'
import VerifyDevice from './pages/VerifyDevice'
import TransferOwnership from './pages/TransferOwnership'
import ReportLostStolen from './pages/ReportLostStolen'
import DeviceHistory from './pages/DeviceHistory'
import ProfileSettings from './pages/ProfileSettings'
import Notifications from './pages/Notifications'
import HelpSupport from './pages/HelpSupport'
import UserGuide from './pages/UserGuide'

function Layout({ children }) {
  const location = useLocation();
  
  const hideHeaderFooterRoutes = ['/login', '/signup', '/registerDevice', '/myDevices', '/dashboard', '/verifyDevice', '/transferOwnership', '/reportLostStolen', '/deviceHistory', '/profileSettings', '/notifications', '/helpSupport', '/userGuide', '/logout'];
  
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}
      
      <div className={`min-h-screen bg-white ${!shouldHideHeaderFooter ? 'pt-16' : ''}`}>
        {children}
      </div>
      
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}

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
    <AuthProvider>
      <Router>
        <Layout>
          <ScrollToAnchor />
          <Routes>
            {/* Public Routes */}
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            
            {/* Protected Routes - Require Institution Authentication */}
            <Route path='/registerDevice' element={
              <ProtectedRoute>
                <RegisterPage />
              </ProtectedRoute>
            } />
            <Route path='/myDevices' element={
              <ProtectedRoute>
                <MyDevices />
              </ProtectedRoute>
            } />
            <Route path='/dashboard' element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path='/verifyDevice' element={
              <ProtectedRoute>
                <VerifyDevice />
              </ProtectedRoute>
            } />
            <Route path='/transferOwnership' element={
              <ProtectedRoute>
                <TransferOwnership />
              </ProtectedRoute>
            } />
            <Route path='/reportLostStolen' element={
              <ProtectedRoute>
                <ReportLostStolen />
              </ProtectedRoute>
            } />
            <Route path='/deviceHistory' element={
              <ProtectedRoute>
                <DeviceHistory />
              </ProtectedRoute>
            } />
            <Route path='/profileSettings' element={
              <ProtectedRoute>
                <ProfileSettings />
              </ProtectedRoute>
            } />
            <Route path='/notifications' element={
              <ProtectedRoute>
                <Notifications />
              </ProtectedRoute>
            } />
            <Route path='/helpSupport' element={
              <ProtectedRoute>
                <HelpSupport />
              </ProtectedRoute>
            } />
            <Route path='/userGuide' element={
              <ProtectedRoute>
                <UserGuide />
              </ProtectedRoute>
            } />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  )
}

export default App

