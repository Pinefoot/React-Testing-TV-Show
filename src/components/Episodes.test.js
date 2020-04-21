import React from 'react';
import {render, getByText} from '@testing-library/react';
import Episodes from './Episodes';
import {testData} from '../testData';

//need data


test('renders list of episodes after API call', () =>{
    const {rerender, debug, queryAllByTestId} = render(<Episodes episodes={[]} />)
    // debug()
    //console.log(testData._embedded.episodes);

    rerender(<Episodes episodes={testData.data._embedded.episodes}/>)

    const episodes = queryAllByTestId(/episodesID/i)
    expect(episodes).toHaveLength(26)

})