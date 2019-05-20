import React from 'react';
import { shallow } from 'enzyme';
import Red from './Red';

describe('Red component', () => {
  it('renders a red splotch', () => {
    const wrapper = shallow(<Red />);
    expect(wrapper).toMatchSnapshot();
  });
});
