import React, { useState, forwardRef, useId } from 'react';

// Main Input Component
const Input = forwardRef(({
  label,
  required = false,
  error,
  success,
  warning,
  info,
  variant = 'default',
  size = 'md',
  leftIcon,
  rightIcon,
  showClear = false,
  onClear,
  floating = false,
  helperText,
  containerClassName = '',
  labelClassName = '',
  inputClassName = '',
  className = '',
  value,
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(value || '');
  const inputId = useId();
  
  // Use controlled value if provided, otherwise use internal state
  const currentValue = value !== undefined ? value : internalValue;
  const hasValue = Boolean(currentValue);

  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-sm',
    lg: 'px-5 py-4 text-base'
  };

  // Get variant styles
  const getVariantStyles = () => {
    const currentVariant = error ? 'error' : success ? 'success' : warning ? 'warning' : variant;
    
    const styles = {
      default: {
        border: 'border-gray-300 focus:border-blue-500',
        ring: 'focus:ring-blue-200',
        label: isFocused ? 'text-blue-600' : 'text-gray-700'
      },
      error: {
        border: 'border-red-500 focus:border-red-500',
        ring: 'focus:ring-red-200',
        label: 'text-red-600'
      },
      success: {
        border: 'border-green-500 focus:border-green-500',
        ring: 'focus:ring-green-200',
        label: 'text-green-600'
      },
      warning: {
        border: 'border-yellow-500 focus:border-yellow-500',
        ring: 'focus:ring-yellow-200',
        label: 'text-yellow-600'
      }
    };

    return styles[currentVariant];
  };

  const variantStyles = getVariantStyles();

  // Get message to display
  const getMessage = () => {
    if (error) return { type: 'error', text: error, icon: '⚠️', color: 'text-red-600' };
    if (success) return { type: 'success', text: success, icon: '✅', color: 'text-green-600' };
    if (warning) return { type: 'warning', text: warning, icon: '⚡', color: 'text-yellow-600' };
    if (info) return { type: 'info', text: info, icon: 'ℹ️', color: 'text-blue-600' };
    if (helperText) return { type: 'helper', text: helperText, icon: '', color: 'text-gray-500' };
    return null;
  };

  const message = getMessage();

  // Handle input changes
  const handleChange = (e) => {
    if (value === undefined) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };

  // Handle clear button
  const handleClear = (e) => {
    e.stopPropagation();
    if (value === undefined) {
      setInternalValue('');
    }
    onClear?.();
  };

  // Handle focus
  const handleFocus = (e) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  // Handle blur
  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <div className={`w-full ${containerClassName}`}>
      {/* Regular Label */}
      {label && !floating && (
        <label 
          htmlFor={inputId}
          className={`block text-sm font-medium mb-2 transition-colors ${variantStyles.label} ${labelClassName}`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Input Container */}
      <div className="relative">
        <input
          ref={ref}
          id={inputId}
          value={currentValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          className={`
            w-full rounded-lg border transition-all duration-200 ease-in-out
            ${sizeClasses[size]}
            ${variantStyles.border}
            ${variantStyles.ring}
            ${leftIcon ? 'pl-11' : ''}
            ${(rightIcon || (showClear && hasValue)) ? 'pr-11' : ''}
            ${disabled 
              ? 'bg-gray-50 text-gray-500 cursor-not-allowed border-gray-200' 
              : 'bg-white text-gray-900 hover:border-gray-400'
            }
            focus:outline-none focus:ring-3
            placeholder-gray-400
            ${inputClassName}
            ${className}
          `}
          {...props}
        />

        {/* Floating Label */}
        {label && floating && (
          <label
            htmlFor={inputId}
            className={`
              absolute left-4 bg-white px-1 pointer-events-none transition-all duration-200 ease-in-out
              ${(isFocused || hasValue) 
                ? 'top-0 text-xs font-medium transform -translate-y-1/2' 
                : 'top-1/2 text-sm transform -translate-y-1/2'
              }
              ${variantStyles.label}
              ${labelClassName}
            `}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        {/* Left Icon */}
        {leftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
            {leftIcon}
          </div>
        )}

        {/* Right Icon or Clear Button */}
        {(rightIcon || (showClear && hasValue)) && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {showClear && hasValue && !disabled ? (
              <button
                type="button"
                onClick={handleClear}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                tabIndex={-1}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            ) : rightIcon ? (
              <div className="text-gray-400 pointer-events-none">
                {rightIcon}
              </div>
            ) : null}
          </div>
        )}
      </div>

      {/* Message/Helper Text */}
      {message && (
        <div className={`mt-2 text-xs flex items-start gap-2 ${message.color}`}>
          {message.icon && <span className="mt-0.5 flex-shrink-0">{message.icon}</span>}
          <span className="leading-4">{message.text}</span>
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

// Demo Component showing usage examples
const InputDemo = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    search: '',
    phone: '',
    website: '',
    floatingEmail: '',
    username: 'john123'
  });

  const [showPassword, setShowPassword] = useState(false);

  // Email validation
  const validateEmail = (email) => {
    if (!email) return '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? '' : 'Please enter a valid email address';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Reusable Input Component</h1>
          <p className="text-gray-600">A flexible and customizable input component for React applications</p>
        </div>

        <div className="space-y-8">
          {/* Basic Usage */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Basic Usage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                error={validateEmail(formData.email)}
                success={formData.email && !validateEmail(formData.email) ? 'Valid email format' : undefined}
              />
              
              <Input
                label="Full Name"
                required
                placeholder="Enter your full name"
                helperText="This will be displayed on your profile"
              />
              
              <Input
                label="Account ID"
                value="ACC-123456"
                disabled
                helperText="This field cannot be modified"
              />
            </div>
          </div>

          {/* Input States */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Input States</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Username"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                error="Username already exists"
              />
              
              <Input
                label="Phone Number"
                value="+1 (555) 123-4567"
                success="Phone number verified"
              />
              
              <Input
                label="Website URL"
                value="incomplete-url"
                warning="URL format seems incomplete"
              />
              
              <Input
                label="API Key"
                value="sk-1234567890"
                info="Keep this key secure and private"
              />
            </div>
          </div>

          {/* Sizes */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Sizes</h2>
            <div className="space-y-4">
              <Input
                label="Small Input"
                size="sm"
                placeholder="Small size input"
              />
              
              <Input
                label="Medium Input (Default)"
                size="md"
                placeholder="Medium size input"
              />
              
              <Input
                label="Large Input"
                size="lg"
                placeholder="Large size input"
              />
            </div>
          </div>

          {/* With Icons */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">With Icons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Phone Number"
                type="tel"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                leftIcon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                }
              />
              
              <Input
                label="Website URL"
                type="url"
                placeholder="https://example.com"
                value={formData.website}
                onChange={(e) => setFormData({...formData, website: e.target.value})}
                rightIcon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                }
              />
            </div>
          </div>

          {/* Special Features */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Special Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Search"
                type="search"
                placeholder="Search devices..."
                value={formData.search}
                onChange={(e) => setFormData({...formData, search: e.target.value})}
                showClear
                onClear={() => setFormData({...formData, search: ''})}
                leftIcon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                }
              />
              
              <Input
                label="Password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                rightIcon={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    {showPassword ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                }
              />
            </div>
          </div>

          {/* Floating Labels */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Floating Labels</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Email Address"
                type="email"
                floating
                placeholder=" "
                value={formData.floatingEmail}
                onChange={(e) => setFormData({...formData, floatingEmail: e.target.value})}
                error={validateEmail(formData.floatingEmail)}
              />
              
              <Input
                label="Full Name"
                floating
                placeholder=" "
                required
              />
            </div>
          </div>

          {/* Usage Code */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Usage Example</h2>
            <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm text-gray-800">
{`// Copy the Input component and use it like this:

function MyForm() {
  const [email, setEmail] = useState('');
  
  return (
    <Input
      label="Email Address"
      type="email"
      required
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      error={email && !isValidEmail(email) ? 'Invalid email' : ''}
      leftIcon={<EmailIcon />}
      showClear
      onClear={() => setEmail('')}
    />
  );
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputDemo;

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4">
//       <div className="max-w-4xl mx-auto">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Reusable Input Component</h1>
//           <p className="text-gray-600">A flexible and customizable input component for React applications</p>
//         </div>

//         <div className="space-y-8">
//           {/* Basic Usage */}
//           <div className="bg-white p-6 rounded-lg shadow-sm">
//             <h2 className="text-xl font-semibold mb-4">Basic Usage</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               <Input
//                 label="Email Address"
//                 type="email"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({...formData, email: e.target.value})}
//                 error={validateEmail(formData.email)}
//                 success={formData.email && !validateEmail(formData.email) ? 'Valid email format' : undefined}
//               />
              
//               <Input
//                 label="Full Name"
//                 required
//                 placeholder="Enter your full name"
//                 helperText="This will be displayed on your profile"
//               />
              
//               <Input
//                 label="Account ID"
//                 value="ACC-123456"
//                 disabled
//                 helperText="This field cannot be modified"
//               />
//             </div>
//           </div>

//           {/* Input States */}
//           <div className="bg-white p-6 rounded-lg shadow-sm">
//             <h2 className="text-xl font-semibold mb-4">Input States</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <Input
//                 label="Username"
//                 value={formData.username}
//                 onChange={(e) => setFormData({...formData, username: e.target.value})}
//                 error="Username already exists"
//               />
              
//               <Input
//                 label="Phone Number"
//                 value="+1 (555) 123-4567"
//                 success="Phone number verified"
//               />
              
//               <Input
//                 label="Website URL"
//                 value="incomplete-url"
//                 warning="URL format seems incomplete"
//               />
              
//               <Input
//                 label="API Key"
//                 value="sk-1234567890"
//                 info="Keep this key secure and private"
//               />
//             </div>
//           </div>

//           {/* Sizes */}
//           <div className="bg-white p-6 rounded-lg shadow-sm">
//             <h2 className="text-xl font-semibold mb-4">Sizes</h2>
//             <div className="space-y-4">
//               <Input
//                 label="Small Input"
//                 size="sm"
//                 placeholder="Small size input"
//               />
              
//               <Input
//                 label="Medium Input (Default)"
//                 size="md"
//                 placeholder="Medium size input"
//               />
              
//               <Input
//                 label="Large Input"
//                 size="lg"
//                 placeholder="Large size input"
//               />
//             </div>
//           </div>

//           {/* With Icons */}
//           <div className="bg-white p-6 rounded-lg shadow-sm">
//             <h2 className="text-xl font-semibold mb-4">With Icons</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <Input
//                 label="Phone Number"
//                 type="tel"
//                 placeholder="Enter phone number"
//                 value={formData.phone}
//                 onChange={(e) => setFormData({...formData, phone: e.target.value})}
//                 leftIcon={
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                   </svg>
//                 }
//               />
              
//               <Input
//                 label="Website URL"
//                 type="url"
//                 placeholder="https://example.com"
//                 value={formData.website}
//                 onChange={(e) => setFormData({...formData, website: e.target.value})}
//                 rightIcon={
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                   </svg>
//                 }
//               />
//             </div>
//           </div>

//           {/* Special Features */}
//           <div className="bg-white p-6 rounded-lg shadow-sm">
//             <h2 className="text-xl font-semibold mb-4">Special Features</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <Input
//                 label="Search"
//                 type="search"
//                 placeholder="Search devices..."
//                 value={formData.search}
//                 onChange={(e) => setFormData({...formData, search: e.target.value})}
//                 showClear
//                 onClear={() => setFormData({...formData, search: ''})}
//                 leftIcon={
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                   </svg>
//                 }
//               />
              
//               <Input
//                 label="Password"
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder="Enter password"
//                 value={formData.password}
//                 onChange={(e) => setFormData({...formData, password: e.target.value})}
//                 rightIcon={
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
//                   >
//                     {showPassword ? (
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
//                       </svg>
//                     ) : (
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                       </svg>
//                     )}
//                   </button>
//                 }
//               />
//             </div>
//           </div>

//           {/* Floating Labels */}
//           <div className="bg-white p-6 rounded-lg shadow-sm">
//             <h2 className="text-xl font-semibold mb-4">Floating Labels</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <Input
//                 label="Email Address"
//                 type="email"
//                 floating
//                 placeholder=" "
//                 value={formData.floatingEmail}
//                 onChange={(e) => setFormData({...formData, floatingEmail: e.target.value})}
//                 error={validateEmail(formData.floatingEmail)}
//               />
              
//               <Input
//                 label="Full Name"
//                 floating
//                 placeholder=" "
//                 required
//               />
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default InputDemo;