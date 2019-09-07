import React          from 'react';
import Enzyme,
{ shallow }           from 'enzyme';
import EnzymeAdapter  from 'enzyme-adapter-react-16'
import App            from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 *
 * Factory function to create a ShallowWrapper for the App component-app.
 * @function setup
 * @params {object} props - Component props specific for this setup.
 * @params {object} state - initial state for setup.
 * @returns {ShallowWrapper}
 */

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;

};

/**
 * Return ShallowWrapper containing node(s) with given data-test value.
 * @param {ShallowWrapper} wrapper  - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @return {ShallowWrapper }
 */

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[className="${val}"]`)

};

test('renders without crashing', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'app-container');
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const button =findByTestAttr(wrapper, 'increase-btn');
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper,'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at zero', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);

});

test('clicking the button increment the counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });

  //find button and click
  const button =findByTestAttr(wrapper, 'increase-btn');
  button.simulate('click');
  wrapper.update();

  //find counterDisplay and test value
  const counterDisplay = findByTestAttr(wrapper,'counter-display');
  expect(counterDisplay.text()).toContain( counter + 1);
});

test('clicking the button decrement the counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });

  //find button and click
  const button =findByTestAttr(wrapper, 'decrease-btn');
  button.simulate('click');
  wrapper.update();

  //find counterDisplay and test value
  const counterDisplay = findByTestAttr(wrapper,'counter-display');
  expect(counterDisplay.text()).toContain( counter - 1);
});

test('clicking the button erse the counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });

  //find button and click
  const button =findByTestAttr(wrapper, 'erase-btn');
  button.simulate('click');
  wrapper.update();

  //find counterDisplay and test value
  const counterDisplay = findByTestAttr(wrapper,'counter-display');
  expect(counterDisplay.text()).toContain(0);
});
