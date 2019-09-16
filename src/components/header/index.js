import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.scss';
import logo from './../../assets/images/logo-conpass.png';


const Header = () => {
    // const dispatch = useDispatch();
    // const mouseInside =  useSelector(state => state.mouseInside);

    // const changeMouseStatus = (status) => {
    //     dispatch({
    //         type: 'CHANGE_MOUSE_STATUS',
    //         mouseInside: status
    //     })
    // }
   
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