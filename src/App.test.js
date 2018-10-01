import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import App from './App';

configure({ adapter: new Adapter() });

it('<APP /> render', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('header')).to.have.length(1);
  expect(wrapper.find('p')).to.have.length(1);
});
