import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom'

import PlayersCard from './PlayersCard';

afterEach(rtl.cleanup);

test('cards are rendered', () => {
    const wrapper = rtl.render(<PlayersCard />)
    const name = wrapper.getByText('Name: ')

    expect(name).toBeVisible()

    const country = wrapper.getByText('Country: ')

    expect(country).toBeVisible()

    const searches = wrapper.getByText('Searches: ')
    
    expect(searches).toBeVisible()

  })




  //Need some data inside the card to stand in for our real data.