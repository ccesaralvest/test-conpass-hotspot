import React from 'react';
import './style.scss';


const Header = () => {
    return ( 
        <header data-test='header'>
            <img data-test='logo-conpass'/> 
            <nav>
                <ul>
                    <li data-test='option-item'></li>
                    <li data-test='option-item'></li>
                    <li data-test='option-item'></li>
                    <li data-test='option-item'></li>                        
                </ul>
            </nav>
        </header>
    );
};
export default Header;