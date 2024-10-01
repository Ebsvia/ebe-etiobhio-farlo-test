import request from 'supertest';
import { app } from '../server';  
import fs from 'fs/promises';

jest.mock('fs/promises', () => ({
  readFile: jest.fn(),
}));

describe('GET /api/shows', () => {
  it('should return a 200 status and JSON response', async () => {
    const mockData = JSON.stringify([
      { id: '1', title: 'Show 1', image: 'show1.jpg', see_tickets_url_infos: [] },
    ]);

    fs.readFile.mockResolvedValue(mockData);

    const response = await request(app).get('/api/shows');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body[0].title).toBe('Show 1');
  });

  it('should return a 500 status if there is an issue reading the JSON file', async () => {
    // Mocking readFile to throw an error
    fs.readFile.mockRejectedValue(new Error('Error reading file'));

    const response = await request(app).get('/api/shows');
    expect(response.statusCode).toBe(500);  // Expecting 500 status
    expect(response.body.message).toBe('Error reading shows data.');
  });
});
