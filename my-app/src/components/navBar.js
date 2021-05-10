import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [Button, setButton] = useState(true);
    const showButton = () => {
        if(window.innerWidth <= 968) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className='navBar'>
            <div className='navBar-container'>
                <Link to="/" className='navBar-logo'>
                    SABS <i class="fas fa-server"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/aboutMe' className='nav-links' onClick={closeMobileMenu}>
                            About Me
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/profImage' className='nav-links' onClick={closeMobileMenu}>
                            Professional Image
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
                            Portfolio
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/service' className='nav-links' onClick={closeMobileMenu}>
                            Service
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
        </>
    )
}

export default NavBar


{/* uses font awesome CDN for fonts */}