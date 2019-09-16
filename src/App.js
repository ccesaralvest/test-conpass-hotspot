import React from 'react';
import store from './store';
import { Provider, useDispatch, useSelector } from 'react-redux';       

import Header from './components/header';
import HotspotWidget from './components/hotspotWidget';
import 'normalize.css/normalize.css';
import './styles.scss';

const App = () => {
    return (
        <Provider store={store} >
            <div className='container'>
                <Header />
                <HotspotWidget />
            </div>
        </Provider>
    );
};

export default App;