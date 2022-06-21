import express from 'express';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const resize = express.Router();
const resizeImage = async (
  name: string,
  ext: string,
  width: number,
  height: number
) => {
  await sharp(path.join(process.cwd(), path.join('assets', 'full', `${name}`)))
    .resize({
      width: width,
      height: height
    })
    .toFile(
      path.join(
        process.cwd(),
        path.join(
          'assets',
          'thumb',
          `${name.slice(0, name.indexOf('-'))}-${width}x${height}${ext}`
        )
      )
    )
    .then((info) => {
      console.log('Success: ' + info);
    })
    .catch((err) => {
      console.log('Error: ' + err);
    });
};
const validate = (req: express.Request, res: express.Response): void => {};
resize.use((req: express.Request, res: express.Response, next): void => {
  req.name = String(req.query.imageName);
  req.width = Number(req.query.width);
  req.height = Number(req.query.height);
  req.ext = path.extname(String(req.query.imageName));
  req.inputPath = path.join(
    process.cwd(),
    path.join('assets', 'full', req.name)
  );
  req.outputPath = path.join(
    process.cwd(),
    path.join(
      'assets',
      'thumb',
      `${req.name.slice(0, req.name.indexOf('-'))}-${req.width}x${req.height}${
        req.ext
      }`
    )
  );
  next();
});

resize.use(
  async (req: express.Request, res: express.Response, next): Promise<void> => {
    if (fs.existsSync(req.outputPath)) {
      console.log('Image already resized and served from the cache');
      next();
    } else {
      if (fs.existsSync(req.inputPath)) {
        if (Number(req.width) !== NaN && Number(req.height) !== NaN) {
          if (req.width > 0 && req.height > 0) {
            await resizeImage(req.name, req.ext, req.width, req.height);
            console.log('Image resized');
            next();
          } else {
            res.send('<h3>Width and hieght must be positive integer numbers > 0</h3>');
          }
        } else {
          res.send('<h3>Width and hieght must be positive integer numbers</h3>');
        }
      } else {
        res.send("<h3>Invalid image name. Image isn't found</h3>");
      }
    }
  }
);

resize.get('/', (req: express.Request, res: express.Response): void => {
  console.log('Log:: Resize Route');
  res.sendFile(req.outputPath);
});

export default resize;
