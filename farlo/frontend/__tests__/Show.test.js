import React from 'react'
import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';
import Shows from '../src/components/Shows'; 
import axios from 'axios';

jest.mock('axios');

describe('Shows Component', () => {
  test('displays loading state initially', () => {
    render(<Shows />);
    const loadingText = screen.getByText(/Loading shows.../i);
    expect(loadingText).toBeInTheDocument();
  });

  test('displays error message when API call fails', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));
    render(<Shows />);

    await waitFor(() => {
      const errorText = screen.getByText(/Error fetching shows data. Please try again later./i);
      expect(errorText).toBeInTheDocument(); 
    });
  });

  test('displays shows when data is fetched successfully', async () => {
    const showsData = [
      { id: '1', title: 'Show 1', image: 'show1.jpg', see_tickets_url_infos: [{ url: 'http://booknow.com/1' }] },
      { id: '2', title: 'Show 2', image: 'show2.jpg', see_tickets_url_infos: [{ url: 'http://booknow.com/2' }] },
    ];
    axios.get.mockResolvedValue({ data: showsData });
    render(<Shows />);

    await waitFor(() => {
      expect(screen.getByText("Today's Deals")).toBeInTheDocument(); 
      expect(screen.getByText('Show 1')).toBeInTheDocument(); 
      expect(screen.getByText('Show 2')).toBeInTheDocument(); 
    });
  });
});
