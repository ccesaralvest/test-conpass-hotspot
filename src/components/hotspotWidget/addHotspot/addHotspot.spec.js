import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, configure } from 'enzyme';
import React from 'react';
import AddHotspot from './index';
import findByTestAtrr from './../../../utils.js'

describe('AddHotspot component', () => {
    const setUp = (props = {}) => {
        const component = shallow(<AddHotspot {...props} />);
        return component;
    };
    
    let component;
    
    beforeEach(() => {
        component = setUp();
    });

    it('Should be render', () => {
        const wrapper = findByTestAtrr(component,'addHotspot' );
        expect(wrapper.length).toBe(1);
    });
});