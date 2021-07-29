import express from 'express';
import { router } from './router';
import { PORT } from './utils';

const app = express();

app.use('/', router);

app.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
