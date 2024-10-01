import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'; 
import AdminLogin from './components/AdminLogin';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Customers from './components/Customers/Customers';
import Staff from './components/Staff/Staff';
import Suppliers from './components/Suppliers/Suppliers';
import ReportList from './components/Reports/ReportList';
import ReportDetails from './components/Reports/ReportDetails';
import './App.css';
import { supabase } from './backend/client.js';
import Loader from './components/Loader.js';


function App() {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarHidden(prevState => !prevState);
  };

  // Fetch customers
  const fetchCustomers = async () => {
    const { data, error } = await supabase.from("customers").select();
    if (error) {
      console.error(error);
    } else {
      setCustomers(data);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setLoading(false); // Loading finished

      if (session) {
        setIsAuthenticated(true);
        fetchCustomers(); // Fetch data only if authenticated
        // Don't navigate here; let the user choose from the sidebar
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, [navigate]); // Include navigate to avoid stale closures

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          {isAuthenticated ? (
            <>
              

              <div
                className={`main-layout ${
                  isSidebarHidden ? "sidebar-hidden" : ""
                }`}
              >
                <Sidebar className={isSidebarHidden ? "hidden" : ""} />
                
                <main>
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route
                      path="/customers"
                      element={<Customers customers={customers} />}
                    />
                    <Route path="/staff" element={<Staff />} />
                    <Route path="/suppliers" element={<Suppliers />} />
                    <Route path="/reports" element={<ReportList />} />
                    <Route
                      path="/reports/details/:id"
                      element={<ReportDetails />}
                    />
                    <Route
                      path="/settings"
                      element={<div>Settings Content</div>}
                    />
                  </Routes>
                </main>
              </div>
            </>
          ) : (
            <Routes>
              <Route
                path="/"
                element={<AdminLogin setIsAuthenticated={setIsAuthenticated} />}
              />
            </Routes>
          )}
        </>
      )}
    </div>
  );
}

// Wrap the App component with Router in the index.js or main entry file
const Main = () => (
  <Router>
    <App />
  </Router>
);

export default Main;
