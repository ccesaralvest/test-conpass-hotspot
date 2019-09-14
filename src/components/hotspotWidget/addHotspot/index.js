import React from 'react';
import './style.scss';

const AddHotspot = () => {
    return (
        <div className='addHotspot-wrapper' >
            <button data-test='addHotspot' className='addHotspot'>Create Hotspot</button>
        </div>
    );
}

export default AddHotspot;