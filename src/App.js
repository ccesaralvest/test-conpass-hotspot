import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import HotspotWidget from './components/hotspotWidget'
import 'normalize.css';
import './styles.scss';

export default class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Header />
                <HotspotWidget />
            </div>
        );
    }
};