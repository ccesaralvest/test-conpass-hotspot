import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import Hotspot from './components/hotspot'

export default class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Hotspot />
                <Footer />
            </>
        );
    }
};