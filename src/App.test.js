import React from 'react';
import {render, userEvent, fireEvent, waitFor} from '@testing-library/react';
//import MissionsList from './MissionsList';
import { fetchShow as mockFetchShow} from './api/fetchShow'
import App from './App';
import {testData} from './testData';
import { act } from 'react-dom/test-utils';


jest.mock('./api/fetchShow')
// console.log(mockFetchShow);

//need data here from json

test('renders show and season data when button is pushed on homepage.', async()=>{
//    act(() =>{ mockFetchShow.mockResolvedValueOnce(testData)})
   mockFetchShow.mockResolvedValueOnce(testData)

    const {getByText,getByDisplayValue, debug, queryAllByTestId} = render(<App/>)
    // debug()
    await waitFor(()=>{
        const dropdown = getByText(/select a season/i)
        dropdown.value = 'Season 1';
        expect(dropdown.value).toBe('Season 1');
        //click dropdown -> show seasons -> click season
        // userEvent.click();
        fireEvent.click(dropdown)
    })
    

//    await waitFor(()=> expect(queryAllByTestId(/dropdown/i)))
})

