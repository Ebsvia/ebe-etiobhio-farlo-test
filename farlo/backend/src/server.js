"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 5000;
const DATA_FILE = './showsData.json';
// Middleware
app.use((0, cors_1.default)());
// Endpoint to get shows data
app.get('/api/shows', (req, res) => {
    fs_1.default.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading shows data.' });
        }
        res.json(JSON.parse(data));
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
