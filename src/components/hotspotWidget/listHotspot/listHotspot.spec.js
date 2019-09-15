import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, configure } from 'enzyme';
import React from 'react';
import ListHotspot from './index';
import findByTestAtrr from './../../../utils.js'

describe('AddHotspot component', () => {
    const setUp = () => {
        const component = shallow(<ListHotspot />);
        return component;
    };
    
    let component;
    
    beforeEach(() => {
        component = setUp();
    });

    it('Should be render', () => {
        const wrapper = findByTestAtrr(component,'listHotspot' );
        expect(wrapper.length).toBe(1);
    });
});