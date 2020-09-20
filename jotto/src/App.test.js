import React       from 'react';
import { shallow } from 'enzyme';
import { render }  from '@testing-library/react';
import App         from './App';
import { 
  findByAttr, 
  storeFactory }   from '../test/testUtils'; 


const settup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />).dive().dive()
  return wrapper;
}


describe('redux properties', () => {
  test('add access to success state', () => {
    const success = true;
    const wrapper = settup({ success })
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  
  test('has access to `secretWord` state', () => {
    const secretWord = 'party';
    const wrapper = settup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord)
  });

  test('has access to `guessedWord` state', () => {
    const guessedWords = [{guessedWord: 'train', letterMatchCount: 3}];
    const wrapper = settup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toBe(guessedWords)
  });

  test('`getSecretWord` action creator is a function on the props', () => {
    const wrapper = settup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  })
});

test('renders learn react link', () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
