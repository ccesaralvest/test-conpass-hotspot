import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

import { shallow, configure } from 'enzyme';
import React from 'react';
import AddHotspot from './index';

describe('AddHotspot component', () => {
    it('Should be render', () => {
        const wrapper = shallow(<AddHotspot />);
        expect(wrapper.find('.AddHotspot').length).toBe(1);
    })
});