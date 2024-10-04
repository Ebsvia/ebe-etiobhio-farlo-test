import fetch from "node-fetch";
import fs from "fs";
import { CronJob } from "cron";

const API_URL = "https://officiallondontheatre.com/wp-json/shows/all-open";
const DATA_FILE = "../../backend/showsData.json";

// Define types for the response structure
interface Show {
  id: string;
  title: string;
  image: string;
  see_tickets_url_infos: { url: string }[];
}

// Function to fetch and write data to file
async function fetchAndStoreShows(): Promise<void> {
  try {
    const response = await fetch(API_URL);
    const data: Show[] = await response.json();
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    console.log("Data fetched and saved.");
  } catch (error) {
    console.error("Error fetching shows data:", error);
  }
}

// Schedule the task to run every 5 minutes
const job = new CronJob("*/5 * * * *", fetchAndStoreShows);
job.start();

// Fetch data immediately when the scraper starts
fetchAndStoreShows();
