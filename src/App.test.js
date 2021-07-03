import { render, screen } from '@testing-library/react';
import App from './App';
import { mount, configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<App/>', () => {
  it('Test Data', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('Login').length).toBe(0);
  });

  it('select field', () => {
    const wrapper = shallow(<App />);
    const select = wrapper.find('select#role');
    expect(wrapper.find('Login').length).toBe(0);
    select.first().simulate('change', { target: { value: 'React-Js' } });
    console.log(select, wrapper.find('#role').props());
    expect(wrapper.find('select').props().value).toBe('Java');
    expect(wrapper.find('Login').length).toBe(1);
    console.log('After', wrapper.debug());
  });
});
