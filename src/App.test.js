import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react';
//import MissionsList from './MissionsList';
import { fetchShow as mockFetchShow} from './api/fetchShow'
import App from './App';


jest.mock('./api/fetchShow')
console.log(mockFetchShow);

//need data here from json

test('renders show and season data when button is pushed on homepage.')

