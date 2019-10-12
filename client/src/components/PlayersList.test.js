import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom'

import PlayersList from './PlayersList';

afterEach(rtl.cleanup);

test('cards are rendered', () => {
    const wrapper = rtl.render(<PlayersList />)
    console.log(wrapper)
  })