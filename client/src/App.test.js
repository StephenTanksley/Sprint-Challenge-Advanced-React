import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom'

import App from './App';

afterEach(rtl.cleanup);

  test('cards are rendered', () => {
    const wrapper = rtl.render(<App />)
    const element = wrapper.getByText('Women\'s World Cup Player Searches')
    console.log(element)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });