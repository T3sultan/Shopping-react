import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <div>

            <nav className="nav">
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/inventory">Mange Inverntory</a>
            </nav>

        </div>
    );
};

export default Nav;