import express from 'express';
import routes from './routes/routes';
const app = express();
const port = 3000;

app.use('/', routes);
app.listen(port, () => {
  console.log(`Server started at 127.0.0.1:${port}/`);
});

export default app;
