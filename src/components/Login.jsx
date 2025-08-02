import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

// We will accept a prop called `onLoginSuccess`
const Login = ({ onLoginSuccess }) => {
  const handleSuccess = (credentialResponse) => {
    const decodedToken = jwtDecode(credentialResponse.credential);
    console.log('Login Successful! User Info:', decodedToken);

    // Call the function passed from App.jsx to update the parent component's state
    onLoginSuccess(decodedToken);
  };

  const handleError = () => {
    console.error('Login Failed');
  };

  return (
    <div>
      <h3>Sign in to Continue</h3>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        useOneTap
      />
    </div>
  );
};

export default Login;