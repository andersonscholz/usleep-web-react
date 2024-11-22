import React from 'react';
import NavBar from '../components/Navbar';

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <main style={{ marginTop: '5vh', padding: '20px' }}>{children}</main>
        </>
    );
};

export default Layout;
