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
            <h1>{text}</h1>
            <div className="logout-container">
                <button className="logout-button" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </header>
    );
}

export default Header;
