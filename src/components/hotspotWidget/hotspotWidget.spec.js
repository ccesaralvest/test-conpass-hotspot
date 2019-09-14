import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

import { shallow, configure } from 'enzyme';
import React from 'react';
import HotspotWidget from './index';

describe('HotspotWidget component', () => {
    it('Should be render', () => {
        const wrapper = shallow(<HotspotWidget />);
        expect(wrapper.find('.hotspot').length).toBe(1);
    })
});