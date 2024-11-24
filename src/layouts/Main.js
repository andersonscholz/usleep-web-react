import React from 'react';
import NavBar from '../components/Navbar';

const Layout = ({ children, title }) => {
    return (
        <>
            <NavBar title={title}/>
            <main style={{padding: '20px' }}>{children}</main>
        </>
    );
};

export default Layout;
