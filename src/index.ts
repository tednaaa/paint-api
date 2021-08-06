import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';
import { createServer } from 'http';
import { CORS_CLIENT_URL, PORT } from './utils';
import { router } from './router';
import { handleConnection } from './socket';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: CORS_CLIENT_URL,
  },
});

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(router);
io.on('connection', handleConnection);

httpServer.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
