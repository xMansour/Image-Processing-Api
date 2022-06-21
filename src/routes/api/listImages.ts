import express from 'express';
import fs from 'fs';
import path from 'path';

const listImages = express.Router();
let rawData: string[] = [];

listImages.use((req: express.Request, res: express.Response, next): void => {
  rawData = [];
  fs.readdir(
    path.join(process.cwd(), path.join('assets', 'full')),
    (error, files) => {
      files.forEach((file) => {
        rawData.push(file);
      });
      next();
    }
  );
});

listImages.get('/', (req: express.Request, res: express.Response): void => {
  console.log('Log:: ListImages Route');
  let htmlTemplate = '<div><ol>';
  rawData.forEach((file) => {
    htmlTemplate += `<li style="font-size:18px; margin:10px;">${file}</li>`;
  });
  htmlTemplate += '</ol></div>';
  res.send(htmlTemplate);
});

export default listImages;
