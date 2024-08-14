// // Layout.js
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar'; // Import your Navbar component

const Layout = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/welcome'; // Hide Navbar on Welcome page

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Outlet /> {/* This will render the child routes */}
    </div>
  );
};

export default Layout;

