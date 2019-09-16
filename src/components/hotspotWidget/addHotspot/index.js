import React from 'react';
import { useDispatch } from 'react-redux'; 
import Modal from './../modal'
import './style.scss';


const AddHotspot = () => {
    const handleClickAddHotspot = (e) => {
        e.preventDefault();
        document.addEventListener("click", (e) => {
            getPosition(e.clientX, e.clientY);
        });
    }

    return (
        <div className='addHotspot-wrapper' >
            <button data-test='addHotspot' className='addHotspot' onClick={handleClickTrack}>Create Hotspot</button>
        </div>
    );
}

export default AddHotspot;