import React from 'react';
import './style.scss';
import logo from './../../assets/images/logo-conpass.png';


const Header = () => {
    return ( 
        <header data-test='header' className='header'>
            <img src={logo} data-test='logo-conpass' className='logo-conpass' /> 
            
            <nav className='navigation-menu'>
                <ul className='options-wrapper-menu'>
                    <li data-test='option-item' className='option-item'><a href='/'>Link fake 1</a></li>
                    <li data-test='option-item' className='option-item'><a href='/'>Link fake 2</a></li>
                    <li data-test='option-item' className='option-item'><a href='/'>Link fake 3</a></li>
                    <li data-test='option-item' className='option-item'><a href='/'>Link fake 4</a></li>                        
                </ul>
            </nav>
        </header>
    );
};
export default Header;