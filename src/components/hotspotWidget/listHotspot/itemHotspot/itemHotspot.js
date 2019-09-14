import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

import { shallow, configure } from 'enzyme';
import React from 'react';
import Hotspot from './index';

describe('Hotspot component', () => {
    it('Should be render', () => {
        const wrapper = shallow(<Hotspot />);
        expect(wrapper.find('.hotspot').length).toBe(1);
    })
});