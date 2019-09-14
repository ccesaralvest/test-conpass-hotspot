import React from 'react';
import Header from './index';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('Header component', () => {
    it('Should be render', () => {
        const wrapper = shallow(<Header />);    

        expect(wrapper.find('header').length).toBe(1);
    })
});