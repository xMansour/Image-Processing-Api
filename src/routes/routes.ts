import express from 'express';
import resize from './api/resize';
import listImages from './api/listImages';
import path from "path";

const routes = express.Router();
routes.use('/resize', resize);
routes.use('/listimages', listImages);
routes.use(express.static(path.join(process.cwd(), "public")));
routes.get('/', (req: express.Request, res: express.Response) => {
  console.log('Log:: Main route');
  const indexFilePath = path.join(process.cwd(), "public", "index.html");
  res.sendFile(indexFilePath);
});


export default routes;
