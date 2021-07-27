import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns { ShallowWrapper }
 */

const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders without error', () => {
  const wrapper = setup(0);
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test('render decrement button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'decrement-button');
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counter = findByTestAttr(wrapper, 'counter-display');
  expect(counter.length).toBe(1);
});

test('counter display start at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, 'counter').text();
  expect(count).toBe('0');
});

test('clicking button increments counter', () => {
  const wrapper = setup();
  //find the button
  const button = findByTestAttr(wrapper, 'increment-button');
  //click the button
  button.simulate('click');
  //find the display, an test that the number has been incremented
  const count = findByTestAttr(wrapper, 'counter').text();
  expect(count).toBe('1');
});

test('cliking button decrements counter', () => {
  const wrapper = setup();
  const incrementButton = findByTestAttr(wrapper, 'increment-button');
  incrementButton.simulate('click');

  const decrementButton = findByTestAttr(wrapper, 'decrement-button');
  decrementButton.simulate('click');

  const count = findByTestAttr(wrapper, 'counter').text();

  expect(count).toBe('0');
});

test('show error when user tries negative value', () => {
  const wrapper = setup();
  //get decrement button
  const decrementButton = findByTestAttr(wrapper, 'decrement-button');
  //simulates decrement button click
  decrementButton.simulate('click');
  //get errorh2 element
  const errorh2 = findByTestAttr(wrapper, 'counter-error').text();
  //assertion to be error description
  expect(errorh2).toBe("The counter can't go below zero");
});
