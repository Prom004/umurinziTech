import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on app load
  useEffect(() => {
    const checkAuth = () => {
      const savedUser = localStorage.getItem('institution_user');
      if (savedUser) {
        try {
          setUser(JSON.parse(savedUser));
        } catch (error) {
          console.error('Error parsing saved user:', error);
          localStorage.removeItem('institution_user');
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    
    try {
      // Simulate API call - replace with actual authentication logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock authentication - replace with real API call
      if (email === 'umurinziTech@dreamweavers.com' && password === 'password123') {
        const userData = {
          id: '1',
          email: email,
          name: 'Institution Admin',
          role: 'institution',
          institutionName: 'Sample Institution',
          loginTime: new Date().toISOString()
        };
        
        setUser(userData);
        localStorage.setItem('institution_user', JSON.stringify(userData));
        setIsLoading(false);
        return { success: true, user: userData };
      } else {
        setIsLoading(false);
        return { success: false, error: 'Invalid credentials' };
      }
    } catch (error) {
      setIsLoading(false);
      return { success: false, error: 'Login failed. Please try again.' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('institution_user');
  };

  const isAuthenticated = () => {
    return user !== null && user.role === 'institution';
  };

  const value = {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
