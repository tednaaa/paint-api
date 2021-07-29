import express from 'express';
import { router } from './router';
import { PORT } from './utils';

const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(router);

app.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
