// src/components/Header/Header.js

import React from 'react';
import { supabase } from '../../backend/client'; // Assuming you have a supabase client configured
import './Header.css';

function Header({ text = "AquaHub Kenya Admin Panel" }) {

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error('Error logging out:', error);
        } else {
            window.location.href = '/'; // Redirect to login page after logout
        }
    };

    return (
      <header className="header">
        <h1 className="heading">{text}</h1>
        <button className="logout-button" onClick={handleLogout}>
          <p>Logout &rarr;</p>
        </button>
      </header>
    );
}

export default Header;
