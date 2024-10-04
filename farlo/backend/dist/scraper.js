"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const fs_1 = __importDefault(require("fs"));
const cron_1 = __importDefault(require("cron"));
const API_URL = 'https://officiallondontheatre.com/wp-json/shows/all-open';
const DATA_FILE = './showsData.json';
// Function to fetch and write data to file
function fetchAndStoreShows() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield (0, node_fetch_1.default)(API_URL);
            const data = yield response.json();
            fs_1.default.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
            console.log("Data fetched and saved.");
        }
        catch (error) {
            console.error("Error fetching shows data:", error);
        }
    });
}
// Schedule the task to run every 5 minutes
const job = new cron_1.default.CronJob('*/5 * * * *', fetchAndStoreShows);
job.start();
// Fetch data immediately when the scraper starts
fetchAndStoreShows();
