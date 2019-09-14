import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

import { shallow, configure } from 'enzyme';
import React from 'react';
import Footer from './index';

describe('Footer component', () => {
    it('Should be render', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('footer').length).toBe(1);
    })
});