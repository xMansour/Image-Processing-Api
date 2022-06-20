import express from 'express';
import fs from 'fs';

const listImages = express.Router();
let rawData: string[] = [];

listImages.use(async (req, res, next) => {
  rawData = [];
  fs.readdir(`${process.cwd()}/assets/full`, (error, files) => {
    files.forEach((file) => {
      rawData.push(file);
    });
    next();
  });
});

listImages.get('/', (req, res) => {
  console.log('Log:: ListImages Route');
  let htmlTemplate = '<div><ol>';
  rawData.forEach((file) => {
    htmlTemplate += `<li style="font-size:18px; margin:10px;">${file}</li>`;
  });
  htmlTemplate += '</ol></div>';
  res.send(htmlTemplate);
});

export default listImages;
