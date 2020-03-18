import Enzyme, { shallow} from 'enzyme';
import React from 'react';
import UserProfile from './UserProfile';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('<UserProfile />', () => {
   it('Show user profile', () => {
      const userData = {
         name: 'test',
         username: 'test',
         email: 'test',
         phone: '12345',
         website: 'www.test.com',
         company: {
            name: 'Test Inc'
         }
      }
      const wrapper = shallow(<UserProfile userDetails={userData} />);
      expect(wrapper.props().userData.name).toEqual({name:'jest'});
      // expect(shallow(<UserProfile userDetails={userData} />)).toMatchSnapshot();
   })
})