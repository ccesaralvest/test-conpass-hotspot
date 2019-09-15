import React from 'react';
import './style.scss';

export default class ListHotspot extends React.Component {
    render() {
        return (
            <section data-test='listHotspot' className='listHotspot'>
                <h1 className='listHotspot-title' data-test='listHotspot-title'>List of Hotspots</h1>
                <ul className='options-wrapper'>
                    <li>
                        <p className='item-hotspot'>Item Hotspot</p>
                        <button className='delete-button'>Delete</button>
                    </li>
                    <li><p className='item-hotspot'>Item Hotspot</p><button className='delete-button'>Delete</button></li>
                    <li><p className='item-hotspot'>Item Hotspot</p><button className='delete-button'>Delete</button></li>
                </ul>
            </section>
        );
    }
};