import React          from 'react';
import Enzyme,
{ shallow }           from 'enzyme';
import EnzymeAdapter  from 'enzyme-adapter-react-16'
import App            from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without crashing', () => {
  const wrapper = shallow(<App/>);
  const appComponent = wrapper.find("[data-test='something']");
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = shallow(<App/>);
  const button = wrapper.find("[className='app-button']");
  expect(button.length).toBe(3);
});

test('renders counter display', () => {
  const wrapper = shallow(<App/>);
  const counterDisplay = wrapper.find("[className='counter-display']");
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at zero', () => {

});

test('clicking the button increment the counter display', () => {

});
