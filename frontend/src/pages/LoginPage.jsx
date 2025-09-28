import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Eye, EyeOff, Lock, Mail, Building2 } from 'lucide-react';
import signUp from '../assets/img/signup-image.png';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated()) {
      const from = location.state?.from?.pathname || '/dashboard';
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const result = await login(formData.email, formData.password);
      
      if (result.success) {
        const from = location.state?.from?.pathname || '/dashboard';
        navigate(from, { replace: true });
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-secondary min-h-screen flex items-center">
      <div className='w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-8 p-4 md:p-8 lg:p-12'>
        {/* Left Side - Form */}
        <div className="bg-white rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl shadow-xl p-6 md:p-8 w-full">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-2xl mb-4">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">User Login</h1>
            <p className="text-gray-600">Access your device management dashboard</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Institution Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="institution@example.com"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary py-3 px-6 rounded-lg font-semibold transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Signing in...
                </div>
              ) : (
                'Sign In'
              )}
            </button>

            {/* Demo Credentials */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Demo Credentials:</h3>
              <div className="text-xs text-gray-600 space-y-1">
                <p><strong>Email:</strong> umurinziTech@dreamweavers.com</p>
                <p><strong>Password:</strong> password123</p>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <span className="text-gray-600">Don't have an account? </span>
              <a href="/signup" className="text-indigo-600 hover:underline font-semibold">
                Sign Up
              </a>
            </div>
          </form>
        </div>

        {/* Right Side - Illustration and Content */}
        <div className="flex flex-col bg-gradient-to-br from-accent to-primary items-center justify-center text-white rounded-b-2xl lg:rounded-bl-none lg:rounded-r-2xl p-8 md:p-10">
          <h2 className="w-full text-xl md:text-2xl font-semibold mb-6 text-center lg:text-right">UmirinziTech</h2>
          <div className="w-full max-w-md text-center">
            {/* Illustration Area */}
            <div className="mb-8 flex justify-center">
              <img src={signUp} alt="Login illustration" className="w-full max-w-xs md:max-w-sm h-auto" />
            </div>

            {/* Main Heading */}
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              Secure Device Management
            </h3>

            {/* Subheading */}
            <p className="text-base md:text-lg text-purple-100 mb-2">
              Institution Portal Access
            </p>

            {/* Description */}
            <p className="text-sm md:text-base text-purple-200">
              Manage and monitor all registered devices with advanced security features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}