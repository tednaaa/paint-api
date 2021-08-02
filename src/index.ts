import express from 'express';
import { router } from './router';
import { PORT } from './utils';
import cors from 'cors';
import { Server } from 'socket.io';
import { createServer } from 'http';
import { handleConnection } from './sockets';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(router);
io.on('connection', handleConnection);

app.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
