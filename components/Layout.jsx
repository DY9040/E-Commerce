import React from 'react';
import Head from 'next/link';

import NavBar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
        <head>
            <title>Trash Panda Apparel</title>
        </head>
        <header>
            <NavBar />
        </header>
        <main className="main-container">
            {children}
        </main>
        <footer>
            <Footer />
        </footer>

    </div>
  )
}

export default Layout