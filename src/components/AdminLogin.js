import React, { useState, useEffect } from 'react';
import { supabase } from '../backend/client.js'; // Ensure correct import path
import { useNavigate } from 'react-router-dom'; // For redirect after login

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false); // Loading state for button
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/dashboard');
      }
    };

    checkSession();
  }, [navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!email) {
      setErrorMessage('Please enter your email.');
      return;
    }
    if (!password) {
      setErrorMessage('Please enter your password.');
      return;
    }
    setErrorMessage(null);
    setLoading(true);
    setIsButtonLoading(true); // Start loading for button

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Login error:", error.message);
        setErrorMessage(error.message);
      } else {
        console.log("Login successful, navigating to dashboard...");
        navigate('/dashboard');
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      setErrorMessage('Login failed, please try again.');
    } finally {
      setLoading(false);
      setIsButtonLoading(false); // Stop button loading
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
      padding: '20px',
    },
    formWrapper: {
      background: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      padding: '40px',
      width: '100%',
      maxWidth: '400px',
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      color: '#666',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '16px',
      boxSizing: 'border-box',
    },
    errorMessage: {
      color: 'red',
      marginTop: '10px',
      textAlign: 'center',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3', // Darker blue for hover
    },
    loader: {
      textAlign: 'center',
      color: '#007BFF',
      fontSize: '18px',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h2 style={styles.title}>Admin Login</h2>
        {loading ? (
          <div style={styles.loader}>Loading...</div>
        ) : (
          <form onSubmit={handleLogin}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                placeholder="Enter your email"
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                placeholder="Enter your password"
                required
              />
            </div>
            {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
            <button
              type="submit"
              style={styles.button}
              disabled={isButtonLoading} // Disable the button while loading
            >
              {isButtonLoading ? 'Logging in...' : 'Login'} {/* Change button text */}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;
