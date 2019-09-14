import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, configure } from 'enzyme';
import React from 'react';
import HotspotWidget from './index';
import findByTestAtrr from './../../utils.js'

describe('HotspotWidget component', () => {
    const setUp = (props = {}) => {
        const component = shallow(<HotspotWidget {...props} />);
        return component;
    };
    let component;
    
    beforeEach(() => {
        component = setUp();
    });

    it('Should be render', () => {
        const wrapper = findByTestAtrr(component,'hotspotWidget' );
        expect(wrapper.length).toBe(1);
    });
});