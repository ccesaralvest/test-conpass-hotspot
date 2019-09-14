import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

import { shallow, configure } from 'enzyme';
import React from 'react';
import ListHotspot from './index';

describe('ListHotspot component', () => {
    it('Should be render', () => {
        const wrapper = shallow(<ListHotspot />);
        expect(wrapper.find('.ListHotspot').length).toBe(1);
    })
});