// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from'./Footer';
import  {Outlet} from 'react-router-dom'

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-16">{children}
      <Outlet />
      </main> {/* mt-16 to adjust for fixed header */}
      <Footer />
     
    </div>
    
  );
}

export default Layout;
