import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, configure } from 'enzyme';
import React from 'react';
import Header from './index';
import findByTestAtrr from './../../utils.js'


describe('Header component', () => {
    const setUp = (props = {}) => {
        const component = shallow(<Header {...props} />);
        return component;
    };

    let component;
    
    beforeEach(() => {
        component = setUp();
    })

    it('Should be render', () => {
        const wrapper = findByTestAtrr(component,'header' );
        expect(wrapper.length).toBe(1);
    });

    it('Should has a Logo', () => {
        const wrapper = findByTestAtrr(component,'logo-conpass' );
        expect(wrapper.length).toBe(1);
    });

    it('Should has 4 options', () => {
        const wrapper = findByTestAtrr(component,'option-item' );
        expect(wrapper.length).toBe(4);
    });
});