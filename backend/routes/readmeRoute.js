import express from 'express';
import path from 'path';
import fs from 'fs/promises';

export const readmeRouter = express.Router();

readmeRouter.get('/', async (req, res) => {
  try {
    const readmePath = path.join(process.cwd(), 'README.md');
    const data = await fs.readFile(readmePath, 'utf8');
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error reading README.md file');
  }
});
