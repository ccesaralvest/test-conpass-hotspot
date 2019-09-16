import { createStore } from 'redux';

const INITIAL_STATE = {
    hotspots: [
        {
            id: Math.random(),
            title: 'Hotspot#1',
            description: 'Hotspot#1Hotspot#1Hotspot#1Hotspot#1Hotspot',
            styleHotspotModal: {
                top: 0,
                left: 0,
                position: 'absolute',
                width: '300px',
                heigth: '100px'
            },
            bullet: true
        },
        {
            id: Math.random(),
            title: 'Hotspot#2',
            description: 'Hotspot#2Hotspot#2Hotspot#2Hotspot#2Hotspot#2',
            styleHotspotModal: {
                top: 0,
                left: 0,
                position: 'absolute',
                width: '300px',
                heigth: '100px'
            },
            bullet: true
        }
    ]
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_MOUSE_STATUS':
            return {
                ...state,
                mouseInside:  action.mouseInside
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;