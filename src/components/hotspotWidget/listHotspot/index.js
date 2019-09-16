import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

const ListHotspot = () => {
    const hotspots = useSelector(state => state.hotspots);

    return (
        <section data-test='listHotspot' className='listHotspot'>
            <h1 className='listHotspot-title' data-test='listHotspot-title'>List of Hotspots</h1>
            <nav>
                <ul className='options-wrapper'>
                   { 
                       hotspots.map( hotspot => 
                            <li key={hotspot.id}>
                                <p className='item-hotspot' >{hotspot.title}</p>
                                <button className='delete-button'>Delete</button>
                            </li>
                        )
                    }
                </ul>
            </nav>
        </section>
    );
};

export default ListHotspot;