import React from 'react';
import './style.scss';
import AddHotspot from './addHotspot';
import ListHotspot from './listHotspot'

const HotspotWidget = () => {
    return (
        <section data-test='hotspotWidget' className='hotspotWidget'>
            <AddHotspot />
            <ListHotspot />
        </section>
    );
}

export default HotspotWidget;