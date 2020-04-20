import React from 'react';
import {render, getByText} from '@testing-library/react';
import Episodes from './Episodes';
import {testData} from '../testData'

//need data


test('renders list of episodes after API call', () =>{
    const {rerender, debug, queryAllByTestId} = render(<Episodes episodesID={[]} />)
    debug()

    rerender(<Episodes episodesID={testData}/>)

    const episodes = queryAllByTestId(/episodes/i)
    expect(episodes).toHaveLength()

})