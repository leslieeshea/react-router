import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Color component', () => {
  it('renders a color splotch', () => {
    const match = {
      params: {
        color: 'purple'
      }
    };

    const wrapper = shallow(<Color match={match} />);
    expect(wrapper).toMatchSnapshot();
  });
});
