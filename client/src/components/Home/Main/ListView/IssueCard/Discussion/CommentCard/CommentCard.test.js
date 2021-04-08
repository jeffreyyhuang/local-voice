import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CommentCard from './CommentCard.jsx';

configure({ adapter: new Adapter() });
const comment = { text: 'this is some sample text' };
const user = { username: 'sampleUser123' };

describe('testing the comment card', () => {
  const wrapper = shallow(<CommentCard comment={comment} user={user} />);

  // it('should render two divs', () => {
  //   const mainDiv = wrapper.find('#comment');
  //   expect(mainDiv.find('#comment').children()).toHaveLength(2);
  // });
  it('should render text correctly', () => {
    const mainDiv = wrapper.find('#comment');
    expect(mainDiv.find('#comment').childAt(0).text()).toEqual('sampleUser123');
  });
});
