import express from 'express';
import resize from './api/resize';
//
const routes = express.Router();

routes.use('/resize', resize);
routes.use(express.static(`${process.cwd()}/public/`));

routes.get('/', (req, res) => {
  console.log('Log:: Main route');
  const indexFilePath = `${process.cwd()}/public/index.html`;
  res.sendFile(indexFilePath);
});

export default routes;
