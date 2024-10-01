import fetch from 'node-fetch';
import fs from 'fs';
import dotenv from 'dotenv';
import { CronJob } from 'cron';
dotenv.config({ path: '.env' });

const API_URL = process.env.API_URL || 'https://officiallondontheatre.com/wp-json/shows/all-open';
const DATA_FILE = './showsData.json';

export async function fetchAndStoreShows() {
  try {
    if (!API_URL) {
      throw new Error('API_URL is not defined in .env');
    }
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();

    const sanitisedData = data.map((show) => ({
      id: show.id,
      title: show.title || 'Untitled Show',
      image: show.image || 'No Image',
      see_tickets_url_infos: show.see_tickets_url_infos || [],
    }));

    fs.writeFileSync(DATA_FILE, JSON.stringify(sanitisedData, null, 2));
    console.log('Data fetched and saved.');
  } catch (error) {
    console.error('Error fetching shows data:', error.message);
    throw error;
  }
}

// This job will run every 5 minutes
const job = new CronJob('*/5 * * * *', fetchAndStoreShows);
job.start();

fetchAndStoreShows(); 
