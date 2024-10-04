import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import axiosMock from 'axios-mock-adapter';
import Shows from './Shows';

const mock = new axiosMock(axios);

// Mock data
const mockShows = [
  {
    id: '1',
    title: 'Show 1',
    image_url: 'https://example.com/show1.jpg',
    see_tickets_url_infos: [{ url: 'https://tktsonline.seetickets.com' }]
  },
  {
    id: '2',
    title: 'Show 2',
    image_url: 'https://example.com/show2.jpg',
    see_tickets_url_infos: []
  }
];

test('renders shows and handles sold-out shows', async () => {
  mock.onGet('http://localhost:5001/api/shows').reply(200, mockShows);

  render(<Shows />);

  // Wait for the data to be fetched and rendered
  await waitFor(() => screen.getByText((content) => content.includes('Show 1')));

  // Check if both shows are rendered
  expect(screen.getByText('Show 1')).toBeInTheDocument();
  expect(screen.getByText('Show 2')).toBeInTheDocument();

  // Check if the first show has a "BOOK NOW" button
  expect(screen.getByText('BOOK NOW')).toBeInTheDocument();

  // Check if the second show is sold out
  expect(screen.getByText('SOLD OUT')).toBeInTheDocument();
});
