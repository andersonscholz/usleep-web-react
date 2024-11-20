import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const MyNavbar = () => {
    return (
        <Navbar
            expand="lg"
            className="custom-navbar"
            style={{
                position: 'relative',
                minHeight: '15vh',
                background: 'linear-gradient(180deg, black, transparent)',
            }}
        >
            <Link
                to="/"
                style={{
                    position: 'absolute',
                    left: '10%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'white',
                }}
            >
                <FaHome size={48} />
            </Link>

            <Navbar.Brand
                style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: 'white',
                    fontWeight: 'bold',
                }}
            >
                uSleep
            </Navbar.Brand>
        </Navbar>
    );
};

export default MyNavbar;
