import Enzyme, { shallow} from 'enzyme';
import React from 'react';
import User from './User';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('<User />', () => {
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
      const wrapper = shallow(<User userData={userData} />);
      wrapper.find('[class="btn-secondary"]').simulate('click');
   })
})